/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  SingleCharPatternModal: () => SingleCharPatternModal,
  default: () => VimMultibyteCharSearchPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var SingleCharPatternModal = class extends import_obsidian.SuggestModal {
  constructor(app, callback) {
    super(app);
    this.callback = callback;
  }
  getSuggestions(query) {
    return [{ search_pattern: query }];
  }
  renderSuggestion(single_char_pattern, el) {
    el.createEl("div", { text: single_char_pattern.search_pattern });
  }
  onChooseSuggestion(single_char_pattern, evt) {
    this.callback(single_char_pattern.search_pattern);
  }
};
var VimMultibyteCharSearchPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.code_mirror_vim_object = null;
    this.complex_char_2_simple_char_mapping = null;
  }
  initialize() {
    var _a;
    const is_use_legacy_editor = this.app.vault.getConfig("legacyEditor");
    if (is_use_legacy_editor) {
      this.code_mirror_vim_object = CodeMirror.Vim;
      console.log("Vimrc plugin: using CodeMirror 5 mode");
    } else {
      this.code_mirror_vim_object = (_a = window.CodeMirrorAdapter) == null ? void 0 : _a.Vim;
      console.log("Vimrc plugin: using CodeMirror 6 mode");
    }
  }
  load_dict() {
    return __async(this, null, function* () {
      const dict_content = yield this.app.vault.adapter.read(".obsidian/plugins/obsidian-vim-multibyte-char-search/pinyin_search.dict.txt");
      this.complex_char_2_simple_char_mapping = new ComplexChar2SimpleCharMapping(dict_content);
    });
  }
  set_pattern(search_pattern, editor) {
    const vim_global_state = this.code_mirror_vim_object.getVimGlobalState_();
    const enriched_pattern = this.complex_char_2_simple_char_mapping.gen_enriched_pattern(search_pattern, editor.getValue());
    vim_global_state.query = enriched_pattern;
  }
  onload() {
    return __async(this, null, function* () {
      this.app.workspace.onLayoutReady(this.initialize.bind(this));
      this.load_dict();
      this.addCommand({
        id: "enrich-current-vim-search-pattern",
        name: "Enrich Current VIM Search Pattern",
        editorCallback: (editor) => {
          const vim_global_state = this.code_mirror_vim_object.getVimGlobalState_();
          const vim_search_pattern = vim_global_state.query;
          if (vim_search_pattern == null) {
            return;
          }
          const search_pattern = vim_search_pattern.source;
          if (this.complex_char_2_simple_char_mapping == null) {
            new import_obsidian.Notice("Complex char to simple char dict is not ready yet.");
            return;
          }
          this.set_pattern(search_pattern, editor);
        }
      });
      this.addCommand({
        id: "search-multibytes",
        name: "Search Multibytes",
        editorCallback: (editor) => {
          new SingleCharPatternModal(this.app, (search_pattern) => this.set_pattern(search_pattern, editor)).open();
        }
      });
      console.log("VimMultibyteCharSearchPlugin load successfully.");
    });
  }
  onunload() {
  }
};
var ComplexChar2SimpleCharMapping = class {
  constructor(dict_content) {
    this._dict = new Map();
    dict_content.split("\n").forEach((line, index) => {
      line = line.trim();
      if (line != "") {
        const fields = line.split(" ");
        console.assert(fields.length == 2, `Dictionary line ${index + 1} "${line}" doesn't have 2 fields.`);
        const complex_char = fields[0];
        const simple_chars = fields[1];
        this._dict.set(complex_char, simple_chars);
      }
    });
  }
  find_next(query, content, content_idx) {
    let query_idx = 0;
    for (; content_idx < content.length; content_idx++) {
      const c = content[content_idx];
      let simple_chars = this._dict.get(c);
      if (simple_chars == null) {
        simple_chars = c;
      }
      if (simple_chars.indexOf(query[query_idx]) != -1) {
        query_idx += 1;
      } else if (simple_chars.indexOf(query[0]) != -1) {
        query_idx = 1;
      } else {
        query_idx = 0;
      }
      if (query_idx == query.length) {
        break;
      }
    }
    if (query_idx == query.length) {
      return content_idx - query.length + 1;
    } else {
      return -1;
    }
  }
  gen_match_list(query, content) {
    if (query.length == 0) {
      return [];
    }
    let start_idx = 0;
    let matched_idx = 0;
    const match_list = [];
    while (matched_idx != -1) {
      matched_idx = this.find_next(query, content, start_idx);
      if (matched_idx != -1) {
        const word = content.slice(matched_idx, matched_idx + query.length);
        match_list.push(word);
        start_idx = matched_idx + 1;
      }
    }
    return match_list;
  }
  gen_enriched_pattern(query, content) {
    const match_list = this.gen_match_list(query, content);
    const pattern = new RegExp(match_list.join("|"), "im");
    return pattern;
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE5vdGljZSwgUGx1Z2luLCBTdWdnZXN0TW9kYWwgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IENvZGVNaXJyb3I6IGFueTtcclxuZGVjbGFyZSBtb2R1bGUgXCJvYnNpZGlhblwiIHtcclxuXHRpbnRlcmZhY2UgVmF1bHQge1xyXG5cdFx0Z2V0Q29uZmlnKGNvbmZpZ19uYW1lOiBzdHJpbmcpOiBhbnk7XHJcblx0fVxyXG59XHJcbmludGVyZmFjZSBTaW5nbGVDaGFyUGF0dGVybiB7XHJcblx0c2VhcmNoX3BhdHRlcm46IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIFNlYXJjaE11bHRpYnl0ZXNGdW5jID0gKHNlYXJjaF9wYXR0ZXJuOiBzdHJpbmcpID0+IHZvaWQ7XHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVDaGFyUGF0dGVybk1vZGFsIGV4dGVuZHMgU3VnZ2VzdE1vZGFsPFNpbmdsZUNoYXJQYXR0ZXJuPiB7XHJcblx0Y2FsbGJhY2s6IFNlYXJjaE11bHRpYnl0ZXNGdW5jO1xyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBjYWxsYmFjazogU2VhcmNoTXVsdGlieXRlc0Z1bmMpXHJcblx0e1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcblx0fVxyXG5cdC8vIFJldHVybnMgYWxsIGF2YWlsYWJsZSBzdWdnZXN0aW9ucy5cclxuXHRnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogU2luZ2xlQ2hhclBhdHRlcm5bXSB7XHJcblx0XHRyZXR1cm4gW3tzZWFyY2hfcGF0dGVybjogcXVlcnl9XTtcclxuXHR9XHJcblxyXG5cdC8vIFJlbmRlcnMgZWFjaCBzdWdnZXN0aW9uIGl0ZW0uXHJcblx0cmVuZGVyU3VnZ2VzdGlvbihzaW5nbGVfY2hhcl9wYXR0ZXJuOiBTaW5nbGVDaGFyUGF0dGVybiwgZWw6IEhUTUxFbGVtZW50KSB7XHJcblx0XHRlbC5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IHNpbmdsZV9jaGFyX3BhdHRlcm4uc2VhcmNoX3BhdHRlcm4gfSk7XHJcblx0fVxyXG5cclxuXHQvLyBQZXJmb3JtIGFjdGlvbiBvbiB0aGUgc2VsZWN0ZWQgc3VnZ2VzdGlvbi5cclxuXHRvbkNob29zZVN1Z2dlc3Rpb24oc2luZ2xlX2NoYXJfcGF0dGVybjogU2luZ2xlQ2hhclBhdHRlcm4sIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpIHtcclxuXHRcdHRoaXMuY2FsbGJhY2soc2luZ2xlX2NoYXJfcGF0dGVybi5zZWFyY2hfcGF0dGVybik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmltTXVsdGlieXRlQ2hhclNlYXJjaFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0cHJpdmF0ZSBjb2RlX21pcnJvcl92aW1fb2JqZWN0OiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgY29tcGxleF9jaGFyXzJfc2ltcGxlX2NoYXJfbWFwcGluZzogQ29tcGxleENoYXIyU2ltcGxlQ2hhck1hcHBpbmcgPSBudWxsO1xyXG5cclxuXHRpbml0aWFsaXplKCkge1xyXG5cdFx0Y29uc3QgaXNfdXNlX2xlZ2FjeV9lZGl0b3IgPSB0aGlzLmFwcC52YXVsdC5nZXRDb25maWcoJ2xlZ2FjeUVkaXRvcicpIGFzIGJvb2xlYW5cclxuXHRcdGlmIChpc191c2VfbGVnYWN5X2VkaXRvcikge1xyXG5cdFx0XHR0aGlzLmNvZGVfbWlycm9yX3ZpbV9vYmplY3QgPSBDb2RlTWlycm9yLlZpbTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1ZpbXJjIHBsdWdpbjogdXNpbmcgQ29kZU1pcnJvciA1IG1vZGUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY29kZV9taXJyb3JfdmltX29iamVjdCA9ICh3aW5kb3cgYXMgYW55KS5Db2RlTWlycm9yQWRhcHRlcj8uVmltO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnVmltcmMgcGx1Z2luOiB1c2luZyBDb2RlTWlycm9yIDYgbW9kZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZF9kaWN0KCkge1xyXG5cdFx0Y29uc3QgZGljdF9jb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKFwiLm9ic2lkaWFuL3BsdWdpbnMvb2JzaWRpYW4tdmltLW11bHRpYnl0ZS1jaGFyLXNlYXJjaC9waW55aW5fc2VhcmNoLmRpY3QudHh0XCIpO1xyXG5cdFx0dGhpcy5jb21wbGV4X2NoYXJfMl9zaW1wbGVfY2hhcl9tYXBwaW5nID0gbmV3IENvbXBsZXhDaGFyMlNpbXBsZUNoYXJNYXBwaW5nKGRpY3RfY29udGVudCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldF9wYXR0ZXJuKHNlYXJjaF9wYXR0ZXJuOiBzdHJpbmcsIGVkaXRvcjogRWRpdG9yKSB7XHJcblx0XHRjb25zdCB2aW1fZ2xvYmFsX3N0YXRlID0gdGhpcy5jb2RlX21pcnJvcl92aW1fb2JqZWN0LmdldFZpbUdsb2JhbFN0YXRlXygpO1xyXG5cdFx0Y29uc3QgZW5yaWNoZWRfcGF0dGVybiA9IHRoaXMuY29tcGxleF9jaGFyXzJfc2ltcGxlX2NoYXJfbWFwcGluZy5nZW5fZW5yaWNoZWRfcGF0dGVybihcclxuXHRcdFx0c2VhcmNoX3BhdHRlcm4sXHJcblx0XHRcdGVkaXRvci5nZXRWYWx1ZSgpXHJcblx0XHQpO1xyXG5cdFx0dmltX2dsb2JhbF9zdGF0ZS5xdWVyeSA9IGVucmljaGVkX3BhdHRlcm47XHJcblx0fVxyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSh0aGlzLmluaXRpYWxpemUuYmluZCh0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5sb2FkX2RpY3QoKTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2VucmljaC1jdXJyZW50LXZpbS1zZWFyY2gtcGF0dGVybicsXHJcblx0XHRcdG5hbWU6ICdFbnJpY2ggQ3VycmVudCBWSU0gU2VhcmNoIFBhdHRlcm4nLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdmltX2dsb2JhbF9zdGF0ZSA9IHRoaXMuY29kZV9taXJyb3JfdmltX29iamVjdC5nZXRWaW1HbG9iYWxTdGF0ZV8oKTtcclxuXHRcdFx0XHRjb25zdCB2aW1fc2VhcmNoX3BhdHRlcm4gPSB2aW1fZ2xvYmFsX3N0YXRlLnF1ZXJ5O1xyXG5cdFx0XHRcdGlmICh2aW1fc2VhcmNoX3BhdHRlcm4gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBzZWFyY2hfcGF0dGVybiA9IHZpbV9zZWFyY2hfcGF0dGVybi5zb3VyY2U7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29tcGxleF9jaGFyXzJfc2ltcGxlX2NoYXJfbWFwcGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRuZXcgTm90aWNlKFwiQ29tcGxleCBjaGFyIHRvIHNpbXBsZSBjaGFyIGRpY3QgaXMgbm90IHJlYWR5IHlldC5cIilcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0X3BhdHRlcm4oc2VhcmNoX3BhdHRlcm4sIGVkaXRvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ3NlYXJjaC1tdWx0aWJ5dGVzJyxcclxuXHRcdFx0bmFtZTogJ1NlYXJjaCBNdWx0aWJ5dGVzJyxcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdG5ldyBTaW5nbGVDaGFyUGF0dGVybk1vZGFsKHRoaXMuYXBwLCAoc2VhcmNoX3BhdHRlcm4pID0+IHRoaXMuc2V0X3BhdHRlcm4oc2VhcmNoX3BhdHRlcm4sIGVkaXRvcikpLm9wZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIlZpbU11bHRpYnl0ZUNoYXJTZWFyY2hQbHVnaW4gbG9hZCBzdWNjZXNzZnVsbHkuXCIpXHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuY2xhc3MgQ29tcGxleENoYXIyU2ltcGxlQ2hhck1hcHBpbmcge1xyXG5cdF9kaWN0OiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkaWN0X2NvbnRlbnQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fZGljdCA9IG5ldyBNYXAoKTtcclxuXHRcdGRpY3RfY29udGVudC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKFxyXG5cdFx0XHQobGluZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0bGluZSA9IGxpbmUudHJpbSgpO1xyXG5cdFx0XHRcdGlmIChsaW5lICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGxpbmUuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUuYXNzZXJ0KGZpZWxkcy5sZW5ndGggPT0gMixcclxuXHRcdFx0XHRcdFx0YERpY3Rpb25hcnkgbGluZSAke2luZGV4ICsgMX0gXCIke2xpbmV9XCIgZG9lc24ndCBoYXZlIDIgZmllbGRzLmApO1xyXG5cdFx0XHRcdFx0Y29uc3QgY29tcGxleF9jaGFyID0gZmllbGRzWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2ltcGxlX2NoYXJzID0gZmllbGRzWzFdO1xyXG5cdFx0XHRcdFx0dGhpcy5fZGljdC5zZXQoY29tcGxleF9jaGFyLCBzaW1wbGVfY2hhcnMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0ZmluZF9uZXh0KHF1ZXJ5OiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgY29udGVudF9pZHg6IG51bWJlcikge1xyXG5cdFx0bGV0IHF1ZXJ5X2lkeCA9IDA7XHJcblx0XHRmb3IgKDsgY29udGVudF9pZHggPCBjb250ZW50Lmxlbmd0aDsgY29udGVudF9pZHgrKykge1xyXG5cdFx0XHRjb25zdCBjID0gY29udGVudFtjb250ZW50X2lkeF07XHJcblx0XHRcdGxldCBzaW1wbGVfY2hhcnMgPSB0aGlzLl9kaWN0LmdldChjKTtcclxuXHRcdFx0aWYgKHNpbXBsZV9jaGFycyA9PSBudWxsKSB7XHJcblx0XHRcdFx0c2ltcGxlX2NoYXJzID0gYztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2ltcGxlX2NoYXJzLmluZGV4T2YocXVlcnlbcXVlcnlfaWR4XSkgIT0gLTEpIHtcclxuXHRcdFx0XHRxdWVyeV9pZHggKz0gMTtcclxuXHRcdFx0fSBlbHNlIGlmIChzaW1wbGVfY2hhcnMuaW5kZXhPZihxdWVyeVswXSkgIT0gLTEpIHtcclxuXHRcdFx0XHRxdWVyeV9pZHggPSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHF1ZXJ5X2lkeCA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChxdWVyeV9pZHggPT0gcXVlcnkubGVuZ3RoKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocXVlcnlfaWR4ID09IHF1ZXJ5Lmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gY29udGVudF9pZHggLSBxdWVyeS5sZW5ndGggKyAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2VuX21hdGNoX2xpc3QocXVlcnk6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdGxldCBzdGFydF9pZHggPSAwO1xyXG5cdFx0bGV0IG1hdGNoZWRfaWR4ID0gMDtcclxuXHRcdGNvbnN0IG1hdGNoX2xpc3QgPSBbXTtcclxuXHRcdHdoaWxlIChtYXRjaGVkX2lkeCAhPSAtMSkge1xyXG5cdFx0XHRtYXRjaGVkX2lkeCA9IHRoaXMuZmluZF9uZXh0KHF1ZXJ5LCBjb250ZW50LCBzdGFydF9pZHgpO1xyXG5cdFx0XHRpZiAobWF0Y2hlZF9pZHggIT0gLTEpIHtcclxuXHRcdFx0XHRjb25zdCB3b3JkID0gY29udGVudC5zbGljZShtYXRjaGVkX2lkeCwgbWF0Y2hlZF9pZHggKyBxdWVyeS5sZW5ndGgpO1xyXG5cdFx0XHRcdG1hdGNoX2xpc3QucHVzaCh3b3JkKTtcclxuXHRcdFx0XHRzdGFydF9pZHggPSBtYXRjaGVkX2lkeCArIDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBtYXRjaF9saXN0O1xyXG5cdH1cclxuXHJcblx0Z2VuX2VucmljaGVkX3BhdHRlcm4ocXVlcnk6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBtYXRjaF9saXN0ID0gdGhpcy5nZW5fbWF0Y2hfbGlzdChxdWVyeSwgY29udGVudCk7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChtYXRjaF9saXN0LmpvaW4oXCJ8XCIpLCBcImltXCIpO1xyXG5cdFx0cmV0dXJuIHBhdHRlcm47XHJcblx0fVxyXG5cclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMEQ7QUFhbkQsMkNBQXFDLDZCQUFnQztBQUFBLEVBRTNFLFlBQVksS0FBVSxVQUN0QjtBQUNDLFVBQU07QUFDTixTQUFLLFdBQVc7QUFBQTtBQUFBLEVBSWpCLGVBQWUsT0FBb0M7QUFDbEQsV0FBTyxDQUFDLEVBQUMsZ0JBQWdCO0FBQUE7QUFBQSxFQUkxQixpQkFBaUIscUJB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
