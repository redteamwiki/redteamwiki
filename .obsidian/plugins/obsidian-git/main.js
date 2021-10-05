'use strict';

var obsidian = require('obsidian');
var path = require('path');
var child_process_1 = require('child_process');
var fs_1 = require('fs');
var tty = require('tty');
var util$1 = require('util');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var path__namespace = /*#__PURE__*/_interopNamespace(path);
var child_process_1__default = /*#__PURE__*/_interopDefaultLegacy(child_process_1);
var fs_1__default = /*#__PURE__*/_interopDefaultLegacy(fs_1);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ChangedFilesModal = /** @class */ (function (_super) {
    __extends(ChangedFilesModal, _super);
    function ChangedFilesModal(plugin, changedFiles) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.changedFiles = changedFiles;
        _this.setPlaceholder("Not supported files will be opened by default app!");
        return _this;
    }
    ChangedFilesModal.prototype.getItems = function () {
        return this.changedFiles;
    };
    ChangedFilesModal.prototype.getItemText = function (item) {
        if (item.index == "?" && item.working_dir == "?") {
            return "Untracked | " + item.path;
        }
        var working_dir = "";
        var index = "";
        if (item.working_dir != " ")
            working_dir = "Working dir: " + item.working_dir + " ";
        if (item.index != " ")
            index = "Index: " + item.index;
        return "" + working_dir + index + " | " + item.path;
    };
    ChangedFilesModal.prototype.onChooseItem = function (item, _) {
        if (this.plugin.app.metadataCache.getFirstLinkpathDest(item.path, "") == null) {
            this.app.openWithDefaultApp(item.path);
        }
        else {
            this.plugin.app.workspace.openLinkText(item.path, "/");
        }
    };
    return ChangedFilesModal;
}(obsidian.FuzzySuggestModal));

var CustomMessageModal = /** @class */ (function (_super) {
    __extends(CustomMessageModal, _super);
    function CustomMessageModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder("Type your message and select optional the version with the added date.");
        return _this;
    }
    CustomMessageModal.prototype.getSuggestions = function (query) {
        var date = window.moment().format(this.plugin.settings.commitDateFormat);
        if (query == "")
            query = "...";
        return [query, date + ": " + query, query + ": " + date];
    };
    CustomMessageModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    CustomMessageModal.prototype.onChooseSuggestion = function (item, _) {
        var _this = this;
        this.plugin.promiseQueue.addTask(function () { return _this.plugin.createBackup(false, item); });
    };
    return CustomMessageModal;
}(obsidian.SuggestModal));

var PromiseQueue = /** @class */ (function () {
    function PromiseQueue() {
        this.tasks = [];
    }
    PromiseQueue.prototype.addTask = function (task) {
        this.tasks.push(task);
        if (this.tasks.length === 1) {
            this.handleTask();
        }
    };
    PromiseQueue.prototype.handleTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.tasks.length > 0) {
                    this.tasks[0]().finally(function () {
                        _this.tasks.shift();
                        _this.handleTask();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    return PromiseQueue;
}());

var ObsidianGitSettingsTab = /** @class */ (function (_super) {
    __extends(ObsidianGitSettingsTab, _super);
    function ObsidianGitSettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObsidianGitSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Git Backup settings" });
        new obsidian.Setting(containerEl)
            .setName("Vault backup interval (minutes)")
            .setDesc("Commit and push changes every X minutes. To disable automatic backup, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoSaveInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoSaveInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoSaveInterval > 0) {
                        plugin.clearAutoBackup();
                        plugin.startAutoBackup(plugin.settings.autoSaveInterval);
                        new obsidian.Notice("Automatic backup enabled! Every " + plugin.settings.autoSaveInterval + " minutes.");
                    }
                    else if (plugin.settings.autoSaveInterval <= 0 &&
                        plugin.timeoutIDBackup) {
                        plugin.clearAutoBackup() &&
                            new obsidian.Notice("Automatic backup disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Auto pull interval (minutes)")
            .setDesc("Pull changes every X minutes. To disable automatic pull, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoPullInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoPullInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoPullInterval > 0) {
                        plugin.clearAutoPull();
                        plugin.startAutoPull(plugin.settings.autoPullInterval);
                        new obsidian.Notice("Automatic pull enabled! Every " + plugin.settings.autoPullInterval + " minutes.");
                    }
                    else if (plugin.settings.autoPullInterval <= 0 &&
                        plugin.timeoutIDPull) {
                        plugin.clearAutoPull() &&
                            new obsidian.Notice("Automatic pull disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Commit message")
            .setDesc("Specify custom commit message. Available placeholders: {{date}}" +
            " (see below) and {{numFiles}} (number of changed files in the commit)")
            .addText(function (text) {
            return text
                .setPlaceholder("vault backup")
                .setValue(plugin.settings.commitMessage
                ? plugin.settings.commitMessage
                : "")
                .onChange(function (value) {
                plugin.settings.commitMessage = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("{{date}} placeholder format")
            .setDesc('Specify custom date format. E.g. "YYYY-MM-DD HH:mm:ss"')
            .addText(function (text) {
            return text
                .setPlaceholder(plugin.settings.commitDateFormat)
                .setValue(plugin.settings.commitDateFormat)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.settings.commitDateFormat = value;
                            return [4 /*yield*/, plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Preview commit message")
            .addButton(function (button) {
            return button.setButtonText("Preview").onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var commitMessagePreview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, plugin.gitManager.formatCommitMessage()];
                        case 1:
                            commitMessagePreview = _a.sent();
                            new obsidian.Notice("" + commitMessagePreview);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("List filenames affected by commit in the commit body")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.listChangedFilesInMessageBody)
                .onChange(function (value) {
                plugin.settings.listChangedFilesInMessageBody = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Current branch")
            .setDesc("Switch to a different branch")
            .addDropdown(function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var branchInfo, _i, _a, branch;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, plugin.gitManager.branchInfo()];
                    case 1:
                        branchInfo = _b.sent();
                        for (_i = 0, _a = branchInfo.branches; _i < _a.length; _i++) {
                            branch = _a[_i];
                            dropdown.addOption(branch, branch);
                        }
                        dropdown.setValue(branchInfo.current);
                        dropdown.onChange(function (option) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, plugin.gitManager.checkout(option)];
                                    case 1:
                                        _a.sent();
                                        new obsidian.Notice("Checked out to " + option);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
        new obsidian.Setting(containerEl)
            .setName("Pull updates on startup")
            .setDesc("Automatically pull updates when Obsidian starts")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.autoPullOnBoot)
                .onChange(function (value) {
                plugin.settings.autoPullOnBoot = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable push")
            .setDesc("Do not push changes to the remote repository")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePush)
                .onChange(function (value) {
                plugin.settings.disablePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Pull changes before push")
            .setDesc("Commit -> pull -> push (Only if pushing is enabled)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.pullBeforePush)
                .onChange(function (value) {
                plugin.settings.pullBeforePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Update submodules")
            .setDesc('"Create backup" and "pull" takes care of submodules. Missing features: Conflicted files, count of pulled/pushed/committed files. Tracking branch needs to be set for each submodule')
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.updateSubmodules)
                .onChange(function (value) {
                plugin.settings.updateSubmodules = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable notifications")
            .setDesc("Disable notifications for git operations to minimize distraction (refer to status bar for updates)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePopups)
                .onChange(function (value) {
                plugin.settings.disablePopups = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show status bar")
            .setDesc("Obsidian must be restarted for the changes to take affect")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.showStatusBar)
                .onChange(function (value) {
                plugin.settings.showStatusBar = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Custom Git binary path")
            .addText(function (cb) {
            cb.setValue(plugin.settings.gitPath);
            cb.setPlaceholder("git");
            cb.onChange(function (value) {
                plugin.settings.gitPath = value;
                plugin.gitManager.updateGitPath(value || "git");
                plugin.saveSettings();
            });
        });
    };
    return ObsidianGitSettingsTab;
}(obsidian.PluginSettingTab));

var PluginState;
(function (PluginState) {
    PluginState[PluginState["idle"] = 0] = "idle";
    PluginState[PluginState["status"] = 1] = "status";
    PluginState[PluginState["pull"] = 2] = "pull";
    PluginState[PluginState["add"] = 3] = "add";
    PluginState[PluginState["commit"] = 4] = "commit";
    PluginState[PluginState["push"] = 5] = "push";
    PluginState[PluginState["conflicted"] = 6] = "conflicted";
})(PluginState || (PluginState = {}));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl, plugin) {
        this.messages = [];
        this.statusBarEl = statusBarEl;
        this.plugin = plugin;
    }
    StatusBar.prototype.displayMessage = function (message, timeout) {
        this.messages.push({
            message: "git: " + message.slice(0, 100),
            timeout: timeout,
        });
        this.display();
    };
    StatusBar.prototype.display = function () {
        if (this.messages.length > 0 && !this.currentMessage) {
            this.currentMessage = this.messages.shift();
            this.statusBarEl.setText(this.currentMessage.message);
            this.lastMessageTimestamp = Date.now();
        }
        else if (this.currentMessage) {
            var messageAge = Date.now() - this.lastMessageTimestamp;
            if (messageAge >= this.currentMessage.timeout) {
                this.currentMessage = null;
                this.lastMessageTimestamp = null;
            }
        }
        else {
            this.displayState();
        }
    };
    StatusBar.prototype.displayState = function () {
        switch (this.plugin.state) {
            case PluginState.idle:
                this.displayFromNow(this.plugin.lastUpdate);
                break;
            case PluginState.status:
                this.statusBarEl.setText("git: checking repo status...");
                break;
            case PluginState.add:
                this.statusBarEl.setText("git: adding files to repo...");
                break;
            case PluginState.commit:
                this.statusBarEl.setText("git: committing changes...");
                break;
            case PluginState.push:
                this.statusBarEl.setText("git: pushing changes...");
                break;
            case PluginState.pull:
                this.statusBarEl.setText("git: pulling changes...");
                break;
            case PluginState.conflicted:
                this.statusBarEl.setText("git: you have conflict files...");
                break;
            default:
                this.statusBarEl.setText("git: failed on initialization!");
                break;
        }
    };
    StatusBar.prototype.displayFromNow = function (timestamp) {
        if (timestamp) {
            var moment_1 = window.moment;
            var fromNow = moment_1(timestamp).fromNow();
            this.statusBarEl.setText("git: last update " + fromNow);
        }
        else {
            this.statusBarEl.setText("git: ready");
        }
    };
    return StatusBar;
}());

var GeneralModal = /** @class */ (function (_super) {
    __extends(GeneralModal, _super);
    function GeneralModal(app, remotes, placeholder) {
        var _this = _super.call(this, app) || this;
        _this.resolve = null;
        _this.list = remotes;
        _this.setPlaceholder(placeholder);
        return _this;
    }
    GeneralModal.prototype.open = function () {
        var _this = this;
        _super.prototype.open.call(this);
        return new Promise(function (resolve) {
            _this.resolve = resolve;
        });
    };
    GeneralModal.prototype.selectSuggestion = function (value, evt) {
        if (this.resolve)
            this.resolve(value);
        _super.prototype.selectSuggestion.call(this, value, evt);
    };
    GeneralModal.prototype.onClose = function () {
        if (this.resolve)
            this.resolve(undefined);
    };
    GeneralModal.prototype.getSuggestions = function (query) {
        return __spreadArray([query.length > 0 ? query : "..."], this.list);
    };
    GeneralModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    GeneralModal.prototype.onChooseSuggestion = function (item, _) { };
    return GeneralModal;
}(obsidian.SuggestModal));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var gitError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitError = void 0;
/**
 * The `GitError` is thrown when the underlying `git` process throws a
 * fatal exception (eg an `ENOENT` exception when attempting to use a
 * non-writable directory as the root for your repo), and acts as the
 * base class for more specific errors thrown by the parsing of the
 * git response or errors in the configuration of the task about to
 * be run.
 *
 * When an exception is thrown, pending tasks in the same instance will
 * not be executed. The recommended way to run a series of tasks that
 * can independently fail without needing to prevent future tasks from
 * running is to catch them individually:
 *
 * ```typescript
 import { gitP, SimpleGit, GitError, PullResult } from 'simple-git';

 function catchTask (e: GitError) {
   return e.
 }

 const git = gitP(repoWorkingDir);
 const pulled: PullResult | GitError = await git.pull().catch(catchTask);
 const pushed: string | GitError = await git.pushTags().catch(catchTask);
 ```
 */
class GitError extends Error {
    constructor(task, message) {
        super(message);
        this.task = task;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitError = GitError;

});

var gitResponseError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitResponseError = void 0;

/**
 * The `GitResponseError` is the wrapper for a parsed response that is treated as
 * a fatal error, for example attempting a `merge` can leave the repo in a corrupted
 * state when there are conflicts so the task will reject rather than resolve.
 *
 * For example, catching the merge conflict exception:
 *
 * ```typescript
 import { gitP, SimpleGit, GitResponseError, MergeSummary } from 'simple-git';

 const git = gitP(repoRoot);
 const mergeOptions: string[] = ['--no-ff', 'other-branch'];
 const mergeSummary: MergeSummary = await git.merge(mergeOptions)
      .catch((e: GitResponseError<MergeSummary>) => e.git);

 if (mergeSummary.failed) {
   // deal with the error
 }
 ```
 */
class GitResponseError extends gitError.GitError {
    constructor(
    /**
     * `.git` access the parsed response that is treated as being an error
     */
    git, message) {
        super(undefined, message || String(git));
        this.git = git;
    }
}
exports.GitResponseError = GitResponseError;

});

var gitConstructError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConstructError = void 0;

/**
 * The `GitConstructError` is thrown when an error occurs in the constructor
 * of the `simple-git` instance itself. Most commonly as a result of using
 * a `baseDir` option that points to a folder that either does not exist,
 * or cannot be read by the user the node script is running as.
 *
 * Check the `.message` property for more detail including the properties
 * passed to the constructor.
 */
class GitConstructError extends gitError.GitError {
    constructor(config, message) {
        super(undefined, message);
        this.config = config;
    }
}
exports.GitConstructError = GitConstructError;

});

var gitPluginError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPluginError = void 0;

class GitPluginError extends gitError.GitError {
    constructor(task, plugin, message) {
        super(task, message);
        this.task = task;
        this.plugin = plugin;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitPluginError = GitPluginError;

});

var taskConfigurationError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskConfigurationError = void 0;

/**
 * The `TaskConfigurationError` is thrown when a command was incorrectly
 * configured. An error of this kind means that no attempt was made to
 * run your command through the underlying `git` binary.
 *
 * Check the `.message` property for more detail on why your configuration
 * resulted in an error.
 */
class TaskConfigurationError extends gitError.GitError {
    constructor(message) {
        super(undefined, message);
    }
}
exports.TaskConfigurationError = TaskConfigurationError;

});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os__default["default"].release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty__default["default"].isatty(1))),
	stderr: translateLevel(supportsColor(true, tty__default["default"].isatty(2)))
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util__default["default"].deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty__default["default"].isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util__default["default"].format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default["default"].inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default["default"].inspect(v, this.inspectOpts);
};
});

var src$2 = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser;
} else {
	module.exports = node;
}
});

var src$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const debug_1 = __importDefault(src$2);
const log = debug_1.default('@kwsites/file-exists');
function check(path, isFile, isDirectory) {
    log(`checking %s`, path);
    try {
        const stat = fs_1__default["default"].statSync(path);
        if (stat.isFile() && isFile) {
            log(`[OK] path represents a file`);
            return true;
        }
        if (stat.isDirectory() && isDirectory) {
            log(`[OK] path represents a directory`);
            return true;
        }
        log(`[FAIL] path represents something other than a file or directory`);
        return false;
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            log(`[FAIL] path is not accessible: %o`, e);
            return false;
        }
        log(`[FATAL] %o`, e);
        throw e;
    }
}
/**
 * Synchronous validation of a path existing either as a file or as a directory.
 *
 * @param {string} path The path to check
 * @param {number} type One or both of the exported numeric constants
 */
function exists(path, type = exports.READABLE) {
    return check(path, (type & exports.FILE) > 0, (type & exports.FOLDER) > 0);
}
exports.exists = exists;
/**
 * Constant representing a file
 */
exports.FILE = 1;
/**
 * Constant representing a folder
 */
exports.FOLDER = 2;
/**
 * Constant representing either a file or a folder
 */
exports.READABLE = exports.FILE + exports.FOLDER;

});

var dist$1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(src$1);

});

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.pick = exports.bufferToString = exports.prefixedArray = exports.asNumber = exports.asStringArray = exports.asArray = exports.objectToString = exports.remove = exports.including = exports.append = exports.folderExists = exports.forEachLineWithContent = exports.toLinesWithContent = exports.last = exports.first = exports.splitOn = exports.isUserFunction = exports.asFunction = exports.NOOP = void 0;

const NOOP = () => {
};
exports.NOOP = NOOP;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function asFunction(source) {
    return typeof source === 'function' ? source : exports.NOOP;
}
exports.asFunction = asFunction;
/**
 * Determines whether the supplied argument is both a function, and is not
 * the `NOOP` function.
 */
function isUserFunction(source) {
    return (typeof source === 'function' && source !== exports.NOOP);
}
exports.isUserFunction = isUserFunction;
function splitOn(input, char) {
    const index = input.indexOf(char);
    if (index <= 0) {
        return [input, ''];
    }
    return [
        input.substr(0, index),
        input.substr(index + 1),
    ];
}
exports.splitOn = splitOn;
function first(input, offset = 0) {
    return isArrayLike(input) && input.length > offset ? input[offset] : undefined;
}
exports.first = first;
function last(input, offset = 0) {
    if (isArrayLike(input) && input.length > offset) {
        return input[input.length - 1 - offset];
    }
}
exports.last = last;
function isArrayLike(input) {
    return !!(input && typeof input.length === 'number');
}
function toLinesWithContent(input, trimmed = true, separator = '\n') {
    return input.split(separator)
        .reduce((output, line) => {
        const lineContent = trimmed ? line.trim() : line;
        if (lineContent) {
            output.push(lineContent);
        }
        return output;
    }, []);
}
exports.toLinesWithContent = toLinesWithContent;
function forEachLineWithContent(input, callback) {
    return toLinesWithContent(input, true).map(line => callback(line));
}
exports.forEachLineWithContent = forEachLineWithContent;
function folderExists(path) {
    return dist$1.exists(path, dist$1.FOLDER);
}
exports.folderExists = folderExists;
/**
 * Adds `item` into the `target` `Array` or `Set` when it is not already present and returns the `item`.
 */
function append(target, item) {
    if (Array.isArray(target)) {
        if (!target.includes(item)) {
            target.push(item);
        }
    }
    else {
        target.add(item);
    }
    return item;
}
exports.append = append;
/**
 * Adds `item` into the `target` `Array` when it is not already present and returns the `target`.
 */
function including(target, item) {
    if (Array.isArray(target) && !target.includes(item)) {
        target.push(item);
    }
    return target;
}
exports.including = including;
function remove(target, item) {
    if (Array.isArray(target)) {
        const index = target.indexOf(item);
        if (index >= 0) {
            target.splice(index, 1);
        }
    }
    else {
        target.delete(item);
    }
    return item;
}
exports.remove = remove;
exports.objectToString = Object.prototype.toString.call.bind(Object.prototype.toString);
function asArray(source) {
    return Array.isArray(source) ? source : [source];
}
exports.asArray = asArray;
function asStringArray(source) {
    return asArray(source).map(String);
}
exports.asStringArray = asStringArray;
function asNumber(source, onNaN = 0) {
    if (source == null) {
        return onNaN;
    }
    const num = parseInt(source, 10);
    return isNaN(num) ? onNaN : num;
}
exports.asNumber = asNumber;
function prefixedArray(input, prefix) {
    const output = [];
    for (let i = 0, max = input.length; i < max; i++) {
        output.push(prefix, input[i]);
    }
    return output;
}
exports.prefixedArray = prefixedArray;
function bufferToString(input) {
    return (Array.isArray(input) ? Buffer.concat(input) : input).toString('utf-8');
}
exports.bufferToString = bufferToString;
/**
 * Get a new object from a source object with only the listed properties.
 */
function pick(source, properties) {
    return Object.assign({}, ...properties.map((property) => property in source ? { [property]: source[property] } : {}));
}
exports.pick = pick;
function delay(duration = 0) {
    return new Promise(done => setTimeout(done, duration));
}
exports.delay = delay;

});

var argumentFilters = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHasLength = exports.filterFunction = exports.filterPlainObject = exports.filterStringOrStringArray = exports.filterStringArray = exports.filterString = exports.filterPrimitives = exports.filterArray = exports.filterType = void 0;

function filterType(input, filter, def) {
    if (filter(input)) {
        return input;
    }
    return (arguments.length > 2) ? def : undefined;
}
exports.filterType = filterType;
const filterArray = (input) => {
    return Array.isArray(input);
};
exports.filterArray = filterArray;
function filterPrimitives(input, omit) {
    return /number|string|boolean/.test(typeof input) && (!omit || !omit.includes((typeof input)));
}
exports.filterPrimitives = filterPrimitives;
const filterString = (input) => {
    return typeof input === 'string';
};
exports.filterString = filterString;
const filterStringArray = (input) => {
    return Array.isArray(input) && input.every(exports.filterString);
};
exports.filterStringArray = filterStringArray;
const filterStringOrStringArray = (input) => {
    return exports.filterString(input) || (Array.isArray(input) && input.every(exports.filterString));
};
exports.filterStringOrStringArray = filterStringOrStringArray;
function filterPlainObject(input) {
    return !!input && util.objectToString(input) === '[object Object]';
}
exports.filterPlainObject = filterPlainObject;
function filterFunction(input) {
    return typeof input === 'function';
}
exports.filterFunction = filterFunction;
const filterHasLength = (input) => {
    if (input == null || 'number|boolean|function'.includes(typeof input)) {
        return false;
    }
    return Array.isArray(input) || typeof input === 'string' || typeof input.length === 'number';
};
exports.filterHasLength = filterHasLength;

});

var exitCodes = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodes = void 0;
(function (ExitCodes) {
    ExitCodes[ExitCodes["SUCCESS"] = 0] = "SUCCESS";
    ExitCodes[ExitCodes["ERROR"] = 1] = "ERROR";
    ExitCodes[ExitCodes["UNCLEAN"] = 128] = "UNCLEAN";
})(exports.ExitCodes || (exports.ExitCodes = {}));

});

var gitOutputStreams = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitOutputStreams = void 0;
class GitOutputStreams {
    constructor(stdOut, stdErr) {
        this.stdOut = stdOut;
        this.stdErr = stdErr;
    }
    asStrings() {
        return new GitOutputStreams(this.stdOut.toString('utf8'), this.stdErr.toString('utf8'));
    }
}
exports.GitOutputStreams = GitOutputStreams;

});

var lineParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLineParser = exports.LineParser = void 0;
class LineParser {
    constructor(regExp, useMatches) {
        this.matches = [];
        this.parse = (line, target) => {
            this.resetMatches();
            if (!this._regExp.every((reg, index) => this.addMatch(reg, index, line(index)))) {
                return false;
            }
            return this.useMatches(target, this.prepareMatches()) !== false;
        };
        this._regExp = Array.isArray(regExp) ? regExp : [regExp];
        if (useMatches) {
            this.useMatches = useMatches;
        }
    }
    // @ts-ignore
    useMatches(target, match) {
        throw new Error(`LineParser:useMatches not implemented`);
    }
    resetMatches() {
        this.matches.length = 0;
    }
    prepareMatches() {
        return this.matches;
    }
    addMatch(reg, index, line) {
        const matched = line && reg.exec(line);
        if (matched) {
            this.pushMatch(index, matched);
        }
        return !!matched;
    }
    pushMatch(_index, matched) {
        this.matches.push(...matched.slice(1));
    }
}
exports.LineParser = LineParser;
class RemoteLineParser extends LineParser {
    addMatch(reg, index, line) {
        return /^remote:\s/.test(String(line)) && super.addMatch(reg, index, line);
    }
    pushMatch(index, matched) {
        if (index > 0 || matched.length > 1) {
            super.pushMatch(index, matched);
        }
    }
}
exports.RemoteLineParser = RemoteLineParser;

});

var simpleGitOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstanceConfig = void 0;
const defaultOptions = {
    binary: 'git',
    maxConcurrentProcesses: 5,
    config: [],
};
function createInstanceConfig(...options) {
    const baseDir = process.cwd();
    const config = Object.assign(Object.assign({ baseDir }, defaultOptions), ...(options.filter(o => typeof o === 'object' && o)));
    config.baseDir = config.baseDir || baseDir;
    return config;
}
exports.createInstanceConfig = createInstanceConfig;

});

var taskOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingFunctionArgument = exports.trailingOptionsArgument = exports.getTrailingOptions = exports.appendTaskOptions = void 0;


function appendTaskOptions(options, commands = []) {
    if (!argumentFilters.filterPlainObject(options)) {
        return commands;
    }
    return Object.keys(options).reduce((commands, key) => {
        const value = options[key];
        if (argumentFilters.filterPrimitives(value, ['boolean'])) {
            commands.push(key + '=' + value);
        }
        else {
            commands.push(key);
        }
        return commands;
    }, commands);
}
exports.appendTaskOptions = appendTaskOptions;
function getTrailingOptions(args, initialPrimitive = 0, objectOnly = false) {
    const command = [];
    for (let i = 0, max = initialPrimitive < 0 ? args.length : initialPrimitive; i < max; i++) {
        if ('string|number'.includes(typeof args[i])) {
            command.push(String(args[i]));
        }
    }
    appendTaskOptions(trailingOptionsArgument(args), command);
    if (!objectOnly) {
        command.push(...trailingArrayArgument(args));
    }
    return command;
}
exports.getTrailingOptions = getTrailingOptions;
function trailingArrayArgument(args) {
    const hasTrailingCallback = typeof util.last(args) === 'function';
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterArray, []);
}
/**
 * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
 * if there is one. When not found, the return value is null.
 */
function trailingOptionsArgument(args) {
    const hasTrailingCallback = argumentFilters.filterFunction(util.last(args));
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterPlainObject);
}
exports.trailingOptionsArgument = trailingOptionsArgument;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function trailingFunctionArgument(args, includeNoop = true) {
    const callback = util.asFunction(util.last(args));
    return includeNoop || util.isUserFunction(callback) ? callback : undefined;
}
exports.trailingFunctionArgument = trailingFunctionArgument;

});

var taskParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringResponse = exports.callTaskParser = void 0;

function callTaskParser(parser, streams) {
    return parser(streams.stdOut, streams.stdErr);
}
exports.callTaskParser = callTaskParser;
function parseStringResponse(result, parsers, ...texts) {
    texts.forEach(text => {
        for (let lines = util.toLinesWithContent(text), i = 0, max = lines.length; i < max; i++) {
            const line = (offset = 0) => {
                if ((i + offset) >= max) {
                    return;
                }
                return lines[i + offset];
            };
            parsers.some(({ parse }) => parse(line, result));
        }
    });
    return result;
}
exports.parseStringResponse = parseStringResponse;

});

var utils = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(argumentFilters, exports);
__exportStar(exitCodes, exports);
__exportStar(gitOutputStreams, exports);
__exportStar(lineParser, exports);
__exportStar(simpleGitOptions, exports);
__exportStar(taskOptions, exports);
__exportStar(taskParser, exports);
__exportStar(util, exports);

});

var checkIsRepo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBareRepoTask = exports.checkIsRepoRootTask = exports.checkIsRepoTask = exports.CheckRepoActions = void 0;

var CheckRepoActions;
(function (CheckRepoActions) {
    CheckRepoActions["BARE"] = "bare";
    CheckRepoActions["IN_TREE"] = "tree";
    CheckRepoActions["IS_REPO_ROOT"] = "root";
})(CheckRepoActions = exports.CheckRepoActions || (exports.CheckRepoActions = {}));
const onError = ({ exitCode }, error, done, fail) => {
    if (exitCode === utils.ExitCodes.UNCLEAN && isNotRepoMessage(error)) {
        return done(Buffer.from('false'));
    }
    fail(error);
};
const parser = (text) => {
    return text.trim() === 'true';
};
function checkIsRepoTask(action) {
    switch (action) {
        case CheckRepoActions.BARE:
            return checkIsBareRepoTask();
        case CheckRepoActions.IS_REPO_ROOT:
            return checkIsRepoRootTask();
    }
    const commands = ['rev-parse', '--is-inside-work-tree'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsRepoTask = checkIsRepoTask;
function checkIsRepoRootTask() {
    const commands = ['rev-parse', '--git-dir'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser(path) {
            return /^\.(git)?$/.test(path.trim());
        },
    };
}
exports.checkIsRepoRootTask = checkIsRepoRootTask;
function checkIsBareRepoTask() {
    const commands = ['rev-parse', '--is-bare-repository'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsBareRepoTask = checkIsBareRepoTask;
function isNotRepoMessage(error) {
    return /(Not a git repository|Kein Git-Repository)/i.test(String(error));
}

});

var CleanSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSummaryParser = exports.CleanResponse = void 0;

class CleanResponse {
    constructor(dryRun) {
        this.dryRun = dryRun;
        this.paths = [];
        this.files = [];
        this.folders = [];
    }
}
exports.CleanResponse = CleanResponse;
const removalRegexp = /^[a-z]+\s*/i;
const dryRunRemovalRegexp = /^[a-z]+\s+[a-z]+\s*/i;
const isFolderRegexp = /\/$/;
function cleanSummaryParser(dryRun, text) {
    const summary = new CleanResponse(dryRun);
    const regexp = dryRun ? dryRunRemovalRegexp : removalRegexp;
    utils.toLinesWithContent(text).forEach(line => {
        const removed = line.replace(regexp, '');
        summary.paths.push(removed);
        (isFolderRegexp.test(removed) ? summary.folders : summary.files).push(removed);
    });
    return summary;
}
exports.cleanSummaryParser = cleanSummaryParser;

});

var task = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyTask = exports.isBufferTask = exports.straightThroughBufferTask = exports.straightThroughStringTask = exports.configurationErrorTask = exports.adhocExecTask = exports.EMPTY_COMMANDS = void 0;

exports.EMPTY_COMMANDS = [];
function adhocExecTask(parser) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'empty',
        parser,
    };
}
exports.adhocExecTask = adhocExecTask;
function configurationErrorTask(error) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'empty',
        parser() {
            throw typeof error === 'string' ? new taskConfigurationError.TaskConfigurationError(error) : error;
        }
    };
}
exports.configurationErrorTask = configurationErrorTask;
function straightThroughStringTask(commands, trimmed = false) {
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return trimmed ? String(text).trim() : text;
        },
    };
}
exports.straightThroughStringTask = straightThroughStringTask;
function straightThroughBufferTask(commands) {
    return {
        commands,
        format: 'buffer',
        parser(buffer) {
            return buffer;
        },
    };
}
exports.straightThroughBufferTask = straightThroughBufferTask;
function isBufferTask(task) {
    return task.format === 'buffer';
}
exports.isBufferTask = isBufferTask;
function isEmptyTask(task) {
    return task.format === 'empty' || !task.commands.length;
}
exports.isEmptyTask = isEmptyTask;

});

var clean = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCleanOptionsArray = exports.cleanTask = exports.cleanWithOptionsTask = exports.CleanOptions = exports.CONFIG_ERROR_UNKNOWN_OPTION = exports.CONFIG_ERROR_MODE_REQUIRED = exports.CONFIG_ERROR_INTERACTIVE_MODE = void 0;



exports.CONFIG_ERROR_INTERACTIVE_MODE = 'Git clean interactive mode is not supported';
exports.CONFIG_ERROR_MODE_REQUIRED = 'Git clean mode parameter ("n" or "f") is required';
exports.CONFIG_ERROR_UNKNOWN_OPTION = 'Git clean unknown option found in: ';
/**
 * All supported option switches available for use in a `git.clean` operation
 */
var CleanOptions;
(function (CleanOptions) {
    CleanOptions["DRY_RUN"] = "n";
    CleanOptions["FORCE"] = "f";
    CleanOptions["IGNORED_INCLUDED"] = "x";
    CleanOptions["IGNORED_ONLY"] = "X";
    CleanOptions["EXCLUDING"] = "e";
    CleanOptions["QUIET"] = "q";
    CleanOptions["RECURSIVE"] = "d";
})(CleanOptions = exports.CleanOptions || (exports.CleanOptions = {}));
const CleanOptionValues = new Set(['i', ...utils.asStringArray(Object.values(CleanOptions))]);
function cleanWithOptionsTask(mode, customArgs) {
    const { cleanMode, options, valid } = getCleanOptions(mode);
    if (!cleanMode) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_MODE_REQUIRED);
    }
    if (!valid.options) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_UNKNOWN_OPTION + JSON.stringify(mode));
    }
    options.push(...customArgs);
    if (options.some(isInteractiveMode)) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_INTERACTIVE_MODE);
    }
    return cleanTask(cleanMode, options);
}
exports.cleanWithOptionsTask = cleanWithOptionsTask;
function cleanTask(mode, customArgs) {
    const commands = ['clean', `-${mode}`, ...customArgs];
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return CleanSummary.cleanSummaryParser(mode === CleanOptions.DRY_RUN, text);
        }
    };
}
exports.cleanTask = cleanTask;
function isCleanOptionsArray(input) {
    return Array.isArray(input) && input.every(test => CleanOptionValues.has(test));
}
exports.isCleanOptionsArray = isCleanOptionsArray;
function getCleanOptions(input) {
    let cleanMode;
    let options = [];
    let valid = { cleanMode: false, options: true };
    input.replace(/[^a-z]i/g, '').split('').forEach(char => {
        if (isCleanMode(char)) {
            cleanMode = char;
            valid.cleanMode = true;
        }
        else {
            valid.options = valid.options && isKnownOption(options[options.length] = (`-${char}`));
        }
    });
    return {
        cleanMode,
        options,
        valid,
    };
}
function isCleanMode(cleanMode) {
    return cleanMode === CleanOptions.FORCE || cleanMode === CleanOptions.DRY_RUN;
}
function isKnownOption(option) {
    return /^-[a-z]$/i.test(option) && CleanOptionValues.has(option.charAt(1));
}
function isInteractiveMode(option) {
    if (/^-[^\-]/.test(option)) {
        return option.indexOf('i') > 0;
    }
    return option === '--interactive';
}

});

var ConfigList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.configGetParser = exports.configListParser = exports.ConfigList = void 0;

class ConfigList {
    constructor() {
        this.files = [];
        this.values = Object.create(null);
    }
    get all() {
        if (!this._all) {
            this._all = this.files.reduce((all, file) => {
                return Object.assign(all, this.values[file]);
            }, {});
        }
        return this._all;
    }
    addFile(file) {
        if (!(file in this.values)) {
            const latest = utils.last(this.files);
            this.values[file] = latest ? Object.create(this.values[latest]) : {};
            this.files.push(file);
        }
        return this.values[file];
    }
    addValue(file, key, value) {
        const values = this.addFile(file);
        if (!values.hasOwnProperty(key)) {
            values[key] = value;
        }
        else if (Array.isArray(values[key])) {
            values[key].push(value);
        }
        else {
            values[key] = [values[key], value];
        }
        this._all = undefined;
    }
}
exports.ConfigList = ConfigList;
function configListParser(text) {
    const config = new ConfigList();
    for (const item of configParser(text)) {
        config.addValue(item.file, String(item.key), item.value);
    }
    return config;
}
exports.configListParser = configListParser;
function configGetParser(text, key) {
    let value = null;
    const values = [];
    const scopes = new Map();
    for (const item of configParser(text, key)) {
        if (item.key !== key) {
            continue;
        }
        values.push(value = item.value);
        if (!scopes.has(item.file)) {
            scopes.set(item.file, []);
        }
        scopes.get(item.file).push(value);
    }
    return {
        key,
        paths: Array.from(scopes.keys()),
        scopes,
        value,
        values
    };
}
exports.configGetParser = configGetParser;
function configFilePath(filePath) {
    return filePath.replace(/^(file):/, '');
}
function* configParser(text, requestedKey = null) {
    const lines = text.split('\0');
    for (let i = 0, max = lines.length - 1; i < max;) {
        const file = configFilePath(lines[i++]);
        let value = lines[i++];
        let key = requestedKey;
        if (value.includes('\n')) {
            const line = utils.splitOn(value, '\n');
            key = line[0];
            value = line[1];
        }
        yield { file, key, value };
    }
}

});

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConfigScope = void 0;


var GitConfigScope;
(function (GitConfigScope) {
    GitConfigScope["system"] = "system";
    GitConfigScope["global"] = "global";
    GitConfigScope["local"] = "local";
    GitConfigScope["worktree"] = "worktree";
})(GitConfigScope = exports.GitConfigScope || (exports.GitConfigScope = {}));
function asConfigScope(scope, fallback) {
    if (typeof scope === 'string' && GitConfigScope.hasOwnProperty(scope)) {
        return scope;
    }
    return fallback;
}
function addConfigTask(key, value, append, scope) {
    const commands = ['config', `--${scope}`];
    if (append) {
        commands.push('--add');
    }
    commands.push(key, value);
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return text;
        }
    };
}
function getConfigTask(key, scope) {
    const commands = ['config', '--null', '--show-origin', '--get-all', key];
    if (scope) {
        commands.splice(1, 0, `--${scope}`);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configGetParser(text, key);
        }
    };
}
function listConfigTask(scope) {
    const commands = ['config', '--list', '--show-origin', '--null'];
    if (scope) {
        commands.push(`--${scope}`);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configListParser(text);
        },
    };
}
function default_1() {
    return {
        addConfig(key, value, ...rest) {
            return this._runTask(addConfigTask(key, value, rest[0] === true, asConfigScope(rest[1], GitConfigScope.local)), utils.trailingFunctionArgument(arguments));
        },
        getConfig(key, scope) {
            return this._runTask(getConfigTask(key, asConfigScope(scope, undefined)), utils.trailingFunctionArgument(arguments));
        },
        listConfig(...rest) {
            return this._runTask(listConfigTask(asConfigScope(rest[0], undefined)), utils.trailingFunctionArgument(arguments));
        },
    };
}
exports.default = default_1;

});

var reset = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResetMode = exports.resetTask = exports.ResetMode = void 0;

var ResetMode;
(function (ResetMode) {
    ResetMode["MIXED"] = "mixed";
    ResetMode["SOFT"] = "soft";
    ResetMode["HARD"] = "hard";
    ResetMode["MERGE"] = "merge";
    ResetMode["KEEP"] = "keep";
})(ResetMode = exports.ResetMode || (exports.ResetMode = {}));
const ResetModes = Array.from(Object.values(ResetMode));
function resetTask(mode, customArgs) {
    const commands = ['reset'];
    if (isValidResetMode(mode)) {
        commands.push(`--${mode}`);
    }
    commands.push(...customArgs);
    return task.straightThroughStringTask(commands);
}
exports.resetTask = resetTask;
function getResetMode(mode) {
    if (isValidResetMode(mode)) {
        return mode;
    }
    switch (typeof mode) {
        case 'string':
        case 'undefined':
            return ResetMode.SOFT;
    }
    return;
}
exports.getResetMode = getResetMode;
function isValidResetMode(mode) {
    return ResetModes.includes(mode);
}

});

var api_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });









const api = {
    CheckRepoActions: checkIsRepo.CheckRepoActions,
    CleanOptions: clean.CleanOptions,
    GitConfigScope: config.GitConfigScope,
    GitConstructError: gitConstructError.GitConstructError,
    GitError: gitError.GitError,
    GitPluginError: gitPluginError.GitPluginError,
    GitResponseError: gitResponseError.GitResponseError,
    ResetMode: reset.ResetMode,
    TaskConfigurationError: taskConfigurationError.TaskConfigurationError,
};
exports.default = api;

});

var commandConfigPrefixingPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandConfigPrefixingPlugin = void 0;

function commandConfigPrefixingPlugin(configuration) {
    const prefix = utils.prefixedArray(configuration, '-c');
    return {
        type: 'spawn.args',
        action(data) {
            return [...prefix, ...data];
        },
    };
}
exports.commandConfigPrefixingPlugin = commandConfigPrefixingPlugin;

});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeferred = exports.deferred = void 0;
/**
 * Creates a new `DeferredPromise`
 *
 * ```typescript
 import {deferred} from '@kwsites/promise-deferred`;
 ```
 */
function deferred() {
    let done;
    let fail;
    let status = 'pending';
    const promise = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
    });
    return {
        promise,
        done(result) {
            if (status === 'pending') {
                status = 'resolved';
                done(result);
            }
        },
        fail(error) {
            if (status === 'pending') {
                status = 'rejected';
                fail(error);
            }
        },
        get fulfilled() {
            return status !== 'pending';
        },
        get status() {
            return status;
        },
    };
}
exports.deferred = deferred;
/**
 * Alias of the exported `deferred` function, to help consumers wanting to use `deferred` as the
 * local variable name rather than the factory import name, without needing to rename on import.
 *
 * ```typescript
 import {createDeferred} from '@kwsites/promise-deferred`;
 ```
 */
exports.createDeferred = deferred;
/**
 * Default export allows use as:
 *
 * ```typescript
 import deferred from '@kwsites/promise-deferred`;
 ```
 */
exports.default = deferred;

});

var completionDetection_plugin = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completionDetectionPlugin = void 0;


const never = dist.default().promise;
function completionDetectionPlugin({ onClose = true, onExit = 50 } = {}) {
    function createEvents() {
        let exitCode = -1;
        const events = {
            close: dist.default(),
            closeTimeout: dist.default(),
            exit: dist.default(),
            exitTimeout: dist.default(),
        };
        const result = Promise.race([
            onClose === false ? never : events.closeTimeout.promise,
            onExit === false ? never : events.exitTimeout.promise,
        ]);
        configureTimeout(onClose, events.close, events.closeTimeout);
        configureTimeout(onExit, events.exit, events.exitTimeout);
        return {
            close(code) {
                exitCode = code;
                events.close.done();
            },
            exit(code) {
                exitCode = code;
                events.exit.done();
            },
            get exitCode() {
                return exitCode;
            },
            result,
        };
    }
    function configureTimeout(flag, event, timeout) {
        if (flag === false) {
            return;
        }
        (flag === true ? event.promise : event.promise.then(() => utils.delay(flag))).then(timeout.done);
    }
    return {
        type: 'spawn.after',
        action(_data, { spawned, close }) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function* () {
                const events = createEvents();
                let deferClose = true;
                let quickClose = () => void (deferClose = false);
                (_a = spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', quickClose);
                (_b = spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', quickClose);
                spawned.on('error', quickClose);
                spawned.on('close', (code) => events.close(code));
                spawned.on('exit', (code) => events.exit(code));
                try {
                    yield events.result;
                    if (deferClose) {
                        yield utils.delay(50);
                    }
                    close(events.exitCode);
                }
                catch (err) {
                    close(events.exitCode, err);
                }
            });
        }
    };
}
exports.completionDetectionPlugin = completionDetectionPlugin;

});

var errorDetection_plugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDetectionPlugin = exports.errorDetectionHandler = void 0;

function isTaskError(result) {
    return !!(result.exitCode && result.stdErr.length);
}
function getErrorMessage(result) {
    return Buffer.concat([...result.stdOut, ...result.stdErr]);
}
function errorDetectionHandler(overwrite = false, isError = isTaskError, errorMessage = getErrorMessage) {
    return (error, result) => {
        if ((!overwrite && error) || !isError(result)) {
            return error;
        }
        return errorMessage(result);
    };
}
exports.errorDetectionHandler = errorDetectionHandler;
function errorDetectionPlugin(config) {
    return {
        type: 'task.error',
        action(data, context) {
            const error = config(data.error, {
                stdErr: context.stdErr,
                stdOut: context.stdOut,
                exitCode: context.exitCode
            });
            if (Buffer.isBuffer(error)) {
                return { error: new gitError.GitError(undefined, error.toString('utf-8')) };
            }
            return {
                error
            };
        },
    };
}
exports.errorDetectionPlugin = errorDetectionPlugin;

});

var pluginStore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginStore = void 0;

class PluginStore {
    constructor() {
        this.plugins = new Set();
    }
    add(plugin) {
        const plugins = [];
        utils.asArray(plugin).forEach(plugin => plugin && this.plugins.add(utils.append(plugins, plugin)));
        return () => {
            plugins.forEach(plugin => this.plugins.delete(plugin));
        };
    }
    exec(type, data, context) {
        let output = data;
        const contextual = Object.freeze(Object.create(context));
        for (const plugin of this.plugins) {
            if (plugin.type === type) {
                output = plugin.action(output, contextual);
            }
        }
        return output;
    }
}
exports.PluginStore = PluginStore;

});

var progressMonitorPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressMonitorPlugin = void 0;

function progressMonitorPlugin(progress) {
    const progressCommand = '--progress';
    const progressMethods = ['checkout', 'clone', 'fetch', 'pull', 'push'];
    const onProgress = {
        type: 'spawn.after',
        action(_data, context) {
            var _a;
            if (!context.commands.includes(progressCommand)) {
                return;
            }
            (_a = context.spawned.stderr) === null || _a === void 0 ? void 0 : _a.on('data', (chunk) => {
                const message = /^([\s\S]+?):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString('utf8'));
                if (!message) {
                    return;
                }
                progress({
                    method: context.method,
                    stage: progressEventStage(message[1]),
                    progress: utils.asNumber(message[2]),
                    processed: utils.asNumber(message[3]),
                    total: utils.asNumber(message[4]),
                });
            });
        }
    };
    const onArgs = {
        type: 'spawn.args',
        action(args, context) {
            if (!progressMethods.includes(context.method)) {
                return args;
            }
            return utils.including(args, progressCommand);
        }
    };
    return [onArgs, onProgress];
}
exports.progressMonitorPlugin = progressMonitorPlugin;
function progressEventStage(input) {
    return String(input.toLowerCase().split(' ', 1)) || 'unknown';
}

});

var simpleGitPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

});

var spawnOptionsPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnOptionsPlugin = void 0;

function spawnOptionsPlugin(spawnOptions) {
    const options = utils.pick(spawnOptions, ['uid', 'gid']);
    return {
        type: 'spawn.options',
        action(data) {
            return Object.assign(Object.assign({}, options), data);
        },
    };
}
exports.spawnOptionsPlugin = spawnOptionsPlugin;

});

var timoutPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutPlugin = void 0;

function timeoutPlugin({ block }) {
    if (block > 0) {
        return {
            type: 'spawn.after',
            action(_data, context) {
                var _a, _b;
                let timeout;
                function wait() {
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(kill, block);
                }
                function stop() {
                    var _a, _b;
                    (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.off('data', wait);
                    (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.off('data', wait);
                    context.spawned.off('exit', stop);
                    context.spawned.off('close', stop);
                }
                function kill() {
                    stop();
                    context.kill(new gitPluginError.GitPluginError(undefined, 'timeout', `block timeout reached`));
                }
                (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', wait);
                (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', wait);
                context.spawned.on('exit', stop);
                context.spawned.on('close', stop);
                wait();
            }
        };
    }
}
exports.timeoutPlugin = timeoutPlugin;

});

var plugins = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(commandConfigPrefixingPlugin_1, exports);
__exportStar(completionDetection_plugin, exports);
__exportStar(errorDetection_plugin, exports);
__exportStar(pluginStore, exports);
__exportStar(progressMonitorPlugin_1, exports);
__exportStar(simpleGitPlugin, exports);
__exportStar(spawnOptionsPlugin_1, exports);
__exportStar(timoutPlugin, exports);

});

var gitLogger = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLogger = exports.createLogger = void 0;


src$2.default.formatters.L = (value) => String(utils.filterHasLength(value) ? value.length : '-');
src$2.default.formatters.B = (value) => {
    if (Buffer.isBuffer(value)) {
        return value.toString('utf8');
    }
    return utils.objectToString(value);
};
function createLog() {
    return src$2.default('simple-git');
}
function prefixedLogger(to, prefix, forward) {
    if (!prefix || !String(prefix).replace(/\s*/, '')) {
        return !forward ? to : (message, ...args) => {
            to(message, ...args);
            forward(message, ...args);
        };
    }
    return (message, ...args) => {
        to(`%s ${message}`, prefix, ...args);
        if (forward) {
            forward(message, ...args);
        }
    };
}
function childLoggerName(name, childDebugger, { namespace: parentNamespace }) {
    if (typeof name === 'string') {
        return name;
    }
    const childNamespace = childDebugger && childDebugger.namespace || '';
    if (childNamespace.startsWith(parentNamespace)) {
        return childNamespace.substr(parentNamespace.length + 1);
    }
    return childNamespace || parentNamespace;
}
function createLogger(label, verbose, initialStep, infoDebugger = createLog()) {
    const labelPrefix = label && `[${label}]` || '';
    const spawned = [];
    const debugDebugger = (typeof verbose === 'string') ? infoDebugger.extend(verbose) : verbose;
    const key = childLoggerName(utils.filterType(verbose, utils.filterString), debugDebugger, infoDebugger);
    return step(initialStep);
    function sibling(name, initial) {
        return utils.append(spawned, createLogger(label, key.replace(/^[^:]+/, name), initial, infoDebugger));
    }
    function step(phase) {
        const stepPrefix = phase && `[${phase}]` || '';
        const debug = debugDebugger && prefixedLogger(debugDebugger, stepPrefix) || utils.NOOP;
        const info = prefixedLogger(infoDebugger, `${labelPrefix} ${stepPrefix}`, debug);
        return Object.assign(debugDebugger ? debug : info, {
            label,
            sibling,
            info,
            step,
        });
    }
}
exports.createLogger = createLogger;
/**
 * The `GitLogger` is used by the main `SimpleGit` runner to handle logging
 * any warnings or errors.
 */
class GitLogger {
    constructor(_out = createLog()) {
        this._out = _out;
        this.error = prefixedLogger(_out, '[ERROR]');
        this.warn = prefixedLogger(_out, '[WARN]');
    }
    silent(silence = false) {
        if (silence !== this._out.enabled) {
            return;
        }
        const { namespace } = this._out;
        const env = (process.env.DEBUG || '').split(',').filter(s => !!s);
        const hasOn = env.includes(namespace);
        const hasOff = env.includes(`-${namespace}`);
        // enabling the log
        if (!silence) {
            if (hasOff) {
                utils.remove(env, `-${namespace}`);
            }
            else {
                env.push(namespace);
            }
        }
        else {
            if (hasOn) {
                utils.remove(env, namespace);
            }
            else {
                env.push(`-${namespace}`);
            }
        }
        src$2.default.enable(env.join(','));
    }
}
exports.GitLogger = GitLogger;

});

var tasksPendingQueue = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksPendingQueue = void 0;


class TasksPendingQueue {
    constructor(logLabel = 'GitExecutor') {
        this.logLabel = logLabel;
        this._queue = new Map();
    }
    withProgress(task) {
        return this._queue.get(task);
    }
    createProgress(task) {
        const name = TasksPendingQueue.getName(task.commands[0]);
        const logger = gitLogger.createLogger(this.logLabel, name);
        return {
            task,
            logger,
            name,
        };
    }
    push(task) {
        const progress = this.createProgress(task);
        progress.logger('Adding task to the queue, commands = %o', task.commands);
        this._queue.set(task, progress);
        return progress;
    }
    fatal(err) {
        for (const [task, { logger }] of Array.from(this._queue.entries())) {
            if (task === err.task) {
                logger.info(`Failed %o`, err);
                logger(`Fatal exception, any as-yet un-started tasks run through this executor will not be attempted`);
            }
            else {
                logger.info(`A fatal exception occurred in a previous task, the queue has been purged: %o`, err.message);
            }
            this.complete(task);
        }
        if (this._queue.size !== 0) {
            throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
        }
    }
    complete(task) {
        const progress = this.withProgress(task);
        if (progress) {
            this._queue.delete(task);
        }
    }
    attempt(task) {
        const progress = this.withProgress(task);
        if (!progress) {
            throw new gitError.GitError(undefined, 'TasksPendingQueue: attempt called for an unknown task');
        }
        progress.logger('Starting task');
        return progress;
    }
    static getName(name = 'empty') {
        return `task:${name}:${++TasksPendingQueue.counter}`;
    }
}
exports.TasksPendingQueue = TasksPendingQueue;
TasksPendingQueue.counter = 0;

});

var gitExecutorChain = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutorChain = void 0;





class GitExecutorChain {
    constructor(_executor, _scheduler, _plugins) {
        this._executor = _executor;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = Promise.resolve();
        this._queue = new tasksPendingQueue.TasksPendingQueue();
    }
    get binary() {
        return this._executor.binary;
    }
    get cwd() {
        return this._cwd || this._executor.cwd;
    }
    set cwd(cwd) {
        this._cwd = cwd;
    }
    get env() {
        return this._executor.env;
    }
    get outputHandler() {
        return this._executor.outputHandler;
    }
    chain() {
        return this;
    }
    push(task) {
        this._queue.push(task);
        return this._chain = this._chain.then(() => this.attemptTask(task));
    }
    attemptTask(task$1) {
        return __awaiter(this, void 0, void 0, function* () {
            const onScheduleComplete = yield this._scheduler.next();
            const onQueueComplete = () => this._queue.complete(task$1);
            try {
                const { logger } = this._queue.attempt(task$1);
                return yield (task.isEmptyTask(task$1)
                    ? this.attemptEmptyTask(task$1, logger)
                    : this.attemptRemoteTask(task$1, logger));
            }
            catch (e) {
                throw this.onFatalException(task$1, e);
            }
            finally {
                onQueueComplete();
                onScheduleComplete();
            }
        });
    }
    onFatalException(task, e) {
        const gitError$1 = (e instanceof gitError.GitError) ? Object.assign(e, { task }) : new gitError.GitError(task, e && String(e));
        this._chain = Promise.resolve();
        this._queue.fatal(gitError$1);
        return gitError$1;
    }
    attemptRemoteTask(task$1, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = this._plugins.exec('spawn.args', [...task$1.commands], pluginContext(task$1, task$1.commands));
            const raw = yield this.gitResponse(task$1, this.binary, args, this.outputHandler, logger.step('SPAWN'));
            const outputStreams = yield this.handleTaskData(task$1, args, raw, logger.step('HANDLE'));
            logger(`passing response to task's parser as a %s`, task$1.format);
            if (task.isBufferTask(task$1)) {
                return utils.callTaskParser(task$1.parser, outputStreams);
            }
            return utils.callTaskParser(task$1.parser, outputStreams.asStrings());
        });
    }
    attemptEmptyTask(task, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            logger(`empty task bypassing child process to call to task's parser`);
            return task.parser(this);
        });
    }
    handleTaskData(task, args, result, logger) {
        const { exitCode, rejection, stdOut, stdErr } = result;
        return new Promise((done, fail) => {
            logger(`Preparing to handle process response exitCode=%d stdOut=`, exitCode);
            const { error } = this._plugins.exec('task.error', { error: rejection }, Object.assign(Object.assign({}, pluginContext(task, args)), result));
            if (error && task.onError) {
                logger.info(`exitCode=%s handling with custom error handler`);
                return task.onError(result, error, (newStdOut) => {
                    logger.info(`custom error handler treated as success`);
                    logger(`custom error returned a %s`, utils.objectToString(newStdOut));
                    done(new utils.GitOutputStreams(Array.isArray(newStdOut) ? Buffer.concat(newStdOut) : newStdOut, Buffer.concat(stdErr)));
                }, fail);
            }
            if (error) {
                logger.info(`handling as error: exitCode=%s stdErr=%s rejection=%o`, exitCode, stdErr.length, rejection);
                return fail(error);
            }
            logger.info(`retrieving task output complete`);
            done(new utils.GitOutputStreams(Buffer.concat(stdOut), Buffer.concat(stdErr)));
        });
    }
    gitResponse(task, command, args, outputHandler, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputLogger = logger.sibling('output');
            const spawnOptions = this._plugins.exec('spawn.options', {
                cwd: this.cwd,
                env: this.env,
                windowsHide: true,
            }, pluginContext(task, task.commands));
            return new Promise((done) => {
                const stdOut = [];
                const stdErr = [];
                let rejection;
                logger.info(`%s %o`, command, args);
                logger('%O', spawnOptions);
                const spawned = child_process_1__default["default"].spawn(command, args, spawnOptions);
                spawned.stdout.on('data', onDataReceived(stdOut, 'stdOut', logger, outputLogger.step('stdOut')));
                spawned.stderr.on('data', onDataReceived(stdErr, 'stdErr', logger, outputLogger.step('stdErr')));
                spawned.on('error', onErrorReceived(stdErr, logger));
                if (outputHandler) {
                    logger(`Passing child process stdOut/stdErr to custom outputHandler`);
                    outputHandler(command, spawned.stdout, spawned.stderr, [...args]);
                }
                this._plugins.exec('spawn.after', undefined, Object.assign(Object.assign({}, pluginContext(task, args)), { spawned, close(exitCode, reason) {
                        done({
                            stdOut,
                            stdErr,
                            exitCode,
                            rejection: rejection || reason,
                        });
                    },
                    kill(reason) {
                        if (spawned.killed) {
                            return;
                        }
                        rejection = reason;
                        spawned.kill('SIGINT');
                    } }));
            });
        });
    }
}
exports.GitExecutorChain = GitExecutorChain;
function pluginContext(task, commands) {
    return {
        method: utils.first(task.commands) || '',
        commands,
    };
}
function onErrorReceived(target, logger) {
    return (err) => {
        logger(`[ERROR] child process exception %o`, err);
        target.push(Buffer.from(String(err.stack), 'ascii'));
    };
}
function onDataReceived(target, name, logger, output) {
    return (buffer) => {
        logger(`%s received %L bytes`, name, buffer);
        output(`%B`, buffer);
        target.push(buffer);
    };
}

});

var gitExecutor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutor = void 0;

class GitExecutor {
    constructor(binary = 'git', cwd, _scheduler, _plugins) {
        this.binary = binary;
        this.cwd = cwd;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    chain() {
        return new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    push(task) {
        return this._chain.push(task);
    }
}
exports.GitExecutor = GitExecutor;

});

var taskCallback_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCallback = void 0;


function taskCallback(task, response, callback = utils.NOOP) {
    const onSuccess = (data) => {
        callback(null, data);
    };
    const onError = (err) => {
        if ((err === null || err === void 0 ? void 0 : err.task) === task) {
            callback((err instanceof gitResponseError.GitResponseError) ? addDeprecationNoticeToError(err) : err, undefined);
        }
    };
    response.then(onSuccess, onError);
}
exports.taskCallback = taskCallback;
function addDeprecationNoticeToError(err) {
    let log = (name) => {
        console.warn(`simple-git deprecation notice: accessing GitResponseError.${name} should be GitResponseError.git.${name}, this will no longer be available in version 3`);
        log = utils.NOOP;
    };
    return Object.create(err, Object.getOwnPropertyNames(err.git).reduce(descriptorReducer, {}));
    function descriptorReducer(all, name) {
        if (name in err) {
            return all;
        }
        all[name] = {
            enumerable: false,
            configurable: false,
            get() {
                log(name);
                return err.git[name];
            },
        };
        return all;
    }
}

});

var changeWorkingDirectory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeWorkingDirectoryTask = void 0;


function changeWorkingDirectoryTask(directory, root) {
    return task.adhocExecTask((instance) => {
        if (!utils.folderExists(directory)) {
            throw new Error(`Git.cwd: cannot change to non-directory "${directory}"`);
        }
        return ((root || instance).cwd = directory);
    });
}
exports.changeWorkingDirectoryTask = changeWorkingDirectoryTask;

});

var hashObject = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashObjectTask = void 0;

/**
 * Task used by `git.hashObject`
 */
function hashObjectTask(filePath, write) {
    const commands = ['hash-object', filePath];
    if (write) {
        commands.push('-w');
    }
    return task.straightThroughStringTask(commands, true);
}
exports.hashObjectTask = hashObjectTask;

});

var InitSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInit = exports.InitSummary = void 0;
class InitSummary {
    constructor(bare, path, existing, gitDir) {
        this.bare = bare;
        this.path = path;
        this.existing = existing;
        this.gitDir = gitDir;
    }
}
exports.InitSummary = InitSummary;
const initResponseRegex = /^Init.+ repository in (.+)$/;
const reInitResponseRegex = /^Rein.+ in (.+)$/;
function parseInit(bare, path, text) {
    const response = String(text).trim();
    let result;
    if ((result = initResponseRegex.exec(response))) {
        return new InitSummary(bare, path, false, result[1]);
    }
    if ((result = reInitResponseRegex.exec(response))) {
        return new InitSummary(bare, path, true, result[1]);
    }
    let gitDir = '';
    const tokens = response.split(' ');
    while (tokens.length) {
        const token = tokens.shift();
        if (token === 'in') {
            gitDir = tokens.join(' ');
            break;
        }
    }
    return new InitSummary(bare, path, /^re/i.test(response), gitDir);
}
exports.parseInit = parseInit;

});

var init = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTask = void 0;

const bareCommand = '--bare';
function hasBareCommand(command) {
    return command.includes(bareCommand);
}
function initTask(bare = false, path, customArgs) {
    const commands = ['init', ...customArgs];
    if (bare && !hasBareCommand(commands)) {
        commands.splice(1, 0, bareCommand);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return InitSummary_1.parseInit(commands.includes('--bare'), path, text);
        }
    };
}
exports.initTask = initTask;

});

var DiffSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffSummary = void 0;
/***
 * The DiffSummary is returned as a response to getting `git().status()`
 */
class DiffSummary {
    constructor() {
        this.changed = 0;
        this.deletions = 0;
        this.insertions = 0;
        this.files = [];
    }
}
exports.DiffSummary = DiffSummary;

});

var parseDiffSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDiffResult = void 0;

function parseDiffResult(stdOut) {
    const lines = stdOut.trim().split('\n');
    const status = new DiffSummary_1.DiffSummary();
    readSummaryLine(status, lines.pop());
    for (let i = 0, max = lines.length; i < max; i++) {
        const line = lines[i];
        textFileChange(line, status) || binaryFileChange(line, status);
    }
    return status;
}
exports.parseDiffResult = parseDiffResult;
function readSummaryLine(status, summary) {
    (summary || '')
        .trim()
        .split(', ')
        .forEach(function (text) {
        const summary = /(\d+)\s([a-z]+)/.exec(text);
        if (!summary) {
            return;
        }
        summaryType(status, summary[2], parseInt(summary[1], 10));
    });
}
function summaryType(status, key, value) {
    const match = (/([a-z]+?)s?\b/.exec(key));
    if (!match || !statusUpdate[match[1]]) {
        return;
    }
    statusUpdate[match[1]](status, value);
}
const statusUpdate = {
    file(status, value) {
        status.changed = value;
    },
    deletion(status, value) {
        status.deletions = value;
    },
    insertion(status, value) {
        status.insertions = value;
    }
};
function textFileChange(input, { files }) {
    const line = input.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);
    if (line) {
        var alterations = (line[3] || '').trim();
        files.push({
            file: line[1].trim(),
            changes: parseInt(line[2], 10),
            insertions: alterations.replace(/-/g, '').length,
            deletions: alterations.replace(/\+/g, '').length,
            binary: false
        });
        return true;
    }
    return false;
}
function binaryFileChange(input, { files }) {
    const line = input.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
    if (line) {
        files.push({
            file: line[1].trim(),
            before: +line[2],
            after: +line[3],
            binary: true
        });
        return true;
    }
    return false;
}

});

var parseListLogSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListLogSummaryParser = exports.SPLITTER = exports.COMMIT_BOUNDARY = exports.START_BOUNDARY = void 0;


exports.START_BOUNDARY = 'òòòòòò ';
exports.COMMIT_BOUNDARY = ' òò';
exports.SPLITTER = ' ò ';
const defaultFieldNames = ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
function lineBuilder(tokens, fields) {
    return fields.reduce((line, field, index) => {
        line[field] = tokens[index] || '';
        return line;
    }, Object.create({ diff: null }));
}
function createListLogSummaryParser(splitter = exports.SPLITTER, fields = defaultFieldNames) {
    return function (stdOut) {
        const all = utils.toLinesWithContent(stdOut, true, exports.START_BOUNDARY)
            .map(function (item) {
            const lineDetail = item.trim().split(exports.COMMIT_BOUNDARY);
            const listLogLine = lineBuilder(lineDetail[0].trim().split(splitter), fields);
            if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
                listLogLine.diff = parseDiffSummary.parseDiffResult(lineDetail[1]);
            }
            return listLogLine;
        });
        return {
            all,
            latest: all.length && all[0] || null,
            total: all.length,
        };
    };
}
exports.createListLogSummaryParser = createListLogSummaryParser;

});

var log = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTask = exports.parseLogOptions = void 0;



var excludeOptions;
(function (excludeOptions) {
    excludeOptions[excludeOptions["--pretty"] = 0] = "--pretty";
    excludeOptions[excludeOptions["max-count"] = 1] = "max-count";
    excludeOptions[excludeOptions["maxCount"] = 2] = "maxCount";
    excludeOptions[excludeOptions["n"] = 3] = "n";
    excludeOptions[excludeOptions["file"] = 4] = "file";
    excludeOptions[excludeOptions["format"] = 5] = "format";
    excludeOptions[excludeOptions["from"] = 6] = "from";
    excludeOptions[excludeOptions["to"] = 7] = "to";
    excludeOptions[excludeOptions["splitter"] = 8] = "splitter";
    excludeOptions[excludeOptions["symmetric"] = 9] = "symmetric";
    excludeOptions[excludeOptions["mailMap"] = 10] = "mailMap";
    excludeOptions[excludeOptions["multiLine"] = 11] = "multiLine";
    excludeOptions[excludeOptions["strictDate"] = 12] = "strictDate";
})(excludeOptions || (excludeOptions = {}));
function prettyFormat(format, splitter) {
    const fields = [];
    const formatStr = [];
    Object.keys(format).forEach((field) => {
        fields.push(field);
        formatStr.push(String(format[field]));
    });
    return [
        fields, formatStr.join(splitter)
    ];
}
function userOptions(input) {
    const output = Object.assign({}, input);
    Object.keys(input).forEach(key => {
        if (key in excludeOptions) {
            delete output[key];
        }
    });
    return output;
}
function parseLogOptions(opt = {}, customArgs = []) {
    const splitter = opt.splitter || parseListLogSummary.SPLITTER;
    const format = opt.format || {
        hash: '%H',
        date: opt.strictDate === false ? '%ai' : '%aI',
        message: '%s',
        refs: '%D',
        body: opt.multiLine ? '%B' : '%b',
        author_name: opt.mailMap !== false ? '%aN' : '%an',
        author_email: opt.mailMap !== false ? '%aE' : '%ae'
    };
    const [fields, formatStr] = prettyFormat(format, splitter);
    const suffix = [];
    const command = [
        `--pretty=format:${parseListLogSummary.START_BOUNDARY}${formatStr}${parseListLogSummary.COMMIT_BOUNDARY}`,
        ...customArgs,
    ];
    const maxCount = opt.n || opt['max-count'] || opt.maxCount;
    if (maxCount) {
        command.push(`--max-count=${maxCount}`);
    }
    if (opt.from && opt.to) {
        const rangeOperator = (opt.symmetric !== false) ? '...' : '..';
        suffix.push(`${opt.from}${rangeOperator}${opt.to}`);
    }
    if (opt.file) {
        suffix.push('--follow', opt.file);
    }
    utils.appendTaskOptions(userOptions(opt), command);
    return {
        fields,
        splitter,
        commands: [
            ...command,
            ...suffix,
        ],
    };
}
exports.parseLogOptions = parseLogOptions;
function logTask(splitter, fields, customArgs) {
    return {
        commands: ['log', ...customArgs],
        format: 'utf-8',
        parser: parseListLogSummary.createListLogSummaryParser(splitter, fields),
    };
}
exports.logTask = logTask;
function default_1() {
    return {
        log(...rest) {
            const next = utils.trailingFunctionArgument(arguments);
            const task = rejectDeprecatedSignatures(...rest) ||
                createLogTask(parseLogOptions(utils.trailingOptionsArgument(arguments), utils.filterType(arguments[0], utils.filterArray)));
            return this._runTask(task, next);
        }
    };
    function createLogTask(options) {
        return logTask(options.splitter, options.fields, options.commands);
    }
    function rejectDeprecatedSignatures(from, to) {
        return (utils.filterString(from) &&
            utils.filterString(to) &&
            task.configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`));
    }
}
exports.default = default_1;

});

var MergeSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSummaryDetail = exports.MergeSummaryConflict = void 0;
class MergeSummaryConflict {
    constructor(reason, file = null, meta) {
        this.reason = reason;
        this.file = file;
        this.meta = meta;
    }
    toString() {
        return `${this.file}:${this.reason}`;
    }
}
exports.MergeSummaryConflict = MergeSummaryConflict;
class MergeSummaryDetail {
    constructor() {
        this.conflicts = [];
        this.merges = [];
        this.result = 'success';
    }
    get failed() {
        return this.conflicts.length > 0;
    }
    get reason() {
        return this.result;
    }
    toString() {
        if (this.conflicts.length) {
            return `CONFLICTS: ${this.conflicts.join(', ')}`;
        }
        return 'OK';
    }
}
exports.MergeSummaryDetail = MergeSummaryDetail;

});

var PullSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullSummary = void 0;
class PullSummary {
    constructor() {
        this.remoteMessages = {
            all: [],
        };
        this.created = [];
        this.deleted = [];
        this.files = [];
        this.deletions = {};
        this.insertions = {};
        this.summary = {
            changes: 0,
            deletions: 0,
            insertions: 0,
        };
    }
}
exports.PullSummary = PullSummary;

});

var parseRemoteObjects = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteMessagesObjectParsers = void 0;

function objectEnumerationResult(remoteMessages) {
    return (remoteMessages.objects = remoteMessages.objects || {
        compressing: 0,
        counting: 0,
        enumerating: 0,
        packReused: 0,
        reused: { count: 0, delta: 0 },
        total: { count: 0, delta: 0 }
    });
}
function asObjectCount(source) {
    const count = /^\s*(\d+)/.exec(source);
    const delta = /delta (\d+)/i.exec(source);
    return {
        count: utils.asNumber(count && count[1] || '0'),
        delta: utils.asNumber(delta && delta[1] || '0'),
    };
}
exports.remoteMessagesObjectParsers = [
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (result, [total, reused, packReused]) => {
        const objects = objectEnumerationResult(result.remoteMessages);
        objects.total = asObjectCount(total);
        objects.reused = asObjectCount(reused);
        objects.packReused = utils.asNumber(packReused);
    }),
];

});

var parseRemoteMessages_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteMessageSummary = exports.parseRemoteMessages = void 0;


const parsers = [
    new utils.RemoteLineParser(/^remote:\s*(.+)$/, (result, [text]) => {
        result.remoteMessages.all.push(text.trim());
        return false;
    }),
    ...parseRemoteObjects.remoteMessagesObjectParsers,
    new utils.RemoteLineParser([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (result, [pullRequestUrl]) => {
        result.remoteMessages.pullRequestUrl = pullRequestUrl;
    }),
    new utils.RemoteLineParser([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (result, [count, summary, url]) => {
        result.remoteMessages.vulnerabilities = {
            count: utils.asNumber(count),
            summary,
            url,
        };
    }),
];
function parseRemoteMessages(_stdOut, stdErr) {
    return utils.parseStringResponse({ remoteMessages: new RemoteMessageSummary() }, parsers, stdErr);
}
exports.parseRemoteMessages = parseRemoteMessages;
class RemoteMessageSummary {
    constructor() {
        this.all = [];
    }
}
exports.RemoteMessageSummary = RemoteMessageSummary;

});

var parsePull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePullResult = exports.parsePullDetail = void 0;



const FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
const SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
const ACTION_REGEX = /^(create|delete) mode \d+ (.+)/;
const parsers = [
    new utils.LineParser(FILE_UPDATE_REGEX, (result, [file, insertions, deletions]) => {
        result.files.push(file);
        if (insertions) {
            result.insertions[file] = insertions.length;
        }
        if (deletions) {
            result.deletions[file] = deletions.length;
        }
    }),
    new utils.LineParser(SUMMARY_REGEX, (result, [changes, , insertions, , deletions]) => {
        if (insertions !== undefined || deletions !== undefined) {
            result.summary.changes = +changes || 0;
            result.summary.insertions = +insertions || 0;
            result.summary.deletions = +deletions || 0;
            return true;
        }
        return false;
    }),
    new utils.LineParser(ACTION_REGEX, (result, [action, file]) => {
        utils.append(result.files, file);
        utils.append((action === 'create') ? result.created : result.deleted, file);
    }),
];
const parsePullDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse(new PullSummary_1.PullSummary(), parsers, stdOut, stdErr);
};
exports.parsePullDetail = parsePullDetail;
const parsePullResult = (stdOut, stdErr) => {
    return Object.assign(new PullSummary_1.PullSummary(), exports.parsePullDetail(stdOut, stdErr), parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr));
};
exports.parsePullResult = parsePullResult;

});

var parseMerge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMergeDetail = exports.parseMergeResult = void 0;



const parsers = [
    new utils.LineParser(/^Auto-merging\s+(.+)$/, (summary, [autoMerge]) => {
        summary.merges.push(autoMerge);
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file, deleteRef]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file, { deleteRef }));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\):/, (summary, [reason]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, null));
    }),
    new utils.LineParser(/^Automatic merge failed;\s+(.+)$/, (summary, [result]) => {
        summary.result = result;
    }),
];
/**
 * Parse the complete response from `git.merge`
 */
const parseMergeResult = (stdOut, stdErr) => {
    return Object.assign(exports.parseMergeDetail(stdOut, stdErr), parsePull.parsePullResult(stdOut, stdErr));
};
exports.parseMergeResult = parseMergeResult;
/**
 * Parse the merge specific detail (ie: not the content also available in the pull detail) from `git.mnerge`
 * @param stdOut
 */
const parseMergeDetail = (stdOut) => {
    return utils.parseStringResponse(new MergeSummary.MergeSummaryDetail(), parsers, stdOut);
};
exports.parseMergeDetail = parseMergeDetail;

});

var merge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTask = void 0;



function mergeTask(customArgs) {
    if (!customArgs.length) {
        return task.configurationErrorTask('Git.merge requires at least one option');
    }
    return {
        commands: ['merge', ...customArgs],
        format: 'utf-8',
        parser(stdOut, stdErr) {
            const merge = parseMerge.parseMergeResult(stdOut, stdErr);
            if (merge.failed) {
                throw new gitResponseError.GitResponseError(merge);
            }
            return merge;
        }
    };
}
exports.mergeTask = mergeTask;

});

var parsePush = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePushDetail = exports.parsePushResult = void 0;


function pushResultPushedItem(local, remote, status) {
    const deleted = status.includes('deleted');
    const tag = status.includes('tag') || /^refs\/tags/.test(local);
    const alreadyUpdated = !status.includes('new');
    return {
        deleted,
        tag,
        branch: !tag,
        new: !alreadyUpdated,
        alreadyUpdated,
        local,
        remote,
    };
}
const parsers = [
    new utils.LineParser(/^Pushing to (.+)$/, (result, [repo]) => {
        result.repo = repo;
    }),
    new utils.LineParser(/^updating local tracking ref '(.+)'/, (result, [local]) => {
        result.ref = Object.assign(Object.assign({}, (result.ref || {})), { local });
    }),
    new utils.LineParser(/^[*-=]\s+([^:]+):(\S+)\s+\[(.+)]$/, (result, [local, remote, type]) => {
        result.pushed.push(pushResultPushedItem(local, remote, type));
    }),
    new utils.LineParser(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (result, [local, remote, remoteName]) => {
        result.branch = Object.assign(Object.assign({}, (result.branch || {})), { local,
            remote,
            remoteName });
    }),
    new utils.LineParser(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (result, [local, remote, from, to]) => {
        result.update = {
            head: {
                local,
                remote,
            },
            hash: {
                from,
                to,
            },
        };
    }),
];
const parsePushResult = (stdOut, stdErr) => {
    const pushDetail = exports.parsePushDetail(stdOut, stdErr);
    const responseDetail = parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr);
    return Object.assign(Object.assign({}, pushDetail), responseDetail);
};
exports.parsePushResult = parsePushResult;
const parsePushDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse({ pushed: [] }, parsers, stdOut, stdErr);
};
exports.parsePushDetail = parsePushDetail;

});

var push = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushTask = exports.pushTagsTask = void 0;


function pushTagsTask(ref = {}, customArgs) {
    utils.append(customArgs, '--tags');
    return pushTask(ref, customArgs);
}
exports.pushTagsTask = pushTagsTask;
function pushTask(ref = {}, customArgs) {
    const commands = ['push', ...customArgs];
    if (ref.branch) {
        commands.splice(1, 0, ref.branch);
    }
    if (ref.remote) {
        commands.splice(1, 0, ref.remote);
    }
    utils.remove(commands, '-v');
    utils.append(commands, '--verbose');
    utils.append(commands, '--porcelain');
    return {
        commands,
        format: 'utf-8',
        parser: parsePush.parsePushResult,
    };
}
exports.pushTask = pushTask;

});

var FileStatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStatusSummary = exports.fromPathRegex = void 0;
exports.fromPathRegex = /^(.+) -> (.+)$/;
class FileStatusSummary {
    constructor(path, index, working_dir) {
        this.path = path;
        this.index = index;
        this.working_dir = working_dir;
        if ('R' === (index + working_dir)) {
            const detail = exports.fromPathRegex.exec(path) || [null, path, path];
            this.from = detail[1] || '';
            this.path = detail[2] || '';
        }
    }
}
exports.FileStatusSummary = FileStatusSummary;

});

var StatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStatusSummary = exports.StatusSummary = void 0;


/**
 * The StatusSummary is returned as a response to getting `git().status()`
 */
class StatusSummary {
    constructor() {
        this.not_added = [];
        this.conflicted = [];
        this.created = [];
        this.deleted = [];
        this.modified = [];
        this.renamed = [];
        /**
         * All files represented as an array of objects containing the `path` and status in `index` and
         * in the `working_dir`.
         */
        this.files = [];
        this.staged = [];
        /**
         * Number of commits ahead of the tracked branch
         */
        this.ahead = 0;
        /**
         *Number of commits behind the tracked branch
         */
        this.behind = 0;
        /**
         * Name of the current branch
         */
        this.current = null;
        /**
         * Name of the branch being tracked
         */
        this.tracking = null;
    }
    /**
     * Gets whether this StatusSummary represents a clean working branch.
     */
    isClean() {
        return !this.files.length;
    }
}
exports.StatusSummary = StatusSummary;
var PorcelainFileStatus;
(function (PorcelainFileStatus) {
    PorcelainFileStatus["ADDED"] = "A";
    PorcelainFileStatus["DELETED"] = "D";
    PorcelainFileStatus["MODIFIED"] = "M";
    PorcelainFileStatus["RENAMED"] = "R";
    PorcelainFileStatus["COPIED"] = "C";
    PorcelainFileStatus["UNMERGED"] = "U";
    PorcelainFileStatus["UNTRACKED"] = "?";
    PorcelainFileStatus["IGNORED"] = "!";
    PorcelainFileStatus["NONE"] = " ";
})(PorcelainFileStatus || (PorcelainFileStatus = {}));
function renamedFile(line) {
    const detail = /^(.+) -> (.+)$/.exec(line);
    if (!detail) {
        return {
            from: line, to: line
        };
    }
    return {
        from: String(detail[1]),
        to: String(detail[2]),
    };
}
function parser(indexX, indexY, handler) {
    return [`${indexX}${indexY}`, handler];
}
function conflicts(indexX, ...indexY) {
    return indexY.map(y => parser(indexX, y, (result, file) => utils.append(result.conflicted, file)));
}
const parsers = new Map([
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.ADDED, (result, file) => utils.append(result.created, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.DELETED, (result, file) => utils.append(result.deleted, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file) && utils.append(result.modified, file)),
    parser(PorcelainFileStatus.DELETED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.deleted, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.NONE, (result, file) => {
        utils.append(result.renamed, renamedFile(file));
    }),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.MODIFIED, (result, file) => {
        const renamed = renamedFile(file);
        utils.append(result.renamed, renamed);
        utils.append(result.modified, renamed.to);
    }),
    parser(PorcelainFileStatus.UNTRACKED, PorcelainFileStatus.UNTRACKED, (result, file) => utils.append(result.not_added, file)),
    ...conflicts(PorcelainFileStatus.ADDED, PorcelainFileStatus.ADDED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.DELETED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.UNMERGED, PorcelainFileStatus.ADDED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ['##', (result, line) => {
            const aheadReg = /ahead (\d+)/;
            const behindReg = /behind (\d+)/;
            const currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
            const trackingReg = /\.{3}(\S*)/;
            const onEmptyBranchReg = /\son\s([\S]+)$/;
            let regexResult;
            regexResult = aheadReg.exec(line);
            result.ahead = regexResult && +regexResult[1] || 0;
            regexResult = behindReg.exec(line);
            result.behind = regexResult && +regexResult[1] || 0;
            regexResult = currentReg.exec(line);
            result.current = regexResult && regexResult[1];
            regexResult = trackingReg.exec(line);
            result.tracking = regexResult && regexResult[1];
            regexResult = onEmptyBranchReg.exec(line);
            result.current = regexResult && regexResult[1] || result.current;
        }]
]);
const parseStatusSummary = function (text) {
    const lines = text.trim().split('\n');
    const status = new StatusSummary();
    for (let i = 0, l = lines.length; i < l; i++) {
        splitLine(status, lines[i]);
    }
    return status;
};
exports.parseStatusSummary = parseStatusSummary;
function splitLine(result, lineStr) {
    const trimmed = lineStr.trim();
    switch (' ') {
        case trimmed.charAt(2):
            return data(trimmed.charAt(0), trimmed.charAt(1), trimmed.substr(3));
        case trimmed.charAt(1):
            return data(PorcelainFileStatus.NONE, trimmed.charAt(0), trimmed.substr(2));
        default:
            return;
    }
    function data(index, workingDir, path) {
        const raw = `${index}${workingDir}`;
        const handler = parsers.get(raw);
        if (handler) {
            handler(result, path);
        }
        if (raw !== '##') {
            result.files.push(new FileStatusSummary_1.FileStatusSummary(path, index, workingDir));
        }
    }
}

});

var status = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusTask = void 0;

function statusTask(customArgs) {
    return {
        format: 'utf-8',
        commands: ['status', '--porcelain', '-b', '-u', ...customArgs],
        parser(text) {
            return StatusSummary_1.parseStatusSummary(text);
        }
    };
}
exports.statusTask = statusTask;

});

var simpleGitApi = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGitApi = void 0;











class SimpleGitApi {
    constructor(_executor) {
        this._executor = _executor;
    }
    _runTask(task, then) {
        const chain = this._executor.chain();
        const promise = chain.push(task);
        if (then) {
            taskCallback_1.taskCallback(task, promise, then);
        }
        return Object.create(this, {
            then: { value: promise.then.bind(promise) },
            catch: { value: promise.catch.bind(promise) },
            _executor: { value: chain },
        });
    }
    add(files) {
        return this._runTask(task.straightThroughStringTask(['add', ...utils.asArray(files)]), utils.trailingFunctionArgument(arguments));
    }
    cwd(directory) {
        const next = utils.trailingFunctionArgument(arguments);
        if (typeof directory === 'string') {
            return this._runTask(changeWorkingDirectory.changeWorkingDirectoryTask(directory, this._executor), next);
        }
        if (typeof (directory === null || directory === void 0 ? void 0 : directory.path) === 'string') {
            return this._runTask(changeWorkingDirectory.changeWorkingDirectoryTask(directory.path, directory.root && this._executor || undefined), next);
        }
        return this._runTask(task.configurationErrorTask('Git.cwd: workingDirectory must be supplied as a string'), next);
    }
    hashObject(path, write) {
        return this._runTask(hashObject.hashObjectTask(path, write === true), utils.trailingFunctionArgument(arguments));
    }
    init(bare) {
        return this._runTask(init.initTask(bare === true, this._executor.cwd, utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
    merge() {
        return this._runTask(merge.mergeTask(utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
    mergeFromTo(remote, branch) {
        if (!(utils.filterString(remote) && utils.filterString(branch))) {
            return this._runTask(task.configurationErrorTask(`Git.mergeFromTo requires that the 'remote' and 'branch' arguments are supplied as strings`));
        }
        return this._runTask(merge.mergeTask([remote, branch, ...utils.getTrailingOptions(arguments)]), utils.trailingFunctionArgument(arguments, false));
    }
    outputHandler(handler) {
        this._executor.outputHandler = handler;
        return this;
    }
    push() {
        const task = push.pushTask({
            remote: utils.filterType(arguments[0], utils.filterString),
            branch: utils.filterType(arguments[1], utils.filterString),
        }, utils.getTrailingOptions(arguments));
        return this._runTask(task, utils.trailingFunctionArgument(arguments));
    }
    stash() {
        return this._runTask(task.straightThroughStringTask(['stash', ...utils.getTrailingOptions(arguments)]), utils.trailingFunctionArgument(arguments));
    }
    status() {
        return this._runTask(status.statusTask(utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
}
exports.SimpleGitApi = SimpleGitApi;
Object.assign(SimpleGitApi.prototype, config.default(), log.default());

});

var scheduler = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;



const createScheduledTask = (() => {
    let id = 0;
    return () => {
        id++;
        const { promise, done } = dist.createDeferred();
        return {
            promise,
            done,
            id,
        };
    };
})();
class Scheduler {
    constructor(concurrency = 2) {
        this.concurrency = concurrency;
        this.logger = gitLogger.createLogger('', 'scheduler');
        this.pending = [];
        this.running = [];
        this.logger(`Constructed, concurrency=%s`, concurrency);
    }
    schedule() {
        if (!this.pending.length || this.running.length >= this.concurrency) {
            this.logger(`Schedule attempt ignored, pending=%s running=%s concurrency=%s`, this.pending.length, this.running.length, this.concurrency);
            return;
        }
        const task = utils.append(this.running, this.pending.shift());
        this.logger(`Attempting id=%s`, task.id);
        task.done(() => {
            this.logger(`Completing id=`, task.id);
            utils.remove(this.running, task);
            this.schedule();
        });
    }
    next() {
        const { promise, id } = utils.append(this.pending, createScheduledTask());
        this.logger(`Scheduling id=%s`, id);
        this.schedule();
        return promise;
    }
}
exports.Scheduler = Scheduler;

});

var applyPatch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPatchTask = void 0;

function applyPatchTask(patches, customArgs) {
    return task.straightThroughStringTask(['apply', ...customArgs, ...patches]);
}
exports.applyPatchTask = applyPatchTask;

});

var BranchDeleteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleBranchDeleteFailure = exports.branchDeletionFailure = exports.branchDeletionSuccess = exports.BranchDeletionBatch = void 0;
class BranchDeletionBatch {
    constructor() {
        this.all = [];
        this.branches = {};
        this.errors = [];
    }
    get success() {
        return !this.errors.length;
    }
}
exports.BranchDeletionBatch = BranchDeletionBatch;
function branchDeletionSuccess(branch, hash) {
    return {
        branch, hash, success: true,
    };
}
exports.branchDeletionSuccess = branchDeletionSuccess;
function branchDeletionFailure(branch) {
    return {
        branch, hash: null, success: false,
    };
}
exports.branchDeletionFailure = branchDeletionFailure;
function isSingleBranchDeleteFailure(test) {
    return test.success;
}
exports.isSingleBranchDeleteFailure = isSingleBranchDeleteFailure;

});

var parseBranchDelete = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBranchDeletionError = exports.parseBranchDeletions = void 0;


const deleteSuccessRegex = /(\S+)\s+\(\S+\s([^)]+)\)/;
const deleteErrorRegex = /^error[^']+'([^']+)'/m;
const parsers = [
    new utils.LineParser(deleteSuccessRegex, (result, [branch, hash]) => {
        const deletion = BranchDeleteSummary.branchDeletionSuccess(branch, hash);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
    new utils.LineParser(deleteErrorRegex, (result, [branch]) => {
        const deletion = BranchDeleteSummary.branchDeletionFailure(branch);
        result.errors.push(deletion);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
];
const parseBranchDeletions = (stdOut, stdErr) => {
    return utils.parseStringResponse(new BranchDeleteSummary.BranchDeletionBatch(), parsers, stdOut, stdErr);
};
exports.parseBranchDeletions = parseBranchDeletions;
function hasBranchDeletionError(data, processExitCode) {
    return processExitCode === utils.ExitCodes.ERROR && deleteErrorRegex.test(data);
}
exports.hasBranchDeletionError = hasBranchDeletionError;

});

var BranchSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSummaryResult = void 0;
class BranchSummaryResult {
    constructor() {
        this.all = [];
        this.branches = {};
        this.current = '';
        this.detached = false;
    }
    push(current, detached, name, commit, label) {
        if (current) {
            this.detached = detached;
            this.current = name;
        }
        this.all.push(name);
        this.branches[name] = {
            current: current,
            name: name,
            commit: commit,
            label: label
        };
    }
}
exports.BranchSummaryResult = BranchSummaryResult;

});

var parseBranch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBranchSummary = void 0;


const parsers = [
    new utils.LineParser(/^(\*\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (result, [current, name, commit, label]) => {
        result.push(!!current, true, name, commit, label);
    }),
    new utils.LineParser(/^(\*\s)?(\S+)\s+([a-z0-9]+)\s(.*)$/s, (result, [current, name, commit, label]) => {
        result.push(!!current, false, name, commit, label);
    })
];
function parseBranchSummary(stdOut) {
    return utils.parseStringResponse(new BranchSummary.BranchSummaryResult(), parsers, stdOut);
}
exports.parseBranchSummary = parseBranchSummary;

});

var branch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranchTask = exports.deleteBranchesTask = exports.branchLocalTask = exports.branchTask = exports.containsDeleteBranchCommand = void 0;




function containsDeleteBranchCommand(commands) {
    const deleteCommands = ['-d', '-D', '--delete'];
    return commands.some(command => deleteCommands.includes(command));
}
exports.containsDeleteBranchCommand = containsDeleteBranchCommand;
function branchTask(customArgs) {
    const isDelete = containsDeleteBranchCommand(customArgs);
    const commands = ['branch', ...customArgs];
    if (commands.length === 1) {
        commands.push('-a');
    }
    if (!commands.includes('-v')) {
        commands.splice(1, 0, '-v');
    }
    return {
        format: 'utf-8',
        commands,
        parser(stdOut, stdErr) {
            if (isDelete) {
                return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).all[0];
            }
            return parseBranch.parseBranchSummary(stdOut);
        },
    };
}
exports.branchTask = branchTask;
function branchLocalTask() {
    const parser = parseBranch.parseBranchSummary;
    return {
        format: 'utf-8',
        commands: ['branch', '-v'],
        parser,
    };
}
exports.branchLocalTask = branchLocalTask;
function deleteBranchesTask(branches, forceDelete = false) {
    return {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', ...branches],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr);
        },
        onError({ exitCode, stdOut }, error, done, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            done(stdOut);
        },
    };
}
exports.deleteBranchesTask = deleteBranchesTask;
function deleteBranchTask(branch, forceDelete = false) {
    const task = {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', branch],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).branches[branch];
        },
        onError({ exitCode, stdErr, stdOut }, error, _, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            throw new gitResponseError.GitResponseError(task.parser(utils.bufferToString(stdOut), utils.bufferToString(stdErr)), String(error));
        },
    };
    return task;
}
exports.deleteBranchTask = deleteBranchTask;

});

var CheckIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCheckIgnore = void 0;
/**
 * Parser for the `check-ignore` command - returns each file as a string array
 */
const parseCheckIgnore = (text) => {
    return text.split(/\n/g)
        .map(line => line.trim())
        .filter(file => !!file);
};
exports.parseCheckIgnore = parseCheckIgnore;

});

var checkIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIgnoreTask = void 0;

function checkIgnoreTask(paths) {
    return {
        commands: ['check-ignore', ...paths],
        format: 'utf-8',
        parser: CheckIgnore.parseCheckIgnore,
    };
}
exports.checkIgnoreTask = checkIgnoreTask;

});

var clone = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMirrorTask = exports.cloneTask = void 0;


function cloneTask(repo, directory, customArgs) {
    const commands = ['clone', ...customArgs];
    if (typeof repo === 'string') {
        commands.push(repo);
    }
    if (typeof directory === 'string') {
        commands.push(directory);
    }
    return task.straightThroughStringTask(commands);
}
exports.cloneTask = cloneTask;
function cloneMirrorTask(repo, directory, customArgs) {
    utils.append(customArgs, '--mirror');
    return cloneTask(repo, directory, customArgs);
}
exports.cloneMirrorTask = cloneMirrorTask;

});

var parseCommit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommitResult = void 0;

const parsers = [
    new utils.LineParser(/^\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (result, [branch, root, commit]) => {
        result.branch = branch;
        result.commit = commit;
        result.root = !!root;
    }),
    new utils.LineParser(/\s*Author:\s(.+)/i, (result, [author]) => {
        const parts = author.split('<');
        const email = parts.pop();
        if (!email || !email.includes('@')) {
            return;
        }
        result.author = {
            email: email.substr(0, email.length - 1),
            name: parts.join('<').trim()
        };
    }),
    new utils.LineParser(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (result, [changes, insertions, deletions]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        result.summary.insertions = parseInt(insertions, 10) || 0;
        result.summary.deletions = parseInt(deletions, 10) || 0;
    }),
    new utils.LineParser(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (result, [changes, lines, direction]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        const count = parseInt(lines, 10) || 0;
        if (direction === '-') {
            result.summary.deletions = count;
        }
        else if (direction === '+') {
            result.summary.insertions = count;
        }
    }),
];
function parseCommitResult(stdOut) {
    const result = {
        author: null,
        branch: '',
        commit: '',
        root: false,
        summary: {
            changes: 0,
            insertions: 0,
            deletions: 0,
        },
    };
    return utils.parseStringResponse(result, parsers, stdOut);
}
exports.parseCommitResult = parseCommitResult;

});

var commit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitTask = void 0;

function commitTask(message, files, customArgs) {
    const commands = ['commit'];
    message.forEach((m) => commands.push('-m', m));
    commands.push(...files, ...customArgs);
    return {
        commands,
        format: 'utf-8',
        parser: parseCommit.parseCommitResult,
    };
}
exports.commitTask = commitTask;

});

var diff = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffSummaryTask = void 0;

function diffSummaryTask(customArgs) {
    return {
        commands: ['diff', '--stat=4096', ...customArgs],
        format: 'utf-8',
        parser(stdOut) {
            return parseDiffSummary.parseDiffResult(stdOut);
        }
    };
}
exports.diffSummaryTask = diffSummaryTask;

});

var parseFetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFetchResult = void 0;

const parsers = [
    new utils.LineParser(/From (.+)$/, (result, [remote]) => {
        result.remote = remote;
    }),
    new utils.LineParser(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.branches.push({
            name,
            tracking,
        });
    }),
    new utils.LineParser(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.tags.push({
            name,
            tracking,
        });
    })
];
function parseFetchResult(stdOut, stdErr) {
    const result = {
        raw: stdOut,
        remote: null,
        branches: [],
        tags: [],
    };
    return utils.parseStringResponse(result, parsers, stdOut, stdErr);
}
exports.parseFetchResult = parseFetchResult;

});

var fetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTask = void 0;

function fetchTask(remote, branch, customArgs) {
    const commands = ['fetch', ...customArgs];
    if (remote && branch) {
        commands.push(remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser: parseFetch.parseFetchResult,
    };
}
exports.fetchTask = fetchTask;

});

var parseMove = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoveResult = void 0;

const parsers = [
    new utils.LineParser(/^Renaming (.+) to (.+)$/, (result, [from, to]) => {
        result.moves.push({ from, to });
    }),
];
function parseMoveResult(stdOut) {
    return utils.parseStringResponse({ moves: [] }, parsers, stdOut);
}
exports.parseMoveResult = parseMoveResult;

});

var move = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTask = void 0;


function moveTask(from, to) {
    return {
        commands: ['mv', '-v', ...utils.asArray(from), to],
        format: 'utf-8',
        parser: parseMove.parseMoveResult,
    };
}
exports.moveTask = moveTask;

});

var pull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullTask = void 0;

function pullTask(remote, branch, customArgs) {
    const commands = ['pull', ...customArgs];
    if (remote && branch) {
        commands.splice(1, 0, remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser(stdOut, stdErr) {
            return parsePull.parsePullResult(stdOut, stdErr);
        }
    };
}
exports.pullTask = pullTask;

});

var GetRemoteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetRemotesVerbose = exports.parseGetRemotes = void 0;

function parseGetRemotes(text) {
    const remotes = {};
    forEach(text, ([name]) => remotes[name] = { name });
    return Object.values(remotes);
}
exports.parseGetRemotes = parseGetRemotes;
function parseGetRemotesVerbose(text) {
    const remotes = {};
    forEach(text, ([name, url, purpose]) => {
        if (!remotes.hasOwnProperty(name)) {
            remotes[name] = {
                name: name,
                refs: { fetch: '', push: '' },
            };
        }
        if (purpose && url) {
            remotes[name].refs[purpose.replace(/[^a-z]/g, '')] = url;
        }
    });
    return Object.values(remotes);
}
exports.parseGetRemotesVerbose = parseGetRemotesVerbose;
function forEach(text, handler) {
    utils.forEachLineWithContent(text, (line) => handler(line.split(/\s+/)));
}

});

var remote = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRemoteTask = exports.remoteTask = exports.listRemotesTask = exports.getRemotesTask = exports.addRemoteTask = void 0;


function addRemoteTask(remoteName, remoteRepo, customArgs = []) {
    return task.straightThroughStringTask(['remote', 'add', ...customArgs, remoteName, remoteRepo]);
}
exports.addRemoteTask = addRemoteTask;
function getRemotesTask(verbose) {
    const commands = ['remote'];
    if (verbose) {
        commands.push('-v');
    }
    return {
        commands,
        format: 'utf-8',
        parser: verbose ? GetRemoteSummary.parseGetRemotesVerbose : GetRemoteSummary.parseGetRemotes,
    };
}
exports.getRemotesTask = getRemotesTask;
function listRemotesTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'ls-remote') {
        commands.unshift('ls-remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.listRemotesTask = listRemotesTask;
function remoteTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'remote') {
        commands.unshift('remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.remoteTask = remoteTask;
function removeRemoteTask(remoteName) {
    return task.straightThroughStringTask(['remote', 'remove', remoteName]);
}
exports.removeRemoteTask = removeRemoteTask;

});

var stashList = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stashListTask = void 0;


function stashListTask(opt = {}, customArgs) {
    const options = log.parseLogOptions(opt);
    const parser = parseListLogSummary.createListLogSummaryParser(options.splitter, options.fields);
    return {
        commands: ['stash', 'list', ...options.commands, ...customArgs],
        format: 'utf-8',
        parser,
    };
}
exports.stashListTask = stashListTask;

});

var subModule = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubModuleTask = exports.subModuleTask = exports.initSubModuleTask = exports.addSubModuleTask = void 0;

function addSubModuleTask(repo, path) {
    return subModuleTask(['add', repo, path]);
}
exports.addSubModuleTask = addSubModuleTask;
function initSubModuleTask(customArgs) {
    return subModuleTask(['init', ...customArgs]);
}
exports.initSubModuleTask = initSubModuleTask;
function subModuleTask(customArgs) {
    const commands = [...customArgs];
    if (commands[0] !== 'submodule') {
        commands.unshift('submodule');
    }
    return task.straightThroughStringTask(commands);
}
exports.subModuleTask = subModuleTask;
function updateSubModuleTask(customArgs) {
    return subModuleTask(['update', ...customArgs]);
}
exports.updateSubModuleTask = updateSubModuleTask;

});

var TagList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTagList = exports.TagList = void 0;
class TagList {
    constructor(all, latest) {
        this.all = all;
        this.latest = latest;
    }
}
exports.TagList = TagList;
const parseTagList = function (data, customSort = false) {
    const tags = data
        .split('\n')
        .map(trimmed)
        .filter(Boolean);
    if (!customSort) {
        tags.sort(function (tagA, tagB) {
            const partsA = tagA.split('.');
            const partsB = tagB.split('.');
            if (partsA.length === 1 || partsB.length === 1) {
                return singleSorted(toNumber(partsA[0]), toNumber(partsB[0]));
            }
            for (let i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
                const diff = sorted(toNumber(partsA[i]), toNumber(partsB[i]));
                if (diff) {
                    return diff;
                }
            }
            return 0;
        });
    }
    const latest = customSort ? tags[0] : [...tags].reverse().find((tag) => tag.indexOf('.') >= 0);
    return new TagList(tags, latest);
};
exports.parseTagList = parseTagList;
function singleSorted(a, b) {
    const aIsNum = isNaN(a);
    const bIsNum = isNaN(b);
    if (aIsNum !== bIsNum) {
        return aIsNum ? 1 : -1;
    }
    return aIsNum ? sorted(a, b) : 0;
}
function sorted(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function trimmed(input) {
    return input.trim();
}
function toNumber(input) {
    if (typeof input === 'string') {
        return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
    }
    return 0;
}

});

var tag = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnnotatedTagTask = exports.addTagTask = exports.tagListTask = void 0;

/**
 * Task used by `git.tags`
 */
function tagListTask(customArgs = []) {
    const hasCustomSort = customArgs.some((option) => /^--sort=/.test(option));
    return {
        format: 'utf-8',
        commands: ['tag', '-l', ...customArgs],
        parser(text) {
            return TagList_1.parseTagList(text, hasCustomSort);
        },
    };
}
exports.tagListTask = tagListTask;
/**
 * Task used by `git.addTag`
 */
function addTagTask(name) {
    return {
        format: 'utf-8',
        commands: ['tag', name],
        parser() {
            return { name };
        }
    };
}
exports.addTagTask = addTagTask;
/**
 * Task used by `git.addTag`
 */
function addAnnotatedTagTask(name, tagMessage) {
    return {
        format: 'utf-8',
        commands: ['tag', '-a', '-m', tagMessage, name],
        parser() {
            return { name };
        }
    };
}
exports.addAnnotatedTagTask = addAnnotatedTagTask;

});

const {GitExecutor} = gitExecutor;
const {SimpleGitApi} = simpleGitApi;

const {Scheduler} = scheduler;
const {GitLogger} = gitLogger;
const {configurationErrorTask} = task;
const {
   asArray,
   filterArray,
   filterPrimitives,
   filterString,
   filterStringOrStringArray,
   filterType,
   getTrailingOptions,
   trailingFunctionArgument,
   trailingOptionsArgument
} = utils;
const {applyPatchTask} = applyPatch;
const {branchTask, branchLocalTask, deleteBranchesTask, deleteBranchTask} = branch;
const {checkIgnoreTask} = checkIgnore;
const {checkIsRepoTask} = checkIsRepo;
const {cloneTask, cloneMirrorTask} = clone;
const {cleanWithOptionsTask, isCleanOptionsArray} = clean;
const {commitTask} = commit;
const {diffSummaryTask} = diff;
const {fetchTask} = fetch;
const {moveTask} = move;
const {pullTask} = pull;
const {pushTagsTask} = push;
const {addRemoteTask, getRemotesTask, listRemotesTask, remoteTask, removeRemoteTask} = remote;
const {getResetMode, resetTask} = reset;
const {stashListTask} = stashList;
const {addSubModuleTask, initSubModuleTask, subModuleTask, updateSubModuleTask} = subModule;
const {addAnnotatedTagTask, addTagTask, tagListTask} = tag;
const {straightThroughBufferTask, straightThroughStringTask} = task;

function Git (options, plugins) {
   this._executor = new GitExecutor(
      options.binary, options.baseDir,
      new Scheduler(options.maxConcurrentProcesses), plugins,
   );
   this._logger = new GitLogger();
}

(Git.prototype = Object.create(SimpleGitApi.prototype)).constructor = Git;

/**
 * Logging utility for printing out info or error messages to the user
 * @type {GitLogger}
 * @private
 */
Git.prototype._logger = null;

/**
 * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
 * the system path, or a fully qualified path to the executable.
 *
 * @param {string} command
 * @returns {Git}
 */
Git.prototype.customBinary = function (command) {
   this._executor.binary = command;
   return this;
};

/**
 * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
 * a single object to entirely replace the current environment variables.
 *
 * @param {string|Object} name
 * @param {string} [value]
 * @returns {Git}
 */
Git.prototype.env = function (name, value) {
   if (arguments.length === 1 && typeof name === 'object') {
      this._executor.env = name;
   } else {
      (this._executor.env = this._executor.env || {})[name] = value;
   }

   return this;
};

/**
 * List the stash(s) of the local repo
 */
Git.prototype.stashList = function (options) {
   return this._runTask(
      stashListTask(
         trailingOptionsArgument(arguments) || {},
         filterArray(options) && options || []
      ),
      trailingFunctionArgument(arguments),
   );
};

function createCloneTask (api, task, repoPath, localPath) {
   if (typeof repoPath !== 'string') {
      return configurationErrorTask(`git.${ api }() requires a string 'repoPath'`);
   }

   return task(repoPath, filterType(localPath, filterString), getTrailingOptions(arguments));
}


/**
 * Clone a git repo
 */
Git.prototype.clone = function () {
   return this._runTask(
      createCloneTask('clone', cloneTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Mirror a git repo
 */
Git.prototype.mirror = function () {
   return this._runTask(
      createCloneTask('mirror', cloneMirrorTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Moves one or more files to a new destination.
 *
 * @see https://git-scm.com/docs/git-mv
 *
 * @param {string|string[]} from
 * @param {string} to
 */
Git.prototype.mv = function (from, to) {
   return this._runTask(moveTask(from, to), trailingFunctionArgument(arguments));
};

/**
 * Internally uses pull and tags to get the list of tags then checks out the latest tag.
 *
 * @param {Function} [then]
 */
Git.prototype.checkoutLatestTag = function (then) {
   var git = this;
   return this.pull(function () {
      git.tags(function (err, tags) {
         git.checkout(tags.latest, then);
      });
   });
};

/**
 * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
 * files will be committed.
 *
 * @param {string|string[]} message
 * @param {string|string[]} [files]
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.commit = function (message, files, options, then) {
   const next = trailingFunctionArgument(arguments);
   const messages = [];

   if (filterStringOrStringArray(message)) {
      messages.push(...asArray(message));
   } else {
      console.warn('simple-git deprecation notice: git.commit: requires the commit message to be supplied as a string/string[], this will be an error in version 3');
   }

   return this._runTask(
      commitTask(
         messages,
         asArray(filterType(files, filterStringOrStringArray, [])),
         [...filterType(options, filterArray, []), ...getTrailingOptions(arguments, 0, true)]
      ),
      next
   );
};

/**
 * Pull the updated contents of the current repo
 */
Git.prototype.pull = function (remote, branch, options, then) {
   return this._runTask(
      pullTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Fetch the updated contents of the current repo.
 *
 * @example
 *   .fetch('upstream', 'master') // fetches from master on remote named upstream
 *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
 *
 * @param {string} [remote]
 * @param {string} [branch]
 */
Git.prototype.fetch = function (remote, branch) {
   return this._runTask(
      fetchTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
 * a production environment.
 *
 * @param {boolean} silence
 * @returns {Git}
 */
Git.prototype.silent = function (silence) {
   console.warn('simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3');
   this._logger.silent(!!silence);
   return this;
};

/**
 * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
 * sort the tags by that property instead of using the default semantic versioning sort.
 *
 * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
 *
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.tags = function (options, then) {
   return this._runTask(
      tagListTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Rebases the current working copy. Options can be supplied either as an array of string parameters
 * to be sent to the `git rebase` command, or a standard options object.
 */
Git.prototype.rebase = function () {
   return this._runTask(
      straightThroughStringTask(['rebase', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Reset a repo
 */
Git.prototype.reset = function (mode) {
   return this._runTask(
      resetTask(getResetMode(mode), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Revert one or more commits in the local working copy
 */
Git.prototype.revert = function (commit) {
   const next = trailingFunctionArgument(arguments);

   if (typeof commit !== 'string') {
      return this._runTask(
         configurationErrorTask('Commit must be a string'),
         next,
      );
   }

   return this._runTask(
      straightThroughStringTask(['revert', ...getTrailingOptions(arguments, 0, true), commit]),
      next
   );
};

/**
 * Add a lightweight tag to the head of the current branch
 */
Git.prototype.addTag = function (name) {
   const task = (typeof name === 'string')
      ? addTagTask(name)
      : configurationErrorTask('Git.addTag requires a tag name');

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Add an annotated tag to the head of the current branch
 */
Git.prototype.addAnnotatedTag = function (tagName, tagMessage) {
   return this._runTask(
      addAnnotatedTagTask(tagName, tagMessage),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
 * by supplying either a string or array of strings as the first argument.
 */
Git.prototype.checkout = function () {
   const commands = ['checkout', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a remote branch
 *
 * @param {string} branchName name of branch
 * @param {string} startPoint (e.g origin/development)
 * @param {Function} [then]
 */
Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
   return this.checkout(['-b', branchName, startPoint], trailingFunctionArgument(arguments));
};

/**
 * Check out a local branch
 */
Git.prototype.checkoutLocalBranch = function (branchName, then) {
   return this.checkout(['-b', branchName], trailingFunctionArgument(arguments));
};

/**
 * Delete a local branch
 */
Git.prototype.deleteLocalBranch = function (branchName, forceDelete, then) {
   return this._runTask(
      deleteBranchTask(branchName, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Delete one or more local branches
 */
Git.prototype.deleteLocalBranches = function (branchNames, forceDelete, then) {
   return this._runTask(
      deleteBranchesTask(branchNames, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List all branches
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.branch = function (options, then) {
   return this._runTask(
      branchTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Return list of local branches
 *
 * @param {Function} [then]
 */
Git.prototype.branchLocal = function (then) {
   return this._runTask(
      branchLocalTask(),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Executes any command against the git binary.
 */
Git.prototype.raw = function (commands) {
   const createRestCommands = !Array.isArray(commands);
   const command = [].slice.call(createRestCommands ? arguments : commands, 0);

   for (let i = 0; i < command.length && createRestCommands; i++) {
      if (!filterPrimitives(command[i])) {
         command.splice(i, command.length - i);
         break;
      }
   }

   command.push(
      ...getTrailingOptions(arguments, 0, true),
   );

   var next = trailingFunctionArgument(arguments);

   if (!command.length) {
      return this._runTask(
         configurationErrorTask('Raw: must supply one or more command to execute'),
         next,
      );
   }

   return this._runTask(straightThroughStringTask(command), next);
};

Git.prototype.submoduleAdd = function (repo, path, then) {
   return this._runTask(
      addSubModuleTask(repo, path),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleUpdate = function (args, then) {
   return this._runTask(
      updateSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleInit = function (args, then) {
   return this._runTask(
      initSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.subModule = function (options, then) {
   return this._runTask(
      subModuleTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listRemote = function () {
   return this._runTask(
      listRemotesTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Adds a remote to the list of remotes.
 */
Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
   return this._runTask(
      addRemoteTask(remoteName, remoteRepo, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Removes an entry by name from the list of remotes.
 */
Git.prototype.removeRemote = function (remoteName, then) {
   return this._runTask(
      removeRemoteTask(remoteName),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Gets the currently available remotes, setting the optional verbose argument to true includes additional
 * detail on the remotes themselves.
 */
Git.prototype.getRemotes = function (verbose, then) {
   return this._runTask(
      getRemotesTask(verbose === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git remote` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.remote = function (options, then) {
   return this._runTask(
      remoteTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git tag` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.tag = function (options, then) {
   const command = getTrailingOptions(arguments);

   if (command[0] !== 'tag') {
      command.unshift('tag');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Updates repository server info
 *
 * @param {Function} [then]
 */
Git.prototype.updateServerInfo = function (then) {
   return this._runTask(
      straightThroughStringTask(['update-server-info']),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
 * default configured remote spec.
 *
 * @param {string} [remote]
 * @param {Function} [then]
 */
Git.prototype.pushTags = function (remote, then) {
   const task = pushTagsTask({remote: filterType(remote, filterString)}, getTrailingOptions(arguments));

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Removes the named files from source control.
 */
Git.prototype.rm = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '-f', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
 * completely remove the files, use `rm`.
 *
 * @param {string|string[]} files
 */
Git.prototype.rmKeepLocal = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '--cached', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
 * size, and type.
 *
 * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.catFile = function (options, then) {
   return this._catFile('utf-8', arguments);
};

Git.prototype.binaryCatFile = function () {
   return this._catFile('buffer', arguments);
};

Git.prototype._catFile = function (format, args) {
   var handler = trailingFunctionArgument(args);
   var command = ['cat-file'];
   var options = args[0];

   if (typeof options === 'string') {
      return this._runTask(
         configurationErrorTask('Git.catFile: options must be supplied as an array of strings'),
         handler,
      );
   }

   if (Array.isArray(options)) {
      command.push.apply(command, options);
   }

   const task = format === 'buffer'
      ? straightThroughBufferTask(command)
      : straightThroughStringTask(command);

   return this._runTask(task, handler);
};

Git.prototype.diff = function (options, then) {
   const command = ['diff', ...getTrailingOptions(arguments)];

   if (typeof options === 'string') {
      command.splice(1, 0, options);
      this._logger.warn('Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.diffSummary = function () {
   return this._runTask(
      diffSummaryTask(getTrailingOptions(arguments, 1)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.applyPatch = function (patches) {
   const task = !filterStringOrStringArray(patches)
      ? configurationErrorTask(`git.applyPatch requires one or more string patches as the first argument`)
      : applyPatchTask(asArray(patches), getTrailingOptions([].slice.call(arguments, 1)));

   return this._runTask(
      task,
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.revparse = function () {
   const commands = ['rev-parse', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands, true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Show various types of objects, for example the file at a certain commit
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.show = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['show', ...getTrailingOptions(arguments, 1)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 */
Git.prototype.clean = function (mode, options, then) {
   const usingCleanOptionsArray = isCleanOptionsArray(mode);
   const cleanMode = usingCleanOptionsArray && mode.join('') || filterType(mode, filterString) || '';
   const customArgs = getTrailingOptions([].slice.call(arguments, usingCleanOptionsArray ? 1 : 0));

   return this._runTask(
      cleanWithOptionsTask(cleanMode, customArgs),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.exec = function (then) {
   const task = {
      commands: [],
      format: 'utf-8',
      parser () {
         if (typeof then === 'function') {
            then();
         }
      }
   };

   return this._runTask(task);
};

/**
 * Clears the queue of pending commands and returns the wrapper instance for chaining.
 *
 * @returns {Git}
 */
Git.prototype.clearQueue = function () {
   // TODO:
   // this._executor.clear();
   return this;
};

/**
 * Check if a pathname or pathnames are excluded by .gitignore
 *
 * @param {string|string[]} pathnames
 * @param {Function} [then]
 */
Git.prototype.checkIgnore = function (pathnames, then) {
   return this._runTask(
      checkIgnoreTask(asArray((filterType(pathnames, filterStringOrStringArray, [])))),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.checkIsRepo = function (checkType, then) {
   return this._runTask(
      checkIsRepoTask(filterType(checkType, filterString)),
      trailingFunctionArgument(arguments),
   );
};

var git = Git;

var gitFactory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInstanceFactory = exports.gitExportFactory = exports.esModuleFactory = void 0;




/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
function esModuleFactory(defaultExport) {
    return Object.defineProperties(defaultExport, {
        __esModule: { value: true },
        default: { value: defaultExport },
    });
}
exports.esModuleFactory = esModuleFactory;
function gitExportFactory(factory, extra) {
    return Object.assign(function (...args) {
        return factory.apply(null, args);
    }, api_1.default, extra || {});
}
exports.gitExportFactory = gitExportFactory;
function gitInstanceFactory(baseDir, options) {
    const plugins$1 = new plugins.PluginStore();
    const config = utils.createInstanceConfig(baseDir && (typeof baseDir === 'string' ? { baseDir } : baseDir) || {}, options);
    if (!utils.folderExists(config.baseDir)) {
        throw new api_1.default.GitConstructError(config, `Cannot use simple-git on a directory that does not exist`);
    }
    if (Array.isArray(config.config)) {
        plugins$1.add(plugins.commandConfigPrefixingPlugin(config.config));
    }
    plugins$1.add(plugins.completionDetectionPlugin(config.completion));
    config.progress && plugins$1.add(plugins.progressMonitorPlugin(config.progress));
    config.timeout && plugins$1.add(plugins.timeoutPlugin(config.timeout));
    config.spawnOptions && plugins$1.add(plugins.spawnOptionsPlugin(config.spawnOptions));
    plugins$1.add(plugins.errorDetectionPlugin(plugins.errorDetectionHandler(true)));
    config.errors && plugins$1.add(plugins.errorDetectionPlugin(config.errors));
    return new git(config, plugins$1);
}
exports.gitInstanceFactory = gitInstanceFactory;

});

var promiseWrapped = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitP = void 0;


const functionNamesBuilderApi = [
    'customBinary', 'env', 'outputHandler', 'silent',
];
const functionNamesPromiseApi = [
    'add',
    'addAnnotatedTag',
    'addConfig',
    'addRemote',
    'addTag',
    'applyPatch',
    'binaryCatFile',
    'branch',
    'branchLocal',
    'catFile',
    'checkIgnore',
    'checkIsRepo',
    'checkout',
    'checkoutBranch',
    'checkoutLatestTag',
    'checkoutLocalBranch',
    'clean',
    'clone',
    'commit',
    'cwd',
    'deleteLocalBranch',
    'deleteLocalBranches',
    'diff',
    'diffSummary',
    'exec',
    'fetch',
    'getRemotes',
    'init',
    'listConfig',
    'listRemote',
    'log',
    'merge',
    'mergeFromTo',
    'mirror',
    'mv',
    'pull',
    'push',
    'pushTags',
    'raw',
    'rebase',
    'remote',
    'removeRemote',
    'reset',
    'revert',
    'revparse',
    'rm',
    'rmKeepLocal',
    'show',
    'stash',
    'stashList',
    'status',
    'subModule',
    'submoduleAdd',
    'submoduleInit',
    'submoduleUpdate',
    'tag',
    'tags',
    'updateServerInfo'
];
function gitP(...args) {
    let git;
    let chain = Promise.resolve();
    try {
        git = gitFactory.gitInstanceFactory(...args);
    }
    catch (e) {
        chain = Promise.reject(e);
    }
    function builderReturn() {
        return promiseApi;
    }
    function chainReturn() {
        return chain;
    }
    const promiseApi = [...functionNamesBuilderApi, ...functionNamesPromiseApi].reduce((api, name) => {
        const isAsync = functionNamesPromiseApi.includes(name);
        const valid = isAsync ? asyncWrapper(name, git) : syncWrapper(name, git, api);
        const alternative = isAsync ? chainReturn : builderReturn;
        Object.defineProperty(api, name, {
            enumerable: false,
            configurable: false,
            value: git ? valid : alternative,
        });
        return api;
    }, {});
    return promiseApi;
    function asyncWrapper(fn, git) {
        return function (...args) {
            if (typeof args[args.length] === 'function') {
                throw new TypeError('Promise interface requires that handlers are not supplied inline, ' +
                    'trailing function not allowed in call to ' + fn);
            }
            return chain.then(function () {
                return new Promise(function (resolve, reject) {
                    const callback = (err, result) => {
                        if (err) {
                            return reject(toError(err));
                        }
                        resolve(result);
                    };
                    args.push(callback);
                    git[fn].apply(git, args);
                });
            });
        };
    }
    function syncWrapper(fn, git, api) {
        return (...args) => {
            git[fn](...args);
            return api;
        };
    }
}
exports.gitP = gitP;
function toError(error) {
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === 'string') {
        return new Error(error);
    }
    return new gitResponseError.GitResponseError(error);
}

});

const {gitP} = promiseWrapped;
const {esModuleFactory, gitInstanceFactory, gitExportFactory} = gitFactory;

var src = esModuleFactory(
   gitExportFactory(gitInstanceFactory, {gitP})
);

var GitManager = /** @class */ (function () {
    function GitManager(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
    }
    GitManager.prototype.formatCommitMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var template, status_1, numFiles, status_2, changeset_1, chunks, _i, _a, _b, action, files_1, files, moment, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        template = this.plugin.settings.commitMessage;
                        if (!template.includes("{{numFiles}}")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.status()];
                    case 1:
                        status_1 = _d.sent();
                        numFiles = status_1.changed.length;
                        template = template.replace("{{numFiles}}", String(numFiles));
                        _d.label = 2;
                    case 2:
                        if (!template.includes("{{files}}")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.status()];
                    case 3:
                        status_2 = _d.sent();
                        changeset_1 = {};
                        status_2.changed.forEach(function (value) {
                            if (value.index in changeset_1) {
                                changeset_1[value.index].push(value.path);
                            }
                            else {
                                changeset_1[value.index] = [value.path];
                            }
                        });
                        chunks = [];
                        for (_i = 0, _a = Object.entries(changeset_1); _i < _a.length; _i++) {
                            _b = _a[_i], action = _b[0], files_1 = _b[1];
                            chunks.push(action + " " + files_1.join(" "));
                        }
                        files = chunks.join(", ");
                        template = template.replace("{{files}}", files);
                        _d.label = 4;
                    case 4:
                        moment = window.moment;
                        template = template.replace("{{date}}", moment().format(this.plugin.settings.commitDateFormat));
                        if (!this.plugin.settings.listChangedFilesInMessageBody) return [3 /*break*/, 6];
                        _c = template + "\n\n" + "Affected files:" + "\n";
                        return [4 /*yield*/, this.status()];
                    case 5:
                        template = _c + (_d.sent()).staged.join("\n");
                        _d.label = 6;
                    case 6: return [2 /*return*/, template];
                }
            });
        });
    };
    return GitManager;
}());

var SimpleGit = /** @class */ (function (_super) {
    __extends(SimpleGit, _super);
    function SimpleGit(plugin) {
        var _this = _super.call(this, plugin) || this;
        var adapter = _this.app.vault.adapter;
        var path = adapter.getBasePath();
        if (_this.isGitInstalled()) {
            _this.git = src({
                baseDir: path,
                binary: _this.plugin.settings.gitPath || undefined,
            });
        }
        return _this;
    }
    SimpleGit.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, {
                                changed: status.files.map(function (e) {
                                    e.path = _this.fixFilePath(e.path);
                                    return e;
                                }),
                                staged: status.staged.map(this.fixFilePath),
                                conflicted: status.conflicted.map(this.fixFilePath),
                            }];
                }
            });
        });
    };
    //Remove wrong `"` like "My file.md"
    SimpleGit.prototype.fixFilePath = function (path) {
        path.startsWith('"') && path.endsWith('"') &&
            (path = path.substring(1, path.length - 1));
        return path;
    };
    SimpleGit.prototype.commitAll = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var _this = this;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 5];
                        this.plugin.setState(PluginState.commit);
                        _b = (_a = this.git).subModule;
                        _c = ["foreach", "--recursive"];
                        _d = "git add -A && if [ ! -z \"$(git status --porcelain)\" ]; then git commit -m \"";
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 1];
                        _e = message;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.formatCommitMessage()];
                    case 2:
                        _e = _j.sent();
                        _j.label = 3;
                    case 3: return [4 /*yield*/, _b.apply(_a, [_c.concat([_d + (_e) + "\"; fi"]), function (err) { return _this.onError(err); }])];
                    case 4:
                        _j.sent();
                        _j.label = 5;
                    case 5:
                        this.plugin.setState(PluginState.add);
                        return [4 /*yield*/, this.git.add("./*", function (err) { return _this.onError(err); })];
                    case 6:
                        _j.sent();
                        this.plugin.setState(PluginState.commit);
                        _g = (_f = this.git).commit;
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 7];
                        _h = message;
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.formatCommitMessage()];
                    case 8:
                        _h = _j.sent();
                        _j.label = 9;
                    case 9: return [4 /*yield*/, _g.apply(_f, [_h])];
                    case 10: return [2 /*return*/, (_j.sent()).summary.changes];
                }
            });
        });
    };
    SimpleGit.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.pull);
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.subModule(["update", "--remote", "--merge", "--recursive"], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.git.pull(["--no-rebase"], function (err) { return __awaiter(_this, void 0, void 0, function () {
                            var status_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3 /*break*/, 2];
                                        this.plugin.displayError("Pull failed " + err.message);
                                        return [4 /*yield*/, this.git.status()];
                                    case 1:
                                        status_1 = _a.sent();
                                        if (status_1.conflicted.length > 0) {
                                            this.plugin.handleConflict(status_1.conflicted);
                                        }
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        pullResult = _a.sent();
                        return [2 /*return*/, pullResult.files.length];
                }
            });
        });
    };
    SimpleGit.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, trackingBranch, currentBranch, remoteChangedFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status = _a.sent();
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 2:
                        remoteChangedFiles = (_a.sent()).changed;
                        this.plugin.setState(PluginState.push);
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.env(__assign(__assign({}, process.env), { "OBSIDIAN_GIT": 1 })).subModule(["foreach", "--recursive", "tracking=$(git for-each-ref --format='%(upstream:short)' \"$(git symbolic-ref -q HEAD)\"); echo $tracking; if [ ! -z \"$(git diff --shortstat $tracking)\" ]; then git push; fi"], function (err) { return _this.onError(err); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.git.env(__assign(__assign({}, process.env), { "OBSIDIAN_GIT": 1 })).push(function (err) { return _this.onError(err); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, remoteChangedFiles];
                }
            });
        });
    };
    SimpleGit.prototype.canPush = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, trackingBranch, currentBranch, remoteChangedFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // allow pushing in submodules even if the root has no changes.
                        if (this.plugin.settings.updateSubmodules === true) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.git.status(function (err) { return _this.onError(err); })];
                    case 1:
                        status = _a.sent();
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 2:
                        remoteChangedFiles = (_a.sent()).changed;
                        return [2 /*return*/, remoteChangedFiles !== 0];
                }
            });
        });
    };
    SimpleGit.prototype.checkRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGitInstalled()) {
                            return [2 /*return*/, "missing-git"];
                        }
                        return [4 /*yield*/, this.git.checkIsRepo()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, "missing-repo"];
                        }
                        return [2 /*return*/, "valid"];
                }
            });
        });
    };
    SimpleGit.prototype.branchInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, branches;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.status(function (err) { return _this.onError(err); })];
                    case 1:
                        status = _a.sent();
                        return [4 /*yield*/, this.git.branch(["--no-color"], function (err) { return _this.onError(err); })];
                    case 2:
                        branches = _a.sent();
                        return [2 /*return*/, {
                                current: status.current,
                                tracking: status.tracking,
                                branches: branches.all,
                            }];
                }
            });
        });
    };
    SimpleGit.prototype.checkout = function (branch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.checkout(branch, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.init(false, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.clone = function (url, dir) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.clone(url, path__namespace.join(this.app.vault.adapter.getBasePath(), dir), [], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.setConfig = function (path, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.addConfig(path, value, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.getConfig = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.listConfig(function (err) { return _this.onError(err); })];
                    case 1:
                        config = _a.sent();
                        return [2 /*return*/, config.all[path]];
                }
            });
        });
    };
    SimpleGit.prototype.fetch = function (remote) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.fetch(remote != undefined ? [remote] : [], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.setRemote = function (name, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRemotes()];
                    case 1:
                        if (!(_a.sent()).includes(name)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.git.remote(["set-url", name, url], function (err) { return _this.onError(err); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.git.remote(["add", name, url], function (err) { return _this.onError(err); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.getRemoteBranches = function (remote) {
        return __awaiter(this, void 0, void 0, function () {
            var res, list, item;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.branch(["-r", "--list", remote + "*"], function (err) { return _this.onError(err); })];
                    case 1:
                        res = _a.sent();
                        list = [];
                        for (item in res.branches) {
                            list.push(res.branches[item].name);
                        }
                        return [2 /*return*/, list];
                }
            });
        });
    };
    SimpleGit.prototype.getRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.remote([], function (err) { return _this.onError(err); })];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            return [2 /*return*/, res.trim().split("\n")];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                }
            });
        });
    };
    SimpleGit.prototype.removeRemote = function (remoteName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.removeRemote(remoteName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.updateUpstreamBranch = function (remoteBranch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.push(__spreadArray(["--set-upstream"], remoteBranch.split("/")), function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.updateGitPath = function (gitPath) {
        return this.git.customBinary(gitPath);
    };
    SimpleGit.prototype.isGitInstalled = function () {
        // https://github.com/steveukx/git-js/issues/402
        var command = child_process_1.spawnSync('git', ['--version'], {
            stdio: 'ignore'
        });
        if (command.error) {
            console.error(command.error);
            return false;
        }
        return true;
    };
    SimpleGit.prototype.onError = function (error) {
        if (error) {
            this.plugin.displayError(error.message);
        }
    };
    return SimpleGit;
}(GitManager));

var DEFAULT_SETTINGS = {
    commitMessage: "vault backup: {{date}}",
    commitDateFormat: "YYYY-MM-DD HH:mm:ss",
    autoSaveInterval: 0,
    autoPullInterval: 0,
    autoPullOnBoot: false,
    disablePush: false,
    pullBeforePush: true,
    disablePopups: false,
    listChangedFilesInMessageBody: false,
    showStatusBar: true,
    updateSubmodules: false,
    gitPath: ""
};
var ObsidianGit = /** @class */ (function (_super) {
    __extends(ObsidianGit, _super);
    function ObsidianGit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gitReady = false;
        _this.promiseQueue = new PromiseQueue();
        _this.conflictOutputFile = "conflict-files-obsidian-git.md";
        return _this;
    }
    ObsidianGit.prototype.setState = function (state) {
        var _a;
        this.state = state;
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.display();
    };
    ObsidianGit.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading ' + this.manifest.name + " plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new ObsidianGitSettingsTab(this.app, this));
                        this.addCommand({
                            id: "pull",
                            name: "Pull from remote repository",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); }); },
                        });
                        this.addCommand({
                            id: "push",
                            name: "Create backup",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.createBackup(false); }); }
                        });
                        this.addCommand({
                            id: "edit-remotes",
                            name: "Edit remotes",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.editRemotes()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "remove-remote",
                            name: "Remove remote",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.removeRemote()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "init-repo",
                            name: "Initialize a new repo",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.createNewRepo()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "clone-repo",
                            name: "Clone an existing remote repo",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.cloneNewRepo()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "commit-push-specified-message",
                            name: "Create backup with specified message",
                            callback: function () { return new CustomMessageModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "list-changed-files",
                            name: "List changed files",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                var status;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.gitManager.status()];
                                        case 1:
                                            status = _a.sent();
                                            this.setState(PluginState.idle);
                                            new ChangedFilesModal(this, status.changed).open();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        if (this.settings.showStatusBar) {
                            statusBarEl = this.addStatusBarItem();
                            this.statusBar = new StatusBar(statusBarEl, this);
                            this.registerInterval(window.setInterval(function () { return _this.statusBar.display(); }, 1000));
                        }
                        this.app.workspace.onLayoutReady(function () { return _this.init(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.clearTimeout(this.timeoutIDBackup);
                window.clearTimeout(this.timeoutIDPull);
                console.log('unloading ' + this.manifest.name + " plugin");
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveLastAuto = function (date, mode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (mode === "backup") {
                    window.localStorage.setItem(this.manifest.id + ":lastAutoBackup", date.toString());
                }
                else if (mode === "pull") {
                    window.localStorage.setItem(this.manifest.id + ":lastAutoPull", date.toString());
                }
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadLastAuto = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, {
                        "backup": new Date((_a = window.localStorage.getItem(this.manifest.id + ":lastAutoBackup")) !== null && _a !== void 0 ? _a : ""),
                        "pull": new Date((_b = window.localStorage.getItem(this.manifest.id + ":lastAutoPull")) !== null && _b !== void 0 ? _b : "")
                    }];
            });
        });
    };
    ObsidianGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, lastAutos, now, diff, now, diff, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        this.gitManager = new SimpleGit(this);
                        return [4 /*yield*/, this.gitManager.checkRequirements()];
                    case 1:
                        result = _b.sent();
                        _a = result;
                        switch (_a) {
                            case "missing-git": return [3 /*break*/, 2];
                            case "missing-repo": return [3 /*break*/, 3];
                            case "valid": return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        this.displayError("Cannot run git command");
                        return [3 /*break*/, 7];
                    case 3:
                        new obsidian.Notice("Can't find a valid git repository. Please create one via the given command.");
                        return [3 /*break*/, 7];
                    case 4:
                        this.gitReady = true;
                        this.setState(PluginState.idle);
                        if (this.settings.autoPullOnBoot) {
                            this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
                        }
                        return [4 /*yield*/, this.loadLastAuto()];
                    case 5:
                        lastAutos = _b.sent();
                        if (this.settings.autoSaveInterval > 0) {
                            now = new Date();
                            diff = this.settings.autoSaveInterval - (Math.round(((now.getTime() - lastAutos.backup.getTime()) / 1000) / 60));
                            this.startAutoBackup(diff <= 0 ? 0 : diff);
                        }
                        if (this.settings.autoPullInterval > 0) {
                            now = new Date();
                            diff = this.settings.autoPullInterval - (Math.round(((now.getTime() - lastAutos.pull.getTime()) / 1000) / 60));
                            this.startAutoPull(diff <= 0 ? 0 : diff);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("Something weird happened. The 'checkRequirements' result is " + result);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        this.displayError(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createNewRepo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gitManager.init()];
                    case 1:
                        _a.sent();
                        new obsidian.Notice("Initialized new repo");
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.cloneNewRepo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, url, dir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = new GeneralModal(this.app, [], "Enter remote URL");
                        return [4 /*yield*/, modal.open()];
                    case 1:
                        url = _a.sent();
                        if (!url) return [3 /*break*/, 4];
                        return [4 /*yield*/, new GeneralModal(this.app, [], "Enter directory for clone. It needs to be empty or not existent.").open()];
                    case 2:
                        dir = _a.sent();
                        if (!dir) return [3 /*break*/, 4];
                        dir = path__namespace.normalize(dir);
                        new obsidian.Notice("Cloning new repo into \"" + dir + "\"");
                        return [4 /*yield*/, this.gitManager.clone(url, dir)];
                    case 3:
                        _a.sent();
                        new obsidian.Notice("Cloned new repo");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retries to call `this.init()` if necessary, otherwise returns directly
     * @returns true if `this.gitManager` is ready to be used, false if not.
     */
    ObsidianGit.prototype.isAllInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.gitReady];
                }
            });
        });
    };
    ObsidianGit.prototype.pullChangesFromRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filesUpdated, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.pull()];
                    case 2:
                        filesUpdated = _a.sent();
                        if (filesUpdated > 0) {
                            this.displayMessage("Pulled new changes. " + filesUpdated + " files updated");
                        }
                        else {
                            this.displayMessage("Everything is up-to-date");
                        }
                        if (!(this.gitManager instanceof SimpleGit)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 3:
                        status_1 = _a.sent();
                        if (status_1.conflicted.length > 0) {
                            this.displayError("You have " + status_1.conflicted.length + " conflict files");
                        }
                        _a.label = 4;
                    case 4:
                        this.lastUpdate = Date.now();
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createBackup = function (fromAutoBackup, commitMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var file, status_2, changedFiles, commitedFiles, remoteBranch, pulledFilesLength, status_3, _a, pushedFiles;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_b.sent()))
                            return [2 /*return*/];
                        if (!!fromAutoBackup) return [3 /*break*/, 3];
                        file = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
                        return [4 /*yield*/, this.app.vault.delete(file)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!(this.gitManager instanceof SimpleGit)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 4:
                        status_2 = _b.sent();
                        // check for conflict files on auto backup
                        if (fromAutoBackup && status_2.conflicted.length > 0) {
                            this.setState(PluginState.idle);
                            this.displayError("Did not commit, because you have " + status_2.conflicted.length + " conflict files. Please resolve them and commit per command.");
                            this.handleConflict(status_2.conflicted);
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.gitManager.status()];
                    case 6:
                        changedFiles = (_b.sent()).changed;
                        if (!(changedFiles.length !== 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.gitManager.commitAll(commitMessage)];
                    case 7:
                        commitedFiles = _b.sent();
                        this.displayMessage("Committed " + commitedFiles + " files");
                        return [3 /*break*/, 9];
                    case 8:
                        this.displayMessage("No changes to commit");
                        _b.label = 9;
                    case 9:
                        if (!!this.settings.disablePush) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.gitManager.branchInfo()];
                    case 10:
                        if (!!(_b.sent()).tracking) return [3 /*break*/, 14];
                        new obsidian.Notice("No upstream branch is set. Please select one.");
                        return [4 /*yield*/, this.selectRemoteBranch()];
                    case 11:
                        remoteBranch = _b.sent();
                        if (!(remoteBranch == undefined)) return [3 /*break*/, 12];
                        this.displayError("Did not push. No upstream-branch is set!", 10000);
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                    case 12: return [4 /*yield*/, this.gitManager.updateUpstreamBranch(remoteBranch)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: return [4 /*yield*/, this.gitManager.canPush()];
                    case 15:
                        if (!_b.sent()) return [3 /*break*/, 23];
                        if (!this.settings.pullBeforePush) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.gitManager.pull()];
                    case 16:
                        pulledFilesLength = _b.sent();
                        if (pulledFilesLength > 0) {
                            this.displayMessage("Pulled " + pulledFilesLength + " files from remote");
                        }
                        _b.label = 17;
                    case 17:
                        _a = this.gitManager instanceof SimpleGit;
                        if (!_a) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 18:
                        _a = (status_3 = _b.sent()).conflicted.length > 0;
                        _b.label = 19;
                    case 19:
                        if (!_a) return [3 /*break*/, 20];
                        this.displayError("Cannot push. You have " + status_3.conflicted.length + " conflict files");
                        this.handleConflict(status_3.conflicted);
                        return [2 /*return*/];
                    case 20: return [4 /*yield*/, this.gitManager.push()];
                    case 21:
                        pushedFiles = _b.sent();
                        this.lastUpdate = Date.now();
                        this.displayMessage("Pushed " + pushedFiles + " files to remote");
                        _b.label = 22;
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        this.displayMessage("No changes to push");
                        _b.label = 24;
                    case 24:
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.startAutoBackup = function (minutes) {
        var _this = this;
        this.timeoutIDBackup = window.setTimeout(function () {
            _this.promiseQueue.addTask(function () { return _this.createBackup(true); });
            _this.saveLastAuto(new Date(), "backup");
            _this.saveSettings();
            _this.startAutoBackup();
        }, (minutes !== null && minutes !== void 0 ? minutes : this.settings.autoSaveInterval) * 60000);
    };
    ObsidianGit.prototype.startAutoPull = function (minutes) {
        var _this = this;
        this.timeoutIDPull = window.setTimeout(function () {
            _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
            _this.saveLastAuto(new Date(), "pull");
            _this.saveSettings();
            _this.startAutoPull();
        }, (minutes !== null && minutes !== void 0 ? minutes : this.settings.autoPullInterval) * 60000);
    };
    ObsidianGit.prototype.clearAutoBackup = function () {
        if (this.timeoutIDBackup) {
            window.clearTimeout(this.timeoutIDBackup);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.clearAutoPull = function () {
        if (this.timeoutIDPull) {
            window.clearTimeout(this.timeoutIDPull);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.handleConflict = function (conflicted) {
        return __awaiter(this, void 0, void 0, function () {
            var lines;
            var _this = this;
            return __generator(this, function (_a) {
                this.setState(PluginState.conflicted);
                lines = __spreadArray([
                    "# Conflict files",
                    "Please resolve them and commit per command (This file will be deleted before the commit)."
                ], conflicted.map(function (e) {
                    var file = _this.app.vault.getAbstractFileByPath(e);
                    if (file instanceof obsidian.TFile) {
                        var link = _this.app.metadataCache.fileToLinktext(file, "/");
                        return "- [[" + link + "]]";
                    }
                    else {
                        return "- Not a file: " + e;
                    }
                }));
                this.writeAndOpenFile(lines.join("\n"));
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.editRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, nameModal, remoteName, urlModal, remoteURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 2:
                        remotes = _a.sent();
                        nameModal = new GeneralModal(this.app, remotes, "Select or create a new remote by typing its name and selecting it");
                        return [4 /*yield*/, nameModal.open()];
                    case 3:
                        remoteName = _a.sent();
                        if (!remoteName) return [3 /*break*/, 6];
                        urlModal = new GeneralModal(this.app, [], "Enter the remote URL");
                        return [4 /*yield*/, urlModal.open()];
                    case 4:
                        remoteURL = _a.sent();
                        return [4 /*yield*/, this.gitManager.setRemote(remoteName, remoteURL)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, remoteName];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.selectRemoteBranch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, selectedRemote, nameModal, remoteName, _a, branches, branchModal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 1:
                        remotes = _b.sent();
                        if (!(remotes.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.editRemotes()];
                    case 2:
                        selectedRemote = _b.sent();
                        if (!(selectedRemote == undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 3:
                        remotes = _b.sent();
                        _b.label = 4;
                    case 4:
                        nameModal = new GeneralModal(this.app, remotes, "Select or create a new remote by typing its name and selecting it");
                        if (!(selectedRemote !== null && selectedRemote !== void 0)) return [3 /*break*/, 5];
                        _a = selectedRemote;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, nameModal.open()];
                    case 6:
                        _a = _b.sent();
                        _b.label = 7;
                    case 7:
                        remoteName = _a;
                        if (!remoteName) return [3 /*break*/, 11];
                        this.displayMessage("Fetching remote branches");
                        return [4 /*yield*/, this.gitManager.fetch(remoteName)];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.gitManager.getRemoteBranches(remoteName)];
                    case 9:
                        branches = _b.sent();
                        branchModal = new GeneralModal(this.app, branches, "Select or create a new remote branch by typing its name and selecting it");
                        return [4 /*yield*/, branchModal.open()];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.removeRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, nameModal, remoteName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 2:
                        remotes = _a.sent();
                        nameModal = new GeneralModal(this.app, remotes, "Select a remote");
                        return [4 /*yield*/, nameModal.open()];
                    case 3:
                        remoteName = _a.sent();
                        if (remoteName) {
                            this.gitManager.removeRemote(remoteName);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.writeAndOpenFile = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.write(this.conflictOutputFile, text)];
                    case 1:
                        _a.sent();
                        fileIsAlreadyOpened = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            if (leaf.getDisplayText() != "" && _this.conflictOutputFile.startsWith(leaf.getDisplayText())) {
                                fileIsAlreadyOpened = true;
                            }
                        });
                        if (!fileIsAlreadyOpened) {
                            this.app.workspace.openLinkText(this.conflictOutputFile, "/", true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: displaying / formatting messages
    ObsidianGit.prototype.displayMessage = function (message, timeout) {
        var _a;
        if (timeout === void 0) { timeout = 4 * 1000; }
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.displayMessage(message.toLowerCase(), timeout);
        if (!this.settings.disablePopups) {
            new obsidian.Notice(message);
        }
        console.log("git obsidian message: " + message);
    };
    ObsidianGit.prototype.displayError = function (message, timeout) {
        var _a;
        if (timeout === void 0) { timeout = 0; }
        // Some errors might not be of type string
        message = message.toString();
        new obsidian.Notice(message);
        console.log("git obsidian error: " + message);
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.displayMessage(message.toLowerCase(), timeout);
    };
    return ObsidianGit;
}(obsidian.Plugin));

module.exports = ObsidianGit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tb2RhbHMvY2hhbmdlZEZpbGVzTW9kYWwudHMiLCJzcmMvbW9kYWxzL2N1c3RvbU1lc3NhZ2VNb2RhbC50cyIsInNyYy9wcm9taXNlUXVldWUudHMiLCJzcmMvc2V0dGluZ3MudHMiLCJzcmMvdHlwZXMudHMiLCJzcmMvc3RhdHVzQmFyLnRzIiwic3JjL21vZGFscy9nZW5lcmFsTW9kYWwudHMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtY29uc3RydWN0LWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9lcnJvcnMvZ2l0LXBsdWdpbi1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9Aa3dzaXRlcy9maWxlLWV4aXN0cy9kaXN0L3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9Aa3dzaXRlcy9maWxlLWV4aXN0cy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy91dGlsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9hcmd1bWVudC1maWx0ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9leGl0LWNvZGVzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9naXQtb3V0cHV0LXN0cmVhbXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2xpbmUtcGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9zaW1wbGUtZ2l0LW9wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3Rhc2stb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvdGFzay1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pcy1yZXBvLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ2xlYW5TdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy90YXNrLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jbGVhbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NvbmZpZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcmVzZXQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2FwaS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9jb21wbGV0aW9uLWRldGVjdGlvbi5wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9wbHVnaW4tc3RvcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvcHJvZ3Jlc3MtbW9uaXRvci1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc2ltcGxlLWdpdC1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc3Bhd24tb3B0aW9ucy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvdGltb3V0LXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZ2l0LWxvZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy90YXNrcy1wZW5kaW5nLXF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL2dpdC1leGVjdXRvci1jaGFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9naXQtZXhlY3V0b3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2stY2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoYW5nZS13b3JraW5nLWRpcmVjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaGFzaC1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0RpZmZTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWRpZmYtc3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9sb2cuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9QdWxsU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1yZW1vdGUtb2JqZWN0cy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1yZW1vdGUtbWVzc2FnZXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcHVsbC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1tZXJnZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvbWVyZ2UuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcHVzaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcHVzaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0ZpbGVTdGF0dXNTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvU3RhdHVzU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3Mvc3RhdHVzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9zaW1wbGUtZ2l0LWFwaS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9zY2hlZHVsZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2JyYW5jaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NoZWNrSWdub3JlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pZ25vcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWNvbW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29tbWl0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWZldGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9mZXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcmVtb3RlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGFzaC1saXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdWItbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvVGFnTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvdGFnLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2dpdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZ2l0LWZhY3RvcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3J1bm5lcnMvcHJvbWlzZS13cmFwcGVkLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2luZGV4LmpzIiwic3JjL2dpdE1hbmFnZXIudHMiLCJzcmMvc2ltcGxlR2l0LnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBGdXp6eVN1Z2dlc3RNb2RhbCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IE9ic2lkaWFuR2l0IGZyb20gXCJzcmMvbWFpblwiO1xuaW1wb3J0IHsgRmlsZVN0YXR1c1Jlc3VsdCB9IGZyb20gXCJzcmMvdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRGaWxlc01vZGFsIGV4dGVuZHMgRnV6enlTdWdnZXN0TW9kYWw8RmlsZVN0YXR1c1Jlc3VsdD4ge1xuICAgIHBsdWdpbjogT2JzaWRpYW5HaXQ7XG4gICAgY2hhbmdlZEZpbGVzOiBGaWxlU3RhdHVzUmVzdWx0W107XG5cbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0LCBjaGFuZ2VkRmlsZXM6IEZpbGVTdGF0dXNSZXN1bHRbXSkge1xuICAgICAgICBzdXBlcihwbHVnaW4uYXBwKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIHRoaXMuY2hhbmdlZEZpbGVzID0gY2hhbmdlZEZpbGVzO1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiTm90IHN1cHBvcnRlZCBmaWxlcyB3aWxsIGJlIG9wZW5lZCBieSBkZWZhdWx0IGFwcCFcIik7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogRmlsZVN0YXR1c1Jlc3VsdFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEZpbGVzO1xuICAgIH1cblxuICAgIGdldEl0ZW1UZXh0KGl0ZW06IEZpbGVTdGF0dXNSZXN1bHQpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS5pbmRleCA9PSBcIj9cIiAmJiBpdGVtLndvcmtpbmdfZGlyID09IFwiP1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gYFVudHJhY2tlZCB8ICR7aXRlbS5wYXRofWA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd29ya2luZ19kaXIgPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSBcIlwiO1xuXG4gICAgICAgIGlmIChpdGVtLndvcmtpbmdfZGlyICE9IFwiIFwiKSB3b3JraW5nX2RpciA9IGBXb3JraW5nIGRpcjogJHtpdGVtLndvcmtpbmdfZGlyfSBgO1xuICAgICAgICBpZiAoaXRlbS5pbmRleCAhPSBcIiBcIikgaW5kZXggPSBgSW5kZXg6ICR7aXRlbS5pbmRleH1gO1xuXG4gICAgICAgIHJldHVybiBgJHt3b3JraW5nX2Rpcn0ke2luZGV4fSB8ICR7aXRlbS5wYXRofWA7XG4gICAgfVxuXG4gICAgb25DaG9vc2VJdGVtKGl0ZW06IEZpbGVTdGF0dXNSZXN1bHQsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChpdGVtLnBhdGgsIFwiXCIpID09IG51bGwpIHtcbiAgICAgICAgICAgICh0aGlzLmFwcCBhcyBhbnkpLm9wZW5XaXRoRGVmYXVsdEFwcChpdGVtLnBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCBcIi9cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgT2JzaWRpYW5HaXQgZnJvbSBcInNyYy9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21NZXNzYWdlTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8c3RyaW5nPiB7XG4gICAgcGx1Z2luOiBPYnNpZGlhbkdpdDtcblxuICAgIGNvbnN0cnVjdG9yKHBsdWdpbjogT2JzaWRpYW5HaXQpIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLmFwcCk7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiVHlwZSB5b3VyIG1lc3NhZ2UgYW5kIHNlbGVjdCBvcHRpb25hbCB0aGUgdmVyc2lvbiB3aXRoIHRoZSBhZGRlZCBkYXRlLlwiKTtcbiAgICB9XG5cblxuICAgIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSAod2luZG93IGFzIGFueSkubW9tZW50KCkuZm9ybWF0KHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpO1xuICAgICAgICBpZiAocXVlcnkgPT0gXCJcIikgcXVlcnkgPSBcIi4uLlwiO1xuICAgICAgICByZXR1cm4gW3F1ZXJ5LCBgJHtkYXRlfTogJHtxdWVyeX1gLCBgJHtxdWVyeX06ICR7ZGF0ZX1gXTtcbiAgICB9XG5cbiAgICByZW5kZXJTdWdnZXN0aW9uKHZhbHVlOiBzdHJpbmcsIGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBlbC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNob29zZVN1Z2dlc3Rpb24oaXRlbTogc3RyaW5nLCBfOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsdWdpbi5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLnBsdWdpbi5jcmVhdGVCYWNrdXAoZmFsc2UsIGl0ZW0pKTtcbiAgICB9XG5cbn0iLCJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUXVldWUge1xuICAgIHRhc2tzOiAoKCkgPT4gUHJvbWlzZTxhbnk+KVtdID0gW107XG5cbiAgICBhZGRUYXNrKHRhc2s6ICgpID0+IFByb21pc2U8YW55Pikge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUYXNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlVGFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50YXNrc1swXSgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRhc2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5vdGljZSwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IE9ic2lkaWFuR2l0IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGNsYXNzIE9ic2lkaWFuR2l0U2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xuICAgICAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcGx1Z2luOiBPYnNpZGlhbkdpdCA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkdpdCBCYWNrdXAgc2V0dGluZ3NcIiB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiVmF1bHQgYmFja3VwIGludGVydmFsIChtaW51dGVzKVwiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJDb21taXQgYW5kIHB1c2ggY2hhbmdlcyBldmVyeSBYIG1pbnV0ZXMuIFRvIGRpc2FibGUgYXV0b21hdGljIGJhY2t1cCwgc3BlY2lmeSBuZWdhdGl2ZSB2YWx1ZSBvciB6ZXJvIChkZWZhdWx0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcocGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwpKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmNsZWFyQXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc3RhcnRBdXRvQmFja3VwKHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBdXRvbWF0aWMgYmFja3VwIGVuYWJsZWQhIEV2ZXJ5ICR7cGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWx9IG1pbnV0ZXMuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnRpbWVvdXRJREJhY2t1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvQmFja3VwKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJBdXRvbWF0aWMgYmFja3VwIGRpc2FibGVkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJQbGVhc2Ugc3BlY2lmeSBhIHZhbGlkIG51bWJlci5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQXV0byBwdWxsIGludGVydmFsIChtaW51dGVzKVwiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJQdWxsIGNoYW5nZXMgZXZlcnkgWCBtaW51dGVzLiBUbyBkaXNhYmxlIGF1dG9tYXRpYyBwdWxsLCBzcGVjaWZ5IG5lZ2F0aXZlIHZhbHVlIG9yIHplcm8gKGRlZmF1bHQpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKFN0cmluZyhwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCkpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvUHVsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc3RhcnRBdXRvUHVsbChwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXV0b21hdGljIHB1bGwgZW5hYmxlZCEgRXZlcnkgJHtwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4udGltZW91dElEUHVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvUHVsbCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQXV0b21hdGljIHB1bGwgZGlzYWJsZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkNvbW1pdCBtZXNzYWdlXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIlNwZWNpZnkgY3VzdG9tIGNvbW1pdCBtZXNzYWdlLiBBdmFpbGFibGUgcGxhY2Vob2xkZXJzOiB7e2RhdGV9fVwiICtcbiAgICAgICAgICAgICAgICBcIiAoc2VlIGJlbG93KSBhbmQge3tudW1GaWxlc319IChudW1iZXIgb2YgY2hhbmdlZCBmaWxlcyBpbiB0aGUgY29tbWl0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInZhdWx0IGJhY2t1cFwiKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwie3tkYXRlfX0gcGxhY2Vob2xkZXIgZm9ybWF0XCIpXG4gICAgICAgICAgICAuc2V0RGVzYygnU3BlY2lmeSBjdXN0b20gZGF0ZSBmb3JtYXQuIEUuZy4gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCInKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIocGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlByZXZpZXcgY29tbWl0IG1lc3NhZ2VcIilcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ1dHRvbikgPT5cbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QnV0dG9uVGV4dChcIlByZXZpZXdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21taXRNZXNzYWdlUHJldmlldyA9IGF3YWl0IHBsdWdpbi5naXRNYW5hZ2VyLmZvcm1hdENvbW1pdE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgJHtjb21taXRNZXNzYWdlUHJldmlld31gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiTGlzdCBmaWxlbmFtZXMgYWZmZWN0ZWQgYnkgY29tbWl0IGluIHRoZSBjb21taXQgYm9keVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5KVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkN1cnJlbnQgYnJhbmNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlN3aXRjaCB0byBhIGRpZmZlcmVudCBicmFuY2hcIilcbiAgICAgICAgICAgIC5hZGREcm9wZG93bihhc3luYyAoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuY2hJbmZvID0gYXdhaXQgcGx1Z2luLmdpdE1hbmFnZXIuYnJhbmNoSW5mbygpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnJhbmNoIG9mIGJyYW5jaEluZm8uYnJhbmNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGJyYW5jaCwgYnJhbmNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uc2V0VmFsdWUoYnJhbmNoSW5mby5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5vbkNoYW5nZShhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBsdWdpbi5naXRNYW5hZ2VyLmNoZWNrb3V0KG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoYENoZWNrZWQgb3V0IHRvICR7b3B0aW9ufWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlB1bGwgdXBkYXRlcyBvbiBzdGFydHVwXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkF1dG9tYXRpY2FsbHkgcHVsbCB1cGRhdGVzIHdoZW4gT2JzaWRpYW4gc3RhcnRzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxPbkJvb3QpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlzYWJsZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkRvIG5vdCBwdXNoIGNoYW5nZXMgdG8gdGhlIHJlbW90ZSByZXBvc2l0b3J5XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVB1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUHVzaCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHVsbCBjaGFuZ2VzIGJlZm9yZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkNvbW1pdCAtPiBwdWxsIC0+IHB1c2ggKE9ubHkgaWYgcHVzaGluZyBpcyBlbmFibGVkKVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnB1bGxCZWZvcmVQdXNoKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MucHVsbEJlZm9yZVB1c2ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlVwZGF0ZSBzdWJtb2R1bGVzXCIpXG4gICAgICAgICAgICAuc2V0RGVzYygnXCJDcmVhdGUgYmFja3VwXCIgYW5kIFwicHVsbFwiIHRha2VzIGNhcmUgb2Ygc3VibW9kdWxlcy4gTWlzc2luZyBmZWF0dXJlczogQ29uZmxpY3RlZCBmaWxlcywgY291bnQgb2YgcHVsbGVkL3B1c2hlZC9jb21taXR0ZWQgZmlsZXMuIFRyYWNraW5nIGJyYW5jaCBuZWVkcyB0byBiZSBzZXQgZm9yIGVhY2ggc3VibW9kdWxlJylcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy51cGRhdGVTdWJtb2R1bGVzKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MudXBkYXRlU3VibW9kdWxlcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlzYWJsZSBub3RpZmljYXRpb25zXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIkRpc2FibGUgbm90aWZpY2F0aW9ucyBmb3IgZ2l0IG9wZXJhdGlvbnMgdG8gbWluaW1pemUgZGlzdHJhY3Rpb24gKHJlZmVyIHRvIHN0YXR1cyBiYXIgZm9yIHVwZGF0ZXMpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUG9wdXBzKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVBvcHVwcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiU2hvdyBzdGF0dXMgYmFyXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIk9ic2lkaWFuIG11c3QgYmUgcmVzdGFydGVkIGZvciB0aGUgY2hhbmdlcyB0byB0YWtlIGFmZmVjdFwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dTdGF0dXNCYXIpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93U3RhdHVzQmFyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJDdXN0b20gR2l0IGJpbmFyeSBwYXRoXCIpXG4gICAgICAgICAgICAuYWRkVGV4dCgoY2IpID0+IHtcbiAgICAgICAgICAgICAgICBjYi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZ2l0UGF0aCk7XG4gICAgICAgICAgICAgICAgY2Iuc2V0UGxhY2Vob2xkZXIoXCJnaXRcIik7XG4gICAgICAgICAgICAgICAgY2Iub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5naXRQYXRoID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5naXRNYW5hZ2VyLnVwZGF0ZUdpdFBhdGgodmFsdWUgfHwgXCJnaXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIE9ic2lkaWFuR2l0U2V0dGluZ3Mge1xuICAgIGNvbW1pdE1lc3NhZ2U6IHN0cmluZztcbiAgICBjb21taXREYXRlRm9ybWF0OiBzdHJpbmc7XG4gICAgYXV0b1NhdmVJbnRlcnZhbDogbnVtYmVyO1xuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBhdXRvUHVsbE9uQm9vdDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUHVzaDogYm9vbGVhbjtcbiAgICBwdWxsQmVmb3JlUHVzaDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUG9wdXBzOiBib29sZWFuO1xuICAgIGxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5OiBib29sZWFuO1xuICAgIHN0YW5kYWxvbmVNb2RlOiBib29sZWFuO1xuICAgIHByb3h5VVJMOiBzdHJpbmc7XG4gICAgc2hvd1N0YXR1c0JhcjogYm9vbGVhbjtcbiAgICBsYXN0QXV0b0JhY2tVcDogc3RyaW5nO1xuICAgIGxhc3RBdXRvUHVsbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhvciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1cyB7XG4gICAgY2hhbmdlZDogRmlsZVN0YXR1c1Jlc3VsdFtdO1xuICAgIHN0YWdlZDogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTdGF0dXNSZXN1bHQge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBpbmRleDogc3RyaW5nO1xuICAgIHdvcmtpbmdfZGlyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERpZmZSZXN1bHQge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICB0eXBlOiBcImVxdWFsXCIgfCBcIm1vZGlmeVwiIHwgXCJhZGRcIiB8IFwicmVtb3ZlXCI7XG59XG5cbmV4cG9ydCBlbnVtIFBsdWdpblN0YXRlIHtcbiAgICBpZGxlLFxuICAgIHN0YXR1cyxcbiAgICBwdWxsLFxuICAgIGFkZCxcbiAgICBjb21taXQsXG4gICAgcHVzaCxcbiAgICBjb25mbGljdGVkLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaEluZm8ge1xuICAgIGN1cnJlbnQ6IHN0cmluZztcbiAgICB0cmFja2luZzogc3RyaW5nO1xuICAgIGJyYW5jaGVzOiBzdHJpbmdbXTtcbn0iLCJpbXBvcnQgT2JzaWRpYW5HaXQgZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgU3RhdHVzQmFyTWVzc2FnZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciB7XG4gICAgcHVibGljIG1lc3NhZ2VzOiBTdGF0dXNCYXJNZXNzYWdlW10gPSBbXTtcbiAgICBwdWJsaWMgY3VycmVudE1lc3NhZ2U6IFN0YXR1c0Jhck1lc3NhZ2U7XG4gICAgcHVibGljIGxhc3RNZXNzYWdlVGltZXN0YW1wOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHN0YXR1c0JhckVsOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHBsdWdpbjogT2JzaWRpYW5HaXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQsIHBsdWdpbjogT2JzaWRpYW5HaXQpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbCA9IHN0YXR1c0JhckVsO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBnaXQ6ICR7bWVzc2FnZS5zbGljZSgwLCAxMDApfWAsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgIXRoaXMuY3VycmVudE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQodGhpcy5jdXJyZW50TWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1lc3NhZ2VUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VBZ2UgPSBEYXRlLm5vdygpIC0gdGhpcy5sYXN0TWVzc2FnZVRpbWVzdGFtcDtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlQWdlID49IHRoaXMuY3VycmVudE1lc3NhZ2UudGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdE1lc3NhZ2VUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcGxheVN0YXRlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGx1Z2luLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmlkbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RnJvbU5vdyh0aGlzLnBsdWdpbi5sYXN0VXBkYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuc3RhdHVzOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogY2hlY2tpbmcgcmVwbyBzdGF0dXMuLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmFkZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGFkZGluZyBmaWxlcyB0byByZXBvLi4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5jb21taXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBjb21taXR0aW5nIGNoYW5nZXMuLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnB1c2g6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBwdXNoaW5nIGNoYW5nZXMuLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnB1bGw6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBwdWxsaW5nIGNoYW5nZXMuLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbmZsaWN0ZWQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiB5b3UgaGF2ZSBjb25mbGljdCBmaWxlcy4uLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBmYWlsZWQgb24gaW5pdGlhbGl6YXRpb24hXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwbGF5RnJvbU5vdyh0aW1lc3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGltZXN0YW1wKSB7XG4gICAgICAgICAgICBsZXQgbW9tZW50ID0gKHdpbmRvdyBhcyBhbnkpLm1vbWVudDtcbiAgICAgICAgICAgIGxldCBmcm9tTm93ID0gbW9tZW50KHRpbWVzdGFtcCkuZnJvbU5vdygpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBnaXQ6IGxhc3QgdXBkYXRlICR7ZnJvbU5vd31gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgZ2l0OiByZWFkeWApO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEFwcCwgU3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmV4cG9ydCBjbGFzcyBHZW5lcmFsTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8c3RyaW5nPiB7XG4gICAgbGlzdDogc3RyaW5nW107XG4gICAgcmVzb2x2ZTogKCh2YWx1ZTogc3RyaW5nIHwgUHJvbWlzZUxpa2U8c3RyaW5nPikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHJlbW90ZXM6IHN0cmluZ1tdLCBwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgICAgIHRoaXMubGlzdCA9IHJlbW90ZXM7XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIocGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIG9wZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdFN1Z2dlc3Rpb24odmFsdWU6IHN0cmluZywgZXZ0OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZXNvbHZlKSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICBzdXBlci5zZWxlY3RTdWdnZXN0aW9uKHZhbHVlLCBldnQpO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc29sdmUpIHRoaXMucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbcXVlcnkubGVuZ3RoID4gMCA/IHF1ZXJ5IDogXCIuLi5cIiwgLi4udGhpcy5saXN0XTtcbiAgICB9XG5cbiAgICByZW5kZXJTdWdnZXN0aW9uKHZhbHVlOiBzdHJpbmcsIGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBlbC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNob29zZVN1Z2dlc3Rpb24oaXRlbTogc3RyaW5nLCBfOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkgeyB9XG5cbn0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXJyb3IgPSB2b2lkIDA7XG4vKipcbiAqIFRoZSBgR2l0RXJyb3JgIGlzIHRocm93biB3aGVuIHRoZSB1bmRlcmx5aW5nIGBnaXRgIHByb2Nlc3MgdGhyb3dzIGFcbiAqIGZhdGFsIGV4Y2VwdGlvbiAoZWcgYW4gYEVOT0VOVGAgZXhjZXB0aW9uIHdoZW4gYXR0ZW1wdGluZyB0byB1c2UgYVxuICogbm9uLXdyaXRhYmxlIGRpcmVjdG9yeSBhcyB0aGUgcm9vdCBmb3IgeW91ciByZXBvKSwgYW5kIGFjdHMgYXMgdGhlXG4gKiBiYXNlIGNsYXNzIGZvciBtb3JlIHNwZWNpZmljIGVycm9ycyB0aHJvd24gYnkgdGhlIHBhcnNpbmcgb2YgdGhlXG4gKiBnaXQgcmVzcG9uc2Ugb3IgZXJyb3JzIGluIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSB0YXNrIGFib3V0IHRvXG4gKiBiZSBydW4uXG4gKlxuICogV2hlbiBhbiBleGNlcHRpb24gaXMgdGhyb3duLCBwZW5kaW5nIHRhc2tzIGluIHRoZSBzYW1lIGluc3RhbmNlIHdpbGxcbiAqIG5vdCBiZSBleGVjdXRlZC4gVGhlIHJlY29tbWVuZGVkIHdheSB0byBydW4gYSBzZXJpZXMgb2YgdGFza3MgdGhhdFxuICogY2FuIGluZGVwZW5kZW50bHkgZmFpbCB3aXRob3V0IG5lZWRpbmcgdG8gcHJldmVudCBmdXR1cmUgdGFza3MgZnJvbVxuICogcnVubmluZyBpcyB0byBjYXRjaCB0aGVtIGluZGl2aWR1YWxseTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHsgZ2l0UCwgU2ltcGxlR2l0LCBHaXRFcnJvciwgUHVsbFJlc3VsdCB9IGZyb20gJ3NpbXBsZS1naXQnO1xuXG4gZnVuY3Rpb24gY2F0Y2hUYXNrIChlOiBHaXRFcnJvcikge1xuICAgcmV0dXJuIGUuXG4gfVxuXG4gY29uc3QgZ2l0ID0gZ2l0UChyZXBvV29ya2luZ0Rpcik7XG4gY29uc3QgcHVsbGVkOiBQdWxsUmVzdWx0IHwgR2l0RXJyb3IgPSBhd2FpdCBnaXQucHVsbCgpLmNhdGNoKGNhdGNoVGFzayk7XG4gY29uc3QgcHVzaGVkOiBzdHJpbmcgfCBHaXRFcnJvciA9IGF3YWl0IGdpdC5wdXNoVGFncygpLmNhdGNoKGNhdGNoVGFzayk7XG4gYGBgXG4gKi9cbmNsYXNzIEdpdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFcnJvciA9IEdpdEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRSZXNwb25zZUVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG4vKipcbiAqIFRoZSBgR2l0UmVzcG9uc2VFcnJvcmAgaXMgdGhlIHdyYXBwZXIgZm9yIGEgcGFyc2VkIHJlc3BvbnNlIHRoYXQgaXMgdHJlYXRlZCBhc1xuICogYSBmYXRhbCBlcnJvciwgZm9yIGV4YW1wbGUgYXR0ZW1wdGluZyBhIGBtZXJnZWAgY2FuIGxlYXZlIHRoZSByZXBvIGluIGEgY29ycnVwdGVkXG4gKiBzdGF0ZSB3aGVuIHRoZXJlIGFyZSBjb25mbGljdHMgc28gdGhlIHRhc2sgd2lsbCByZWplY3QgcmF0aGVyIHRoYW4gcmVzb2x2ZS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY2F0Y2hpbmcgdGhlIG1lcmdlIGNvbmZsaWN0IGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHsgZ2l0UCwgU2ltcGxlR2l0LCBHaXRSZXNwb25zZUVycm9yLCBNZXJnZVN1bW1hcnkgfSBmcm9tICdzaW1wbGUtZ2l0JztcblxuIGNvbnN0IGdpdCA9IGdpdFAocmVwb1Jvb3QpO1xuIGNvbnN0IG1lcmdlT3B0aW9uczogc3RyaW5nW10gPSBbJy0tbm8tZmYnLCAnb3RoZXItYnJhbmNoJ107XG4gY29uc3QgbWVyZ2VTdW1tYXJ5OiBNZXJnZVN1bW1hcnkgPSBhd2FpdCBnaXQubWVyZ2UobWVyZ2VPcHRpb25zKVxuICAgICAgLmNhdGNoKChlOiBHaXRSZXNwb25zZUVycm9yPE1lcmdlU3VtbWFyeT4pID0+IGUuZ2l0KTtcblxuIGlmIChtZXJnZVN1bW1hcnkuZmFpbGVkKSB7XG4gICAvLyBkZWFsIHdpdGggdGhlIGVycm9yXG4gfVxuIGBgYFxuICovXG5jbGFzcyBHaXRSZXNwb25zZUVycm9yIGV4dGVuZHMgZ2l0X2Vycm9yXzEuR2l0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKlxuICAgICAqIGAuZ2l0YCBhY2Nlc3MgdGhlIHBhcnNlZCByZXNwb25zZSB0aGF0IGlzIHRyZWF0ZWQgYXMgYmVpbmcgYW4gZXJyb3JcbiAgICAgKi9cbiAgICBnaXQsIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIodW5kZWZpbmVkLCBtZXNzYWdlIHx8IFN0cmluZyhnaXQpKTtcbiAgICAgICAgdGhpcy5naXQgPSBnaXQ7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRSZXNwb25zZUVycm9yID0gR2l0UmVzcG9uc2VFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1yZXNwb25zZS1lcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0Q29uc3RydWN0RXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBHaXRDb25zdHJ1Y3RFcnJvcmAgaXMgdGhyb3duIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zdHJ1Y3RvclxuICogb2YgdGhlIGBzaW1wbGUtZ2l0YCBpbnN0YW5jZSBpdHNlbGYuIE1vc3QgY29tbW9ubHkgYXMgYSByZXN1bHQgb2YgdXNpbmdcbiAqIGEgYGJhc2VEaXJgIG9wdGlvbiB0aGF0IHBvaW50cyB0byBhIGZvbGRlciB0aGF0IGVpdGhlciBkb2VzIG5vdCBleGlzdCxcbiAqIG9yIGNhbm5vdCBiZSByZWFkIGJ5IHRoZSB1c2VyIHRoZSBub2RlIHNjcmlwdCBpcyBydW5uaW5nIGFzLlxuICpcbiAqIENoZWNrIHRoZSBgLm1lc3NhZ2VgIHByb3BlcnR5IGZvciBtb3JlIGRldGFpbCBpbmNsdWRpbmcgdGhlIHByb3BlcnRpZXNcbiAqIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIEdpdENvbnN0cnVjdEVycm9yIGV4dGVuZHMgZ2l0X2Vycm9yXzEuR2l0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG59XG5leHBvcnRzLkdpdENvbnN0cnVjdEVycm9yID0gR2l0Q29uc3RydWN0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtY29uc3RydWN0LWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRQbHVnaW5FcnJvciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZ2l0LWVycm9yXCIpO1xuY2xhc3MgR2l0UGx1Z2luRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFzaywgcGx1Z2luLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHRhc2ssIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdFBsdWdpbkVycm9yID0gR2l0UGx1Z2luRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtcGx1Z2luLWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UYXNrQ29uZmlndXJhdGlvbkVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG4vKipcbiAqIFRoZSBgVGFza0NvbmZpZ3VyYXRpb25FcnJvcmAgaXMgdGhyb3duIHdoZW4gYSBjb21tYW5kIHdhcyBpbmNvcnJlY3RseVxuICogY29uZmlndXJlZC4gQW4gZXJyb3Igb2YgdGhpcyBraW5kIG1lYW5zIHRoYXQgbm8gYXR0ZW1wdCB3YXMgbWFkZSB0b1xuICogcnVuIHlvdXIgY29tbWFuZCB0aHJvdWdoIHRoZSB1bmRlcmx5aW5nIGBnaXRgIGJpbmFyeS5cbiAqXG4gKiBDaGVjayB0aGUgYC5tZXNzYWdlYCBwcm9wZXJ0eSBmb3IgbW9yZSBkZXRhaWwgb24gd2h5IHlvdXIgY29uZmlndXJhdGlvblxuICogcmVzdWx0ZWQgaW4gYW4gZXJyb3IuXG4gKi9cbmNsYXNzIFRhc2tDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGFza0NvbmZpZ3VyYXRpb25FcnJvciA9IFRhc2tDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3IuanMubWFwIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXHRcdGxldCBuYW1lc3BhY2VzQ2FjaGU7XG5cdFx0bGV0IGVuYWJsZWRDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVPdmVycmlkZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBlbmFibGVPdmVycmlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmFtZXNwYWNlc0NhY2hlICE9PSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzKSB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlc0NhY2hlID0gY3JlYXRlRGVidWcubmFtZXNwYWNlcztcblx0XHRcdFx0XHRlbmFibGVkQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZW5hYmxlZENhY2hlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblx0XHRjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZmxhZywgYXJndiA9IHByb2Nlc3MuYXJndikgPT4ge1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvc2l0aW9uID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXHRjb25zdCB0ZXJtaW5hdG9yUG9zaXRpb24gPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3NpdGlvbiAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3NpdGlvbiA9PT0gLTEgfHwgcG9zaXRpb24gPCB0ZXJtaW5hdG9yUG9zaXRpb24pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPW5ldmVyJykpIHtcblx0Zm9yY2VDb2xvciA9IDA7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSAxO1xufVxuXG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0aWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ3RydWUnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDE7XG5cdH0gZWxzZSBpZiAoZW52LkZPUkNFX0NPTE9SID09PSAnZmFsc2UnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgPyAxIDogTWF0aC5taW4ocGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCksIDMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKGhhdmVTdHJlYW0sIHN0cmVhbUlzVFRZKSB7XG5cdGlmIChmb3JjZUNvbG9yID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoaGF2ZVN0cmVhbSAmJiAhc3RyZWFtSXNUVFkgJiYgZm9yY2VDb2xvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yIHx8IDA7XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLlxuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJywgJ0dJVEhVQl9BQ1RJT05TJywgJ0JVSUxES0lURSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG5cdGNvbnN0IGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0sIHN0cmVhbSAmJiBzdHJlYW0uaXNUVFkpO1xuXHRyZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuXHRzdGRvdXQ6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgxKSkpLFxuXHRzdGRlcnI6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgyKSkpXG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuZGVzdHJveSA9IHV0aWwuZGVwcmVjYXRlKFxuXHQoKSA9PiB7fSxcblx0J0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nXG4pO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcblx0Ly8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXHRjb25zdCBzdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcblxuXHRpZiAoc3VwcG9ydHNDb2xvciAmJiAoc3VwcG9ydHNDb2xvci5zdGRlcnIgfHwgc3VwcG9ydHNDb2xvcikubGV2ZWwgPj0gMikge1xuXHRcdGV4cG9ydHMuY29sb3JzID0gW1xuXHRcdFx0MjAsXG5cdFx0XHQyMSxcblx0XHRcdDI2LFxuXHRcdFx0MjcsXG5cdFx0XHQzMixcblx0XHRcdDMzLFxuXHRcdFx0MzgsXG5cdFx0XHQzOSxcblx0XHRcdDQwLFxuXHRcdFx0NDEsXG5cdFx0XHQ0Mixcblx0XHRcdDQzLFxuXHRcdFx0NDQsXG5cdFx0XHQ0NSxcblx0XHRcdDU2LFxuXHRcdFx0NTcsXG5cdFx0XHQ2Mixcblx0XHRcdDYzLFxuXHRcdFx0NjgsXG5cdFx0XHQ2OSxcblx0XHRcdDc0LFxuXHRcdFx0NzUsXG5cdFx0XHQ3Nixcblx0XHRcdDc3LFxuXHRcdFx0NzgsXG5cdFx0XHQ3OSxcblx0XHRcdDgwLFxuXHRcdFx0ODEsXG5cdFx0XHQ5Mixcblx0XHRcdDkzLFxuXHRcdFx0OTgsXG5cdFx0XHQ5OSxcblx0XHRcdDExMixcblx0XHRcdDExMyxcblx0XHRcdDEyOCxcblx0XHRcdDEyOSxcblx0XHRcdDEzNCxcblx0XHRcdDEzNSxcblx0XHRcdDE0OCxcblx0XHRcdDE0OSxcblx0XHRcdDE2MCxcblx0XHRcdDE2MSxcblx0XHRcdDE2Mixcblx0XHRcdDE2Myxcblx0XHRcdDE2NCxcblx0XHRcdDE2NSxcblx0XHRcdDE2Nixcblx0XHRcdDE2Nyxcblx0XHRcdDE2OCxcblx0XHRcdDE2OSxcblx0XHRcdDE3MCxcblx0XHRcdDE3MSxcblx0XHRcdDE3Mixcblx0XHRcdDE3Myxcblx0XHRcdDE3OCxcblx0XHRcdDE3OSxcblx0XHRcdDE4NCxcblx0XHRcdDE4NSxcblx0XHRcdDE5Nixcblx0XHRcdDE5Nyxcblx0XHRcdDE5OCxcblx0XHRcdDE5OSxcblx0XHRcdDIwMCxcblx0XHRcdDIwMSxcblx0XHRcdDIwMixcblx0XHRcdDIwMyxcblx0XHRcdDIwNCxcblx0XHRcdDIwNSxcblx0XHRcdDIwNixcblx0XHRcdDIwNyxcblx0XHRcdDIwOCxcblx0XHRcdDIwOSxcblx0XHRcdDIxNCxcblx0XHRcdDIxNSxcblx0XHRcdDIyMCxcblx0XHRcdDIyMVxuXHRcdF07XG5cdH1cbn0gY2F0Y2ggKGVycm9yKSB7XG5cdC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoa2V5ID0+IHtcblx0cmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuXHQvLyBDYW1lbC1jYXNlXG5cdGNvbnN0IHByb3AgPSBrZXlcblx0XHQuc3Vic3RyaW5nKDYpXG5cdFx0LnRvTG93ZXJDYXNlKClcblx0XHQucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGspID0+IHtcblx0XHRcdHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0Ly8gQ29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG5cdGxldCB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuXHRpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gdHJ1ZTtcblx0fSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuXHRcdHZhbCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG5cdFx0dmFsID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0fVxuXG5cdG9ialtwcm9wXSA9IHZhbDtcblx0cmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHRyZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0cyA/XG5cdFx0Qm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycykgOlxuXHRcdHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRjb25zdCB7bmFtZXNwYWNlOiBuYW1lLCB1c2VDb2xvcnN9ID0gdGhpcztcblxuXHRpZiAodXNlQ29sb3JzKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuY29sb3I7XG5cdFx0Y29uc3QgY29sb3JDb2RlID0gJ1xcdTAwMUJbMycgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG5cdFx0Y29uc3QgcHJlZml4ID0gYCAgJHtjb2xvckNvZGV9OzFtJHtuYW1lfSBcXHUwMDFCWzBtYDtcblxuXHRcdGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcblx0XHRhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxQlswbScpO1xuXHR9IGVsc2Uge1xuXHRcdGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuXHRpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgJyAnO1xufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0cmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0KC4uLmFyZ3MpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0cHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuXHRcdC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG5cdFx0ZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGluaXQoZGVidWcpIHtcblx0ZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5tYXAoc3RyID0+IHN0ci50cmltKCkpXG5cdFx0LmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVPIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcbiIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIC8gbndqcyBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmc18xID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgZGVidWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGVidWdcIikpO1xuY29uc3QgbG9nID0gZGVidWdfMS5kZWZhdWx0KCdAa3dzaXRlcy9maWxlLWV4aXN0cycpO1xuZnVuY3Rpb24gY2hlY2socGF0aCwgaXNGaWxlLCBpc0RpcmVjdG9yeSkge1xuICAgIGxvZyhgY2hlY2tpbmcgJXNgLCBwYXRoKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGF0ID0gZnNfMS5zdGF0U3luYyhwYXRoKTtcbiAgICAgICAgaWYgKHN0YXQuaXNGaWxlKCkgJiYgaXNGaWxlKSB7XG4gICAgICAgICAgICBsb2coYFtPS10gcGF0aCByZXByZXNlbnRzIGEgZmlsZWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSAmJiBpc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgbG9nKGBbT0tdIHBhdGggcmVwcmVzZW50cyBhIGRpcmVjdG9yeWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbG9nKGBbRkFJTF0gcGF0aCByZXByZXNlbnRzIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgZmlsZSBvciBkaXJlY3RvcnlgKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgbG9nKGBbRkFJTF0gcGF0aCBpcyBub3QgYWNjZXNzaWJsZTogJW9gLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsb2coYFtGQVRBTF0gJW9gLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG4vKipcbiAqIFN5bmNocm9ub3VzIHZhbGlkYXRpb24gb2YgYSBwYXRoIGV4aXN0aW5nIGVpdGhlciBhcyBhIGZpbGUgb3IgYXMgYSBkaXJlY3RvcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIE9uZSBvciBib3RoIG9mIHRoZSBleHBvcnRlZCBudW1lcmljIGNvbnN0YW50c1xuICovXG5mdW5jdGlvbiBleGlzdHMocGF0aCwgdHlwZSA9IGV4cG9ydHMuUkVBREFCTEUpIHtcbiAgICByZXR1cm4gY2hlY2socGF0aCwgKHR5cGUgJiBleHBvcnRzLkZJTEUpID4gMCwgKHR5cGUgJiBleHBvcnRzLkZPTERFUikgPiAwKTtcbn1cbmV4cG9ydHMuZXhpc3RzID0gZXhpc3RzO1xuLyoqXG4gKiBDb25zdGFudCByZXByZXNlbnRpbmcgYSBmaWxlXG4gKi9cbmV4cG9ydHMuRklMRSA9IDE7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBhIGZvbGRlclxuICovXG5leHBvcnRzLkZPTERFUiA9IDI7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBlaXRoZXIgYSBmaWxlIG9yIGEgZm9sZGVyXG4gKi9cbmV4cG9ydHMuUkVBREFCTEUgPSBleHBvcnRzLkZJTEUgKyBleHBvcnRzLkZPTERFUjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyY1wiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLnBpY2sgPSBleHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gZXhwb3J0cy5wcmVmaXhlZEFycmF5ID0gZXhwb3J0cy5hc051bWJlciA9IGV4cG9ydHMuYXNTdHJpbmdBcnJheSA9IGV4cG9ydHMuYXNBcnJheSA9IGV4cG9ydHMub2JqZWN0VG9TdHJpbmcgPSBleHBvcnRzLnJlbW92ZSA9IGV4cG9ydHMuaW5jbHVkaW5nID0gZXhwb3J0cy5hcHBlbmQgPSBleHBvcnRzLmZvbGRlckV4aXN0cyA9IGV4cG9ydHMuZm9yRWFjaExpbmVXaXRoQ29udGVudCA9IGV4cG9ydHMudG9MaW5lc1dpdGhDb250ZW50ID0gZXhwb3J0cy5sYXN0ID0gZXhwb3J0cy5maXJzdCA9IGV4cG9ydHMuc3BsaXRPbiA9IGV4cG9ydHMuaXNVc2VyRnVuY3Rpb24gPSBleHBvcnRzLmFzRnVuY3Rpb24gPSBleHBvcnRzLk5PT1AgPSB2b2lkIDA7XG5jb25zdCBmaWxlX2V4aXN0c18xID0gcmVxdWlyZShcIkBrd3NpdGVzL2ZpbGUtZXhpc3RzXCIpO1xuY29uc3QgTk9PUCA9ICgpID0+IHtcbn07XG5leHBvcnRzLk5PT1AgPSBOT09QO1xuLyoqXG4gKiBSZXR1cm5zIGVpdGhlciB0aGUgc291cmNlIGFyZ3VtZW50IHdoZW4gaXQgaXMgYSBgRnVuY3Rpb25gLCBvciB0aGUgZGVmYXVsdFxuICogYE5PT1BgIGZ1bmN0aW9uIGNvbnN0YW50XG4gKi9cbmZ1bmN0aW9uIGFzRnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzb3VyY2UgPT09ICdmdW5jdGlvbicgPyBzb3VyY2UgOiBleHBvcnRzLk5PT1A7XG59XG5leHBvcnRzLmFzRnVuY3Rpb24gPSBhc0Z1bmN0aW9uO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHN1cHBsaWVkIGFyZ3VtZW50IGlzIGJvdGggYSBmdW5jdGlvbiwgYW5kIGlzIG5vdFxuICogdGhlIGBOT09QYCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gaXNVc2VyRnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygc291cmNlID09PSAnZnVuY3Rpb24nICYmIHNvdXJjZSAhPT0gZXhwb3J0cy5OT09QKTtcbn1cbmV4cG9ydHMuaXNVc2VyRnVuY3Rpb24gPSBpc1VzZXJGdW5jdGlvbjtcbmZ1bmN0aW9uIHNwbGl0T24oaW5wdXQsIGNoYXIpIHtcbiAgICBjb25zdCBpbmRleCA9IGlucHV0LmluZGV4T2YoY2hhcik7XG4gICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIFtpbnB1dCwgJyddO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICBpbnB1dC5zdWJzdHIoMCwgaW5kZXgpLFxuICAgICAgICBpbnB1dC5zdWJzdHIoaW5kZXggKyAxKSxcbiAgICBdO1xufVxuZXhwb3J0cy5zcGxpdE9uID0gc3BsaXRPbjtcbmZ1bmN0aW9uIGZpcnN0KGlucHV0LCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPiBvZmZzZXQgPyBpbnB1dFtvZmZzZXRdIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZnVuY3Rpb24gbGFzdChpbnB1dCwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID4gb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dFtpbnB1dC5sZW5ndGggLSAxIC0gb2Zmc2V0XTtcbiAgICB9XG59XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuZnVuY3Rpb24gaXNBcnJheUxpa2UoaW5wdXQpIHtcbiAgICByZXR1cm4gISEoaW5wdXQgJiYgdHlwZW9mIGlucHV0Lmxlbmd0aCA9PT0gJ251bWJlcicpO1xufVxuZnVuY3Rpb24gdG9MaW5lc1dpdGhDb250ZW50KGlucHV0LCB0cmltbWVkID0gdHJ1ZSwgc2VwYXJhdG9yID0gJ1xcbicpIHtcbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoc2VwYXJhdG9yKVxuICAgICAgICAucmVkdWNlKChvdXRwdXQsIGxpbmUpID0+IHtcbiAgICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSB0cmltbWVkID8gbGluZS50cmltKCkgOiBsaW5lO1xuICAgICAgICBpZiAobGluZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKGxpbmVDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydHMudG9MaW5lc1dpdGhDb250ZW50ID0gdG9MaW5lc1dpdGhDb250ZW50O1xuZnVuY3Rpb24gZm9yRWFjaExpbmVXaXRoQ29udGVudChpbnB1dCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdG9MaW5lc1dpdGhDb250ZW50KGlucHV0LCB0cnVlKS5tYXAobGluZSA9PiBjYWxsYmFjayhsaW5lKSk7XG59XG5leHBvcnRzLmZvckVhY2hMaW5lV2l0aENvbnRlbnQgPSBmb3JFYWNoTGluZVdpdGhDb250ZW50O1xuZnVuY3Rpb24gZm9sZGVyRXhpc3RzKHBhdGgpIHtcbiAgICByZXR1cm4gZmlsZV9leGlzdHNfMS5leGlzdHMocGF0aCwgZmlsZV9leGlzdHNfMS5GT0xERVIpO1xufVxuZXhwb3J0cy5mb2xkZXJFeGlzdHMgPSBmb2xkZXJFeGlzdHM7XG4vKipcbiAqIEFkZHMgYGl0ZW1gIGludG8gdGhlIGB0YXJnZXRgIGBBcnJheWAgb3IgYFNldGAgd2hlbiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGFuZCByZXR1cm5zIHRoZSBgaXRlbWAuXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIGl0ZW0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIGlmICghdGFyZ2V0LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG59XG5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZDtcbi8qKlxuICogQWRkcyBgaXRlbWAgaW50byB0aGUgYHRhcmdldGAgYEFycmF5YCB3aGVuIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgYW5kIHJldHVybnMgdGhlIGB0YXJnZXRgLlxuICovXG5mdW5jdGlvbiBpbmNsdWRpbmcodGFyZ2V0LCBpdGVtKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiAhdGFyZ2V0LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZXhwb3J0cy5pbmNsdWRpbmcgPSBpbmNsdWRpbmc7XG5mdW5jdGlvbiByZW1vdmUodGFyZ2V0LCBpdGVtKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldC5kZWxldGUoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xufVxuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5leHBvcnRzLm9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5mdW5jdGlvbiBhc0FycmF5KHNvdXJjZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHNvdXJjZSkgPyBzb3VyY2UgOiBbc291cmNlXTtcbn1cbmV4cG9ydHMuYXNBcnJheSA9IGFzQXJyYXk7XG5mdW5jdGlvbiBhc1N0cmluZ0FycmF5KHNvdXJjZSkge1xuICAgIHJldHVybiBhc0FycmF5KHNvdXJjZSkubWFwKFN0cmluZyk7XG59XG5leHBvcnRzLmFzU3RyaW5nQXJyYXkgPSBhc1N0cmluZ0FycmF5O1xuZnVuY3Rpb24gYXNOdW1iZXIoc291cmNlLCBvbk5hTiA9IDApIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9uTmFOO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBwYXJzZUludChzb3VyY2UsIDEwKTtcbiAgICByZXR1cm4gaXNOYU4obnVtKSA/IG9uTmFOIDogbnVtO1xufVxuZXhwb3J0cy5hc051bWJlciA9IGFzTnVtYmVyO1xuZnVuY3Rpb24gcHJlZml4ZWRBcnJheShpbnB1dCwgcHJlZml4KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGlucHV0Lmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHByZWZpeCwgaW5wdXRbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy5wcmVmaXhlZEFycmF5ID0gcHJlZml4ZWRBcnJheTtcbmZ1bmN0aW9uIGJ1ZmZlclRvU3RyaW5nKGlucHV0KSB7XG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGlucHV0KSA/IEJ1ZmZlci5jb25jYXQoaW5wdXQpIDogaW5wdXQpLnRvU3RyaW5nKCd1dGYtOCcpO1xufVxuZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGJ1ZmZlclRvU3RyaW5nO1xuLyoqXG4gKiBHZXQgYSBuZXcgb2JqZWN0IGZyb20gYSBzb3VyY2Ugb2JqZWN0IHdpdGggb25seSB0aGUgbGlzdGVkIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIHBpY2soc291cmNlLCBwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIC4uLnByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkgaW4gc291cmNlID8geyBbcHJvcGVydHldOiBzb3VyY2VbcHJvcGVydHldIH0gOiB7fSkpO1xufVxuZXhwb3J0cy5waWNrID0gcGljaztcbmZ1bmN0aW9uIGRlbGF5KGR1cmF0aW9uID0gMCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShkb25lID0+IHNldFRpbWVvdXQoZG9uZSwgZHVyYXRpb24pKTtcbn1cbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZpbHRlckhhc0xlbmd0aCA9IGV4cG9ydHMuZmlsdGVyRnVuY3Rpb24gPSBleHBvcnRzLmZpbHRlclBsYWluT2JqZWN0ID0gZXhwb3J0cy5maWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5ID0gZXhwb3J0cy5maWx0ZXJTdHJpbmdBcnJheSA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nID0gZXhwb3J0cy5maWx0ZXJQcmltaXRpdmVzID0gZXhwb3J0cy5maWx0ZXJBcnJheSA9IGV4cG9ydHMuZmlsdGVyVHlwZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5mdW5jdGlvbiBmaWx0ZXJUeXBlKGlucHV0LCBmaWx0ZXIsIGRlZikge1xuICAgIGlmIChmaWx0ZXIoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIChhcmd1bWVudHMubGVuZ3RoID4gMikgPyBkZWYgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmZpbHRlclR5cGUgPSBmaWx0ZXJUeXBlO1xuY29uc3QgZmlsdGVyQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCk7XG59O1xuZXhwb3J0cy5maWx0ZXJBcnJheSA9IGZpbHRlckFycmF5O1xuZnVuY3Rpb24gZmlsdGVyUHJpbWl0aXZlcyhpbnB1dCwgb21pdCkge1xuICAgIHJldHVybiAvbnVtYmVyfHN0cmluZ3xib29sZWFuLy50ZXN0KHR5cGVvZiBpbnB1dCkgJiYgKCFvbWl0IHx8ICFvbWl0LmluY2x1ZGVzKCh0eXBlb2YgaW5wdXQpKSk7XG59XG5leHBvcnRzLmZpbHRlclByaW1pdGl2ZXMgPSBmaWx0ZXJQcmltaXRpdmVzO1xuY29uc3QgZmlsdGVyU3RyaW5nID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZyc7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmcgPSBmaWx0ZXJTdHJpbmc7XG5jb25zdCBmaWx0ZXJTdHJpbmdBcnJheSA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSAmJiBpbnB1dC5ldmVyeShleHBvcnRzLmZpbHRlclN0cmluZyk7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmdBcnJheSA9IGZpbHRlclN0cmluZ0FycmF5O1xuY29uc3QgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBleHBvcnRzLmZpbHRlclN0cmluZyhpbnB1dCkgfHwgKEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0LmV2ZXJ5KGV4cG9ydHMuZmlsdGVyU3RyaW5nKSk7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5ID0gZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheTtcbmZ1bmN0aW9uIGZpbHRlclBsYWluT2JqZWN0KGlucHV0KSB7XG4gICAgcmV0dXJuICEhaW5wdXQgJiYgdXRpbF8xLm9iamVjdFRvU3RyaW5nKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5leHBvcnRzLmZpbHRlclBsYWluT2JqZWN0ID0gZmlsdGVyUGxhaW5PYmplY3Q7XG5mdW5jdGlvbiBmaWx0ZXJGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmZpbHRlckZ1bmN0aW9uID0gZmlsdGVyRnVuY3Rpb247XG5jb25zdCBmaWx0ZXJIYXNMZW5ndGggPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCB8fCAnbnVtYmVyfGJvb2xlYW58ZnVuY3Rpb24nLmluY2x1ZGVzKHR5cGVvZiBpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaW5wdXQubGVuZ3RoID09PSAnbnVtYmVyJztcbn07XG5leHBvcnRzLmZpbHRlckhhc0xlbmd0aCA9IGZpbHRlckhhc0xlbmd0aDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyZ3VtZW50LWZpbHRlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4aXRDb2RlcyA9IHZvaWQgMDtcbi8qKlxuICogS25vd24gcHJvY2VzcyBleGl0IGNvZGVzIHVzZWQgYnkgdGhlIHRhc2sgcGFyc2VycyB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlcnJvclxuICogd2FzIG9uZSB0aGV5IGNhbiBhdXRvbWF0aWNhbGx5IGhhbmRsZVxuICovXG52YXIgRXhpdENvZGVzO1xuKGZ1bmN0aW9uIChFeGl0Q29kZXMpIHtcbiAgICBFeGl0Q29kZXNbRXhpdENvZGVzW1wiU1VDQ0VTU1wiXSA9IDBdID0gXCJTVUNDRVNTXCI7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIkVSUk9SXCJdID0gMV0gPSBcIkVSUk9SXCI7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIlVOQ0xFQU5cIl0gPSAxMjhdID0gXCJVTkNMRUFOXCI7XG59KShFeGl0Q29kZXMgPSBleHBvcnRzLkV4aXRDb2RlcyB8fCAoZXhwb3J0cy5FeGl0Q29kZXMgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhpdC1jb2Rlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0T3V0cHV0U3RyZWFtcyA9IHZvaWQgMDtcbmNsYXNzIEdpdE91dHB1dFN0cmVhbXMge1xuICAgIGNvbnN0cnVjdG9yKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgIHRoaXMuc3RkT3V0ID0gc3RkT3V0O1xuICAgICAgICB0aGlzLnN0ZEVyciA9IHN0ZEVycjtcbiAgICB9XG4gICAgYXNTdHJpbmdzKCkge1xuICAgICAgICByZXR1cm4gbmV3IEdpdE91dHB1dFN0cmVhbXModGhpcy5zdGRPdXQudG9TdHJpbmcoJ3V0ZjgnKSwgdGhpcy5zdGRFcnIudG9TdHJpbmcoJ3V0ZjgnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRPdXRwdXRTdHJlYW1zID0gR2l0T3V0cHV0U3RyZWFtcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1vdXRwdXQtc3RyZWFtcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVtb3RlTGluZVBhcnNlciA9IGV4cG9ydHMuTGluZVBhcnNlciA9IHZvaWQgMDtcbmNsYXNzIExpbmVQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlZ0V4cCwgdXNlTWF0Y2hlcykge1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJzZSA9IChsaW5lLCB0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRNYXRjaGVzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlZ0V4cC5ldmVyeSgocmVnLCBpbmRleCkgPT4gdGhpcy5hZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKGluZGV4KSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlTWF0Y2hlcyh0YXJnZXQsIHRoaXMucHJlcGFyZU1hdGNoZXMoKSkgIT09IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9yZWdFeHAgPSBBcnJheS5pc0FycmF5KHJlZ0V4cCkgPyByZWdFeHAgOiBbcmVnRXhwXTtcbiAgICAgICAgaWYgKHVzZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudXNlTWF0Y2hlcyA9IHVzZU1hdGNoZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHVzZU1hdGNoZXModGFyZ2V0LCBtYXRjaCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExpbmVQYXJzZXI6dXNlTWF0Y2hlcyBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICB9XG4gICAgcmVzZXRNYXRjaGVzKCkge1xuICAgICAgICB0aGlzLm1hdGNoZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgcHJlcGFyZU1hdGNoZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoZXM7XG4gICAgfVxuICAgIGFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZCA9IGxpbmUgJiYgcmVnLmV4ZWMobGluZSk7XG4gICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hNYXRjaChpbmRleCwgbWF0Y2hlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhbWF0Y2hlZDtcbiAgICB9XG4gICAgcHVzaE1hdGNoKF9pbmRleCwgbWF0Y2hlZCkge1xuICAgICAgICB0aGlzLm1hdGNoZXMucHVzaCguLi5tYXRjaGVkLnNsaWNlKDEpKTtcbiAgICB9XG59XG5leHBvcnRzLkxpbmVQYXJzZXIgPSBMaW5lUGFyc2VyO1xuY2xhc3MgUmVtb3RlTGluZVBhcnNlciBleHRlbmRzIExpbmVQYXJzZXIge1xuICAgIGFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIC9ecmVtb3RlOlxccy8udGVzdChTdHJpbmcobGluZSkpICYmIHN1cGVyLmFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpO1xuICAgIH1cbiAgICBwdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCB8fCBtYXRjaGVkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHN1cGVyLnB1c2hNYXRjaChpbmRleCwgbWF0Y2hlZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlbW90ZUxpbmVQYXJzZXIgPSBSZW1vdGVMaW5lUGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZS1wYXJzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUluc3RhbmNlQ29uZmlnID0gdm9pZCAwO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYmluYXJ5OiAnZ2l0JyxcbiAgICBtYXhDb25jdXJyZW50UHJvY2Vzc2VzOiA1LFxuICAgIGNvbmZpZzogW10sXG59O1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VDb25maWcoLi4ub3B0aW9ucykge1xuICAgIGNvbnN0IGJhc2VEaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGJhc2VEaXIgfSwgZGVmYXVsdE9wdGlvbnMpLCAuLi4ob3B0aW9ucy5maWx0ZXIobyA9PiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbykpKTtcbiAgICBjb25maWcuYmFzZURpciA9IGNvbmZpZy5iYXNlRGlyIHx8IGJhc2VEaXI7XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydHMuY3JlYXRlSW5zdGFuY2VDb25maWcgPSBjcmVhdGVJbnN0YW5jZUNvbmZpZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtb3B0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50ID0gZXhwb3J0cy50cmFpbGluZ09wdGlvbnNBcmd1bWVudCA9IGV4cG9ydHMuZ2V0VHJhaWxpbmdPcHRpb25zID0gZXhwb3J0cy5hcHBlbmRUYXNrT3B0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IGFyZ3VtZW50X2ZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL2FyZ3VtZW50LWZpbHRlcnNcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gYXBwZW5kVGFza09wdGlvbnMob3B0aW9ucywgY29tbWFuZHMgPSBbXSkge1xuICAgIGlmICghYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclBsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoY29tbWFuZHMsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQcmltaXRpdmVzKHZhbHVlLCBbJ2Jvb2xlYW4nXSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tbWFuZHMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICB9LCBjb21tYW5kcyk7XG59XG5leHBvcnRzLmFwcGVuZFRhc2tPcHRpb25zID0gYXBwZW5kVGFza09wdGlvbnM7XG5mdW5jdGlvbiBnZXRUcmFpbGluZ09wdGlvbnMoYXJncywgaW5pdGlhbFByaW1pdGl2ZSA9IDAsIG9iamVjdE9ubHkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbW1hbmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gaW5pdGlhbFByaW1pdGl2ZSA8IDAgPyBhcmdzLmxlbmd0aCA6IGluaXRpYWxQcmltaXRpdmU7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoJ3N0cmluZ3xudW1iZXInLmluY2x1ZGVzKHR5cGVvZiBhcmdzW2ldKSkge1xuICAgICAgICAgICAgY29tbWFuZC5wdXNoKFN0cmluZyhhcmdzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kVGFza09wdGlvbnModHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJncyksIGNvbW1hbmQpO1xuICAgIGlmICghb2JqZWN0T25seSkge1xuICAgICAgICBjb21tYW5kLnB1c2goLi4udHJhaWxpbmdBcnJheUFyZ3VtZW50KGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbW1hbmQ7XG59XG5leHBvcnRzLmdldFRyYWlsaW5nT3B0aW9ucyA9IGdldFRyYWlsaW5nT3B0aW9ucztcbmZ1bmN0aW9uIHRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmdzKSB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmdDYWxsYmFjayA9IHR5cGVvZiB1dGlsXzEubGFzdChhcmdzKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclR5cGUodXRpbF8xLmxhc3QoYXJncywgaGFzVHJhaWxpbmdDYWxsYmFjayA/IDEgOiAwKSwgYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlckFycmF5LCBbXSk7XG59XG4vKipcbiAqIEdpdmVuIGFueSBudW1iZXIgb2YgYXJndW1lbnRzLCByZXR1cm5zIHRoZSB0cmFpbGluZyBvcHRpb25zIGFyZ3VtZW50LCBpZ25vcmluZyBhIHRyYWlsaW5nIGZ1bmN0aW9uIGFyZ3VtZW50XG4gKiBpZiB0aGVyZSBpcyBvbmUuIFdoZW4gbm90IGZvdW5kLCB0aGUgcmV0dXJuIHZhbHVlIGlzIG51bGwuXG4gKi9cbmZ1bmN0aW9uIHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3MpIHtcbiAgICBjb25zdCBoYXNUcmFpbGluZ0NhbGxiYWNrID0gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlckZ1bmN0aW9uKHV0aWxfMS5sYXN0KGFyZ3MpKTtcbiAgICByZXR1cm4gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclR5cGUodXRpbF8xLmxhc3QoYXJncywgaGFzVHJhaWxpbmdDYWxsYmFjayA/IDEgOiAwKSwgYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclBsYWluT2JqZWN0KTtcbn1cbmV4cG9ydHMudHJhaWxpbmdPcHRpb25zQXJndW1lbnQgPSB0cmFpbGluZ09wdGlvbnNBcmd1bWVudDtcbi8qKlxuICogUmV0dXJucyBlaXRoZXIgdGhlIHNvdXJjZSBhcmd1bWVudCB3aGVuIGl0IGlzIGEgYEZ1bmN0aW9uYCwgb3IgdGhlIGRlZmF1bHRcbiAqIGBOT09QYCBmdW5jdGlvbiBjb25zdGFudFxuICovXG5mdW5jdGlvbiB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJncywgaW5jbHVkZU5vb3AgPSB0cnVlKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1dGlsXzEuYXNGdW5jdGlvbih1dGlsXzEubGFzdChhcmdzKSk7XG4gICAgcmV0dXJuIGluY2x1ZGVOb29wIHx8IHV0aWxfMS5pc1VzZXJGdW5jdGlvbihjYWxsYmFjaykgPyBjYWxsYmFjayA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1vcHRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVN0cmluZ1Jlc3BvbnNlID0gZXhwb3J0cy5jYWxsVGFza1BhcnNlciA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5mdW5jdGlvbiBjYWxsVGFza1BhcnNlcihwYXJzZXIsIHN0cmVhbXMpIHtcbiAgICByZXR1cm4gcGFyc2VyKHN0cmVhbXMuc3RkT3V0LCBzdHJlYW1zLnN0ZEVycik7XG59XG5leHBvcnRzLmNhbGxUYXNrUGFyc2VyID0gY2FsbFRhc2tQYXJzZXI7XG5mdW5jdGlvbiBwYXJzZVN0cmluZ1Jlc3BvbnNlKHJlc3VsdCwgcGFyc2VycywgLi4udGV4dHMpIHtcbiAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaW5lcyA9IHV0aWxfMS50b0xpbmVzV2l0aENvbnRlbnQodGV4dCksIGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IChvZmZzZXQgPSAwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKChpICsgb2Zmc2V0KSA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZXNbaSArIG9mZnNldF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFyc2Vycy5zb21lKCh7IHBhcnNlIH0pID0+IHBhcnNlKGxpbmUsIHJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2VTdHJpbmdSZXNwb25zZSA9IHBhcnNlU3RyaW5nUmVzcG9uc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrLXBhcnNlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FyZ3VtZW50LWZpbHRlcnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2V4aXQtY29kZXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2dpdC1vdXRwdXQtc3RyZWFtc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGluZS1wYXJzZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NpbXBsZS1naXQtb3B0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGFzay1vcHRpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90YXNrLXBhcnNlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tJc0JhcmVSZXBvVGFzayA9IGV4cG9ydHMuY2hlY2tJc1JlcG9Sb290VGFzayA9IGV4cG9ydHMuY2hlY2tJc1JlcG9UYXNrID0gZXhwb3J0cy5DaGVja1JlcG9BY3Rpb25zID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBDaGVja1JlcG9BY3Rpb25zO1xuKGZ1bmN0aW9uIChDaGVja1JlcG9BY3Rpb25zKSB7XG4gICAgQ2hlY2tSZXBvQWN0aW9uc1tcIkJBUkVcIl0gPSBcImJhcmVcIjtcbiAgICBDaGVja1JlcG9BY3Rpb25zW1wiSU5fVFJFRVwiXSA9IFwidHJlZVwiO1xuICAgIENoZWNrUmVwb0FjdGlvbnNbXCJJU19SRVBPX1JPT1RcIl0gPSBcInJvb3RcIjtcbn0pKENoZWNrUmVwb0FjdGlvbnMgPSBleHBvcnRzLkNoZWNrUmVwb0FjdGlvbnMgfHwgKGV4cG9ydHMuQ2hlY2tSZXBvQWN0aW9ucyA9IHt9KSk7XG5jb25zdCBvbkVycm9yID0gKHsgZXhpdENvZGUgfSwgZXJyb3IsIGRvbmUsIGZhaWwpID0+IHtcbiAgICBpZiAoZXhpdENvZGUgPT09IHV0aWxzXzEuRXhpdENvZGVzLlVOQ0xFQU4gJiYgaXNOb3RSZXBvTWVzc2FnZShlcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoQnVmZmVyLmZyb20oJ2ZhbHNlJykpO1xuICAgIH1cbiAgICBmYWlsKGVycm9yKTtcbn07XG5jb25zdCBwYXJzZXIgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiB0ZXh0LnRyaW0oKSA9PT0gJ3RydWUnO1xufTtcbmZ1bmN0aW9uIGNoZWNrSXNSZXBvVGFzayhhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIENoZWNrUmVwb0FjdGlvbnMuQkFSRTpcbiAgICAgICAgICAgIHJldHVybiBjaGVja0lzQmFyZVJlcG9UYXNrKCk7XG4gICAgICAgIGNhc2UgQ2hlY2tSZXBvQWN0aW9ucy5JU19SRVBPX1JPT1Q6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tJc1JlcG9Sb290VGFzaygpO1xuICAgIH1cbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0taXMtaW5zaWRlLXdvcmstdHJlZSddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzUmVwb1Rhc2sgPSBjaGVja0lzUmVwb1Rhc2s7XG5mdW5jdGlvbiBjaGVja0lzUmVwb1Jvb3RUYXNrKCkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXYtcGFyc2UnLCAnLS1naXQtZGlyJ107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgb25FcnJvcixcbiAgICAgICAgcGFyc2VyKHBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiAvXlxcLihnaXQpPyQvLnRlc3QocGF0aC50cmltKCkpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNoZWNrSXNSZXBvUm9vdFRhc2sgPSBjaGVja0lzUmVwb1Jvb3RUYXNrO1xuZnVuY3Rpb24gY2hlY2tJc0JhcmVSZXBvVGFzaygpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0taXMtYmFyZS1yZXBvc2l0b3J5J107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgb25FcnJvcixcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmNoZWNrSXNCYXJlUmVwb1Rhc2sgPSBjaGVja0lzQmFyZVJlcG9UYXNrO1xuZnVuY3Rpb24gaXNOb3RSZXBvTWVzc2FnZShlcnJvcikge1xuICAgIHJldHVybiAvKE5vdCBhIGdpdCByZXBvc2l0b3J5fEtlaW4gR2l0LVJlcG9zaXRvcnkpL2kudGVzdChTdHJpbmcoZXJyb3IpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrLWlzLXJlcG8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsZWFuU3VtbWFyeVBhcnNlciA9IGV4cG9ydHMuQ2xlYW5SZXNwb25zZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDbGVhblJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihkcnlSdW4pIHtcbiAgICAgICAgdGhpcy5kcnlSdW4gPSBkcnlSdW47XG4gICAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZvbGRlcnMgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLkNsZWFuUmVzcG9uc2UgPSBDbGVhblJlc3BvbnNlO1xuY29uc3QgcmVtb3ZhbFJlZ2V4cCA9IC9eW2Etel0rXFxzKi9pO1xuY29uc3QgZHJ5UnVuUmVtb3ZhbFJlZ2V4cCA9IC9eW2Etel0rXFxzK1thLXpdK1xccyovaTtcbmNvbnN0IGlzRm9sZGVyUmVnZXhwID0gL1xcLyQvO1xuZnVuY3Rpb24gY2xlYW5TdW1tYXJ5UGFyc2VyKGRyeVJ1biwgdGV4dCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBuZXcgQ2xlYW5SZXNwb25zZShkcnlSdW4pO1xuICAgIGNvbnN0IHJlZ2V4cCA9IGRyeVJ1biA/IGRyeVJ1blJlbW92YWxSZWdleHAgOiByZW1vdmFsUmVnZXhwO1xuICAgIHV0aWxzXzEudG9MaW5lc1dpdGhDb250ZW50KHRleHQpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSBsaW5lLnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgICAgIHN1bW1hcnkucGF0aHMucHVzaChyZW1vdmVkKTtcbiAgICAgICAgKGlzRm9sZGVyUmVnZXhwLnRlc3QocmVtb3ZlZCkgPyBzdW1tYXJ5LmZvbGRlcnMgOiBzdW1tYXJ5LmZpbGVzKS5wdXNoKHJlbW92ZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW1tYXJ5O1xufVxuZXhwb3J0cy5jbGVhblN1bW1hcnlQYXJzZXIgPSBjbGVhblN1bW1hcnlQYXJzZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGVhblN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW1wdHlUYXNrID0gZXhwb3J0cy5pc0J1ZmZlclRhc2sgPSBleHBvcnRzLnN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2sgPSBleHBvcnRzLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2sgPSBleHBvcnRzLmNvbmZpZ3VyYXRpb25FcnJvclRhc2sgPSBleHBvcnRzLmFkaG9jRXhlY1Rhc2sgPSBleHBvcnRzLkVNUFRZX0NPTU1BTkRTID0gdm9pZCAwO1xuY29uc3QgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvclwiKTtcbmV4cG9ydHMuRU1QVFlfQ09NTUFORFMgPSBbXTtcbmZ1bmN0aW9uIGFkaG9jRXhlY1Rhc2socGFyc2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IGV4cG9ydHMuRU1QVFlfQ09NTUFORFMsXG4gICAgICAgIGZvcm1hdDogJ2VtcHR5JyxcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmFkaG9jRXhlY1Rhc2sgPSBhZGhvY0V4ZWNUYXNrO1xuZnVuY3Rpb24gY29uZmlndXJhdGlvbkVycm9yVGFzayhlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBleHBvcnRzLkVNUFRZX0NPTU1BTkRTLFxuICAgICAgICBmb3JtYXQ6ICdlbXB0eScsXG4gICAgICAgIHBhcnNlcigpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBuZXcgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEuVGFza0NvbmZpZ3VyYXRpb25FcnJvcihlcnJvcikgOiBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmNvbmZpZ3VyYXRpb25FcnJvclRhc2sgPSBjb25maWd1cmF0aW9uRXJyb3JUYXNrO1xuZnVuY3Rpb24gc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcywgdHJpbW1lZCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmltbWVkID8gU3RyaW5nKHRleHQpLnRyaW0oKSA6IHRleHQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayA9IHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2s7XG5mdW5jdGlvbiBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrKGNvbW1hbmRzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ2J1ZmZlcicsXG4gICAgICAgIHBhcnNlcihidWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayA9IHN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2s7XG5mdW5jdGlvbiBpc0J1ZmZlclRhc2sodGFzaykge1xuICAgIHJldHVybiB0YXNrLmZvcm1hdCA9PT0gJ2J1ZmZlcic7XG59XG5leHBvcnRzLmlzQnVmZmVyVGFzayA9IGlzQnVmZmVyVGFzaztcbmZ1bmN0aW9uIGlzRW1wdHlUYXNrKHRhc2spIHtcbiAgICByZXR1cm4gdGFzay5mb3JtYXQgPT09ICdlbXB0eScgfHwgIXRhc2suY29tbWFuZHMubGVuZ3RoO1xufVxuZXhwb3J0cy5pc0VtcHR5VGFzayA9IGlzRW1wdHlUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNDbGVhbk9wdGlvbnNBcnJheSA9IGV4cG9ydHMuY2xlYW5UYXNrID0gZXhwb3J0cy5jbGVhbldpdGhPcHRpb25zVGFzayA9IGV4cG9ydHMuQ2xlYW5PcHRpb25zID0gZXhwb3J0cy5DT05GSUdfRVJST1JfVU5LTk9XTl9PUFRJT04gPSBleHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEID0gZXhwb3J0cy5DT05GSUdfRVJST1JfSU5URVJBQ1RJVkVfTU9ERSA9IHZvaWQgMDtcbmNvbnN0IENsZWFuU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9DbGVhblN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUgPSAnR2l0IGNsZWFuIGludGVyYWN0aXZlIG1vZGUgaXMgbm90IHN1cHBvcnRlZCc7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEID0gJ0dpdCBjbGVhbiBtb2RlIHBhcmFtZXRlciAoXCJuXCIgb3IgXCJmXCIpIGlzIHJlcXVpcmVkJztcbmV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OID0gJ0dpdCBjbGVhbiB1bmtub3duIG9wdGlvbiBmb3VuZCBpbjogJztcbi8qKlxuICogQWxsIHN1cHBvcnRlZCBvcHRpb24gc3dpdGNoZXMgYXZhaWxhYmxlIGZvciB1c2UgaW4gYSBgZ2l0LmNsZWFuYCBvcGVyYXRpb25cbiAqL1xudmFyIENsZWFuT3B0aW9ucztcbihmdW5jdGlvbiAoQ2xlYW5PcHRpb25zKSB7XG4gICAgQ2xlYW5PcHRpb25zW1wiRFJZX1JVTlwiXSA9IFwiblwiO1xuICAgIENsZWFuT3B0aW9uc1tcIkZPUkNFXCJdID0gXCJmXCI7XG4gICAgQ2xlYW5PcHRpb25zW1wiSUdOT1JFRF9JTkNMVURFRFwiXSA9IFwieFwiO1xuICAgIENsZWFuT3B0aW9uc1tcIklHTk9SRURfT05MWVwiXSA9IFwiWFwiO1xuICAgIENsZWFuT3B0aW9uc1tcIkVYQ0xVRElOR1wiXSA9IFwiZVwiO1xuICAgIENsZWFuT3B0aW9uc1tcIlFVSUVUXCJdID0gXCJxXCI7XG4gICAgQ2xlYW5PcHRpb25zW1wiUkVDVVJTSVZFXCJdID0gXCJkXCI7XG59KShDbGVhbk9wdGlvbnMgPSBleHBvcnRzLkNsZWFuT3B0aW9ucyB8fCAoZXhwb3J0cy5DbGVhbk9wdGlvbnMgPSB7fSkpO1xuY29uc3QgQ2xlYW5PcHRpb25WYWx1ZXMgPSBuZXcgU2V0KFsnaScsIC4uLnV0aWxzXzEuYXNTdHJpbmdBcnJheShPYmplY3QudmFsdWVzKENsZWFuT3B0aW9ucykpXSk7XG5mdW5jdGlvbiBjbGVhbldpdGhPcHRpb25zVGFzayhtb2RlLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgeyBjbGVhbk1vZGUsIG9wdGlvbnMsIHZhbGlkIH0gPSBnZXRDbGVhbk9wdGlvbnMobW9kZSk7XG4gICAgaWYgKCFjbGVhbk1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX01PREVfUkVRVUlSRUQpO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkLm9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OICsgSlNPTi5zdHJpbmdpZnkobW9kZSkpO1xuICAgIH1cbiAgICBvcHRpb25zLnB1c2goLi4uY3VzdG9tQXJncyk7XG4gICAgaWYgKG9wdGlvbnMuc29tZShpc0ludGVyYWN0aXZlTW9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xlYW5UYXNrKGNsZWFuTW9kZSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNsZWFuV2l0aE9wdGlvbnNUYXNrID0gY2xlYW5XaXRoT3B0aW9uc1Rhc2s7XG5mdW5jdGlvbiBjbGVhblRhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjbGVhbicsIGAtJHttb2RlfWAsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xlYW5TdW1tYXJ5XzEuY2xlYW5TdW1tYXJ5UGFyc2VyKG1vZGUgPT09IENsZWFuT3B0aW9ucy5EUllfUlVOLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmNsZWFuVGFzayA9IGNsZWFuVGFzaztcbmZ1bmN0aW9uIGlzQ2xlYW5PcHRpb25zQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQuZXZlcnkodGVzdCA9PiBDbGVhbk9wdGlvblZhbHVlcy5oYXModGVzdCkpO1xufVxuZXhwb3J0cy5pc0NsZWFuT3B0aW9uc0FycmF5ID0gaXNDbGVhbk9wdGlvbnNBcnJheTtcbmZ1bmN0aW9uIGdldENsZWFuT3B0aW9ucyhpbnB1dCkge1xuICAgIGxldCBjbGVhbk1vZGU7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQgdmFsaWQgPSB7IGNsZWFuTW9kZTogZmFsc2UsIG9wdGlvbnM6IHRydWUgfTtcbiAgICBpbnB1dC5yZXBsYWNlKC9bXmEtel1pL2csICcnKS5zcGxpdCgnJykuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgICAgaWYgKGlzQ2xlYW5Nb2RlKGNoYXIpKSB7XG4gICAgICAgICAgICBjbGVhbk1vZGUgPSBjaGFyO1xuICAgICAgICAgICAgdmFsaWQuY2xlYW5Nb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkLm9wdGlvbnMgPSB2YWxpZC5vcHRpb25zICYmIGlzS25vd25PcHRpb24ob3B0aW9uc1tvcHRpb25zLmxlbmd0aF0gPSAoYC0ke2NoYXJ9YCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYW5Nb2RlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICB2YWxpZCxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNDbGVhbk1vZGUoY2xlYW5Nb2RlKSB7XG4gICAgcmV0dXJuIGNsZWFuTW9kZSA9PT0gQ2xlYW5PcHRpb25zLkZPUkNFIHx8IGNsZWFuTW9kZSA9PT0gQ2xlYW5PcHRpb25zLkRSWV9SVU47XG59XG5mdW5jdGlvbiBpc0tub3duT3B0aW9uKG9wdGlvbikge1xuICAgIHJldHVybiAvXi1bYS16XSQvaS50ZXN0KG9wdGlvbikgJiYgQ2xlYW5PcHRpb25WYWx1ZXMuaGFzKG9wdGlvbi5jaGFyQXQoMSkpO1xufVxuZnVuY3Rpb24gaXNJbnRlcmFjdGl2ZU1vZGUob3B0aW9uKSB7XG4gICAgaWYgKC9eLVteXFwtXS8udGVzdChvcHRpb24pKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24uaW5kZXhPZignaScpID4gMDtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbiA9PT0gJy0taW50ZXJhY3RpdmUnO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbmZpZ0dldFBhcnNlciA9IGV4cG9ydHMuY29uZmlnTGlzdFBhcnNlciA9IGV4cG9ydHMuQ29uZmlnTGlzdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDb25maWdMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGdldCBhbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGwgPSB0aGlzLmZpbGVzLnJlZHVjZSgoYWxsLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxsLCB0aGlzLnZhbHVlc1tmaWxlXSk7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbDtcbiAgICB9XG4gICAgYWRkRmlsZShmaWxlKSB7XG4gICAgICAgIGlmICghKGZpbGUgaW4gdGhpcy52YWx1ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBsYXRlc3QgPSB1dGlsc18xLmxhc3QodGhpcy5maWxlcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tmaWxlXSA9IGxhdGVzdCA/IE9iamVjdC5jcmVhdGUodGhpcy52YWx1ZXNbbGF0ZXN0XSkgOiB7fTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbZmlsZV07XG4gICAgfVxuICAgIGFkZFZhbHVlKGZpbGUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgICBpZiAoIXZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gW3ZhbHVlc1trZXldLCB2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWxsID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTGlzdCA9IENvbmZpZ0xpc3Q7XG5mdW5jdGlvbiBjb25maWdMaXN0UGFyc2VyKHRleHQpIHtcbiAgICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnTGlzdCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb25maWdQYXJzZXIodGV4dCkpIHtcbiAgICAgICAgY29uZmlnLmFkZFZhbHVlKGl0ZW0uZmlsZSwgU3RyaW5nKGl0ZW0ua2V5KSwgaXRlbS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnRzLmNvbmZpZ0xpc3RQYXJzZXIgPSBjb25maWdMaXN0UGFyc2VyO1xuZnVuY3Rpb24gY29uZmlnR2V0UGFyc2VyKHRleHQsIGtleSkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgY29uc3Qgc2NvcGVzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb25maWdQYXJzZXIodGV4dCwga2V5KSkge1xuICAgICAgICBpZiAoaXRlbS5rZXkgIT09IGtleSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUgPSBpdGVtLnZhbHVlKTtcbiAgICAgICAgaWYgKCFzY29wZXMuaGFzKGl0ZW0uZmlsZSkpIHtcbiAgICAgICAgICAgIHNjb3Blcy5zZXQoaXRlbS5maWxlLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGVzLmdldChpdGVtLmZpbGUpLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIHBhdGhzOiBBcnJheS5mcm9tKHNjb3Blcy5rZXlzKCkpLFxuICAgICAgICBzY29wZXMsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB2YWx1ZXNcbiAgICB9O1xufVxuZXhwb3J0cy5jb25maWdHZXRQYXJzZXIgPSBjb25maWdHZXRQYXJzZXI7XG5mdW5jdGlvbiBjb25maWdGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIHJldHVybiBmaWxlUGF0aC5yZXBsYWNlKC9eKGZpbGUpOi8sICcnKTtcbn1cbmZ1bmN0aW9uKiBjb25maWdQYXJzZXIodGV4dCwgcmVxdWVzdGVkS2V5ID0gbnVsbCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFwwJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGxpbmVzLmxlbmd0aCAtIDE7IGkgPCBtYXg7KSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBjb25maWdGaWxlUGF0aChsaW5lc1tpKytdKTtcbiAgICAgICAgbGV0IHZhbHVlID0gbGluZXNbaSsrXTtcbiAgICAgICAgbGV0IGtleSA9IHJlcXVlc3RlZEtleTtcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IHV0aWxzXzEuc3BsaXRPbih2YWx1ZSwgJ1xcbicpO1xuICAgICAgICAgICAga2V5ID0gbGluZVswXTtcbiAgICAgICAgICAgIHZhbHVlID0gbGluZVsxXTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCB7IGZpbGUsIGtleSwgdmFsdWUgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db25maWdMaXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRDb25maWdTY29wZSA9IHZvaWQgMDtcbmNvbnN0IENvbmZpZ0xpc3RfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ29uZmlnTGlzdFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgR2l0Q29uZmlnU2NvcGU7XG4oZnVuY3Rpb24gKEdpdENvbmZpZ1Njb3BlKSB7XG4gICAgR2l0Q29uZmlnU2NvcGVbXCJzeXN0ZW1cIl0gPSBcInN5c3RlbVwiO1xuICAgIEdpdENvbmZpZ1Njb3BlW1wiZ2xvYmFsXCJdID0gXCJnbG9iYWxcIjtcbiAgICBHaXRDb25maWdTY29wZVtcImxvY2FsXCJdID0gXCJsb2NhbFwiO1xuICAgIEdpdENvbmZpZ1Njb3BlW1wid29ya3RyZWVcIl0gPSBcIndvcmt0cmVlXCI7XG59KShHaXRDb25maWdTY29wZSA9IGV4cG9ydHMuR2l0Q29uZmlnU2NvcGUgfHwgKGV4cG9ydHMuR2l0Q29uZmlnU2NvcGUgPSB7fSkpO1xuZnVuY3Rpb24gYXNDb25maWdTY29wZShzY29wZSwgZmFsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHNjb3BlID09PSAnc3RyaW5nJyAmJiBHaXRDb25maWdTY29wZS5oYXNPd25Qcm9wZXJ0eShzY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG5mdW5jdGlvbiBhZGRDb25maWdUYXNrKGtleSwgdmFsdWUsIGFwcGVuZCwgc2NvcGUpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY29uZmlnJywgYC0tJHtzY29wZX1gXTtcbiAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goJy0tYWRkJyk7XG4gICAgfVxuICAgIGNvbW1hbmRzLnB1c2goa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldENvbmZpZ1Rhc2soa2V5LCBzY29wZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjb25maWcnLCAnLS1udWxsJywgJy0tc2hvdy1vcmlnaW4nLCAnLS1nZXQtYWxsJywga2V5XTtcbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIGAtLSR7c2NvcGV9YCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uZmlnTGlzdF8xLmNvbmZpZ0dldFBhcnNlcih0ZXh0LCBrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGxpc3RDb25maWdUYXNrKHNjb3BlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2NvbmZpZycsICctLWxpc3QnLCAnLS1zaG93LW9yaWdpbicsICctLW51bGwnXTtcbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChgLS0ke3Njb3BlfWApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbmZpZ0xpc3RfMS5jb25maWdMaXN0UGFyc2VyKHRleHQpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkQ29uZmlnKGtleSwgdmFsdWUsIC4uLnJlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGFkZENvbmZpZ1Rhc2soa2V5LCB2YWx1ZSwgcmVzdFswXSA9PT0gdHJ1ZSwgYXNDb25maWdTY29wZShyZXN0WzFdLCBHaXRDb25maWdTY29wZS5sb2NhbCkpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29uZmlnKGtleSwgc2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGdldENvbmZpZ1Rhc2soa2V5LCBhc0NvbmZpZ1Njb3BlKHNjb3BlLCB1bmRlZmluZWQpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RDb25maWcoLi4ucmVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sobGlzdENvbmZpZ1Rhc2soYXNDb25maWdTY29wZShyZXN0WzBdLCB1bmRlZmluZWQpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0UmVzZXRNb2RlID0gZXhwb3J0cy5yZXNldFRhc2sgPSBleHBvcnRzLlJlc2V0TW9kZSA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG52YXIgUmVzZXRNb2RlO1xuKGZ1bmN0aW9uIChSZXNldE1vZGUpIHtcbiAgICBSZXNldE1vZGVbXCJNSVhFRFwiXSA9IFwibWl4ZWRcIjtcbiAgICBSZXNldE1vZGVbXCJTT0ZUXCJdID0gXCJzb2Z0XCI7XG4gICAgUmVzZXRNb2RlW1wiSEFSRFwiXSA9IFwiaGFyZFwiO1xuICAgIFJlc2V0TW9kZVtcIk1FUkdFXCJdID0gXCJtZXJnZVwiO1xuICAgIFJlc2V0TW9kZVtcIktFRVBcIl0gPSBcImtlZXBcIjtcbn0pKFJlc2V0TW9kZSA9IGV4cG9ydHMuUmVzZXRNb2RlIHx8IChleHBvcnRzLlJlc2V0TW9kZSA9IHt9KSk7XG5jb25zdCBSZXNldE1vZGVzID0gQXJyYXkuZnJvbShPYmplY3QudmFsdWVzKFJlc2V0TW9kZSkpO1xuZnVuY3Rpb24gcmVzZXRUYXNrKG1vZGUsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmVzZXQnXTtcbiAgICBpZiAoaXNWYWxpZFJlc2V0TW9kZShtb2RlKSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKGAtLSR7bW9kZX1gKTtcbiAgICB9XG4gICAgY29tbWFuZHMucHVzaCguLi5jdXN0b21BcmdzKTtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5yZXNldFRhc2sgPSByZXNldFRhc2s7XG5mdW5jdGlvbiBnZXRSZXNldE1vZGUobW9kZSkge1xuICAgIGlmIChpc1ZhbGlkUmVzZXRNb2RlKG1vZGUpKSB7XG4gICAgICAgIHJldHVybiBtb2RlO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGVvZiBtb2RlKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICByZXR1cm4gUmVzZXRNb2RlLlNPRlQ7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydHMuZ2V0UmVzZXRNb2RlID0gZ2V0UmVzZXRNb2RlO1xuZnVuY3Rpb24gaXNWYWxpZFJlc2V0TW9kZShtb2RlKSB7XG4gICAgcmV0dXJuIFJlc2V0TW9kZXMuaW5jbHVkZXMobW9kZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNldC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdpdF9jb25zdHJ1Y3RfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtY29uc3RydWN0LWVycm9yXCIpO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LWVycm9yXCIpO1xuY29uc3QgZ2l0X3BsdWdpbl9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1wbHVnaW4tZXJyb3JcIik7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCB0YXNrX2NvbmZpZ3VyYXRpb25fZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy90YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3JcIik7XG5jb25zdCBjaGVja19pc19yZXBvXzEgPSByZXF1aXJlKFwiLi90YXNrcy9jaGVjay1pcy1yZXBvXCIpO1xuY29uc3QgY2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NsZWFuXCIpO1xuY29uc3QgY29uZmlnXzEgPSByZXF1aXJlKFwiLi90YXNrcy9jb25maWdcIik7XG5jb25zdCByZXNldF8xID0gcmVxdWlyZShcIi4vdGFza3MvcmVzZXRcIik7XG5jb25zdCBhcGkgPSB7XG4gICAgQ2hlY2tSZXBvQWN0aW9uczogY2hlY2tfaXNfcmVwb18xLkNoZWNrUmVwb0FjdGlvbnMsXG4gICAgQ2xlYW5PcHRpb25zOiBjbGVhbl8xLkNsZWFuT3B0aW9ucyxcbiAgICBHaXRDb25maWdTY29wZTogY29uZmlnXzEuR2l0Q29uZmlnU2NvcGUsXG4gICAgR2l0Q29uc3RydWN0RXJyb3I6IGdpdF9jb25zdHJ1Y3RfZXJyb3JfMS5HaXRDb25zdHJ1Y3RFcnJvcixcbiAgICBHaXRFcnJvcjogZ2l0X2Vycm9yXzEuR2l0RXJyb3IsXG4gICAgR2l0UGx1Z2luRXJyb3I6IGdpdF9wbHVnaW5fZXJyb3JfMS5HaXRQbHVnaW5FcnJvcixcbiAgICBHaXRSZXNwb25zZUVycm9yOiBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yLFxuICAgIFJlc2V0TW9kZTogcmVzZXRfMS5SZXNldE1vZGUsXG4gICAgVGFza0NvbmZpZ3VyYXRpb25FcnJvcjogdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEuVGFza0NvbmZpZ3VyYXRpb25FcnJvcixcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBhcGk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbihjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgcHJlZml4ID0gdXRpbHNfMS5wcmVmaXhlZEFycmF5KGNvbmZpZ3VyYXRpb24sICctYycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5hcmdzJyxcbiAgICAgICAgYWN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJlZml4LCAuLi5kYXRhXTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5jb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luID0gY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1hbmQtY29uZmlnLXByZWZpeGluZy1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZURlZmVycmVkID0gZXhwb3J0cy5kZWZlcnJlZCA9IHZvaWQgMDtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgRGVmZXJyZWRQcm9taXNlYFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQge2RlZmVycmVkfSBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gICAgbGV0IGRvbmU7XG4gICAgbGV0IGZhaWw7XG4gICAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKF9kb25lLCBfZmFpbCkgPT4ge1xuICAgICAgICBkb25lID0gX2RvbmU7XG4gICAgICAgIGZhaWwgPSBfZmFpbDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlLFxuICAgICAgICBkb25lKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ3Jlc29sdmVkJztcbiAgICAgICAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmdWxmaWxsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzICE9PSAncGVuZGluZyc7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmVycmVkID0gZGVmZXJyZWQ7XG4vKipcbiAqIEFsaWFzIG9mIHRoZSBleHBvcnRlZCBgZGVmZXJyZWRgIGZ1bmN0aW9uLCB0byBoZWxwIGNvbnN1bWVycyB3YW50aW5nIHRvIHVzZSBgZGVmZXJyZWRgIGFzIHRoZVxuICogbG9jYWwgdmFyaWFibGUgbmFtZSByYXRoZXIgdGhhbiB0aGUgZmFjdG9yeSBpbXBvcnQgbmFtZSwgd2l0aG91dCBuZWVkaW5nIHRvIHJlbmFtZSBvbiBpbXBvcnQuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuIGltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJ0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRgO1xuIGBgYFxuICovXG5leHBvcnRzLmNyZWF0ZURlZmVycmVkID0gZGVmZXJyZWQ7XG4vKipcbiAqIERlZmF1bHQgZXhwb3J0IGFsbG93cyB1c2UgYXM6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuIGltcG9ydCBkZWZlcnJlZCBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmZXJyZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21wbGV0aW9uRGV0ZWN0aW9uUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgcHJvbWlzZV9kZWZlcnJlZF8xID0gcmVxdWlyZShcIkBrd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgbmV2ZXIgPSBwcm9taXNlX2RlZmVycmVkXzEuZGVmYXVsdCgpLnByb21pc2U7XG5mdW5jdGlvbiBjb21wbGV0aW9uRGV0ZWN0aW9uUGx1Z2luKHsgb25DbG9zZSA9IHRydWUsIG9uRXhpdCA9IDUwIH0gPSB7fSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICAgICAgbGV0IGV4aXRDb2RlID0gLTE7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgICAgICAgIGNsb3NlOiBwcm9taXNlX2RlZmVycmVkXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgY2xvc2VUaW1lb3V0OiBwcm9taXNlX2RlZmVycmVkXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgZXhpdDogcHJvbWlzZV9kZWZlcnJlZF8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIGV4aXRUaW1lb3V0OiBwcm9taXNlX2RlZmVycmVkXzEuZGVmYXVsdCgpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgb25DbG9zZSA9PT0gZmFsc2UgPyBuZXZlciA6IGV2ZW50cy5jbG9zZVRpbWVvdXQucHJvbWlzZSxcbiAgICAgICAgICAgIG9uRXhpdCA9PT0gZmFsc2UgPyBuZXZlciA6IGV2ZW50cy5leGl0VGltZW91dC5wcm9taXNlLFxuICAgICAgICBdKTtcbiAgICAgICAgY29uZmlndXJlVGltZW91dChvbkNsb3NlLCBldmVudHMuY2xvc2UsIGV2ZW50cy5jbG9zZVRpbWVvdXQpO1xuICAgICAgICBjb25maWd1cmVUaW1lb3V0KG9uRXhpdCwgZXZlbnRzLmV4aXQsIGV2ZW50cy5leGl0VGltZW91dCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZShjb2RlKSB7XG4gICAgICAgICAgICAgICAgZXhpdENvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5jbG9zZS5kb25lKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhpdChjb2RlKSB7XG4gICAgICAgICAgICAgICAgZXhpdENvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5leGl0LmRvbmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgZXhpdENvZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXRDb2RlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29uZmlndXJlVGltZW91dChmbGFnLCBldmVudCwgdGltZW91dCkge1xuICAgICAgICBpZiAoZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoZmxhZyA9PT0gdHJ1ZSA/IGV2ZW50LnByb21pc2UgOiBldmVudC5wcm9taXNlLnRoZW4oKCkgPT4gdXRpbHNfMS5kZWxheShmbGFnKSkpLnRoZW4odGltZW91dC5kb25lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFmdGVyJyxcbiAgICAgICAgYWN0aW9uKF9kYXRhLCB7IHNwYXduZWQsIGNsb3NlIH0pIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGNyZWF0ZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIGxldCBkZWZlckNsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcXVpY2tDbG9zZSA9ICgpID0+IHZvaWQgKGRlZmVyQ2xvc2UgPSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgKF9hID0gc3Bhd25lZC5zdGRvdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbignZGF0YScsIHF1aWNrQ2xvc2UpO1xuICAgICAgICAgICAgICAgIChfYiA9IHNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub24oJ2RhdGEnLCBxdWlja0Nsb3NlKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLm9uKCdlcnJvcicsIHF1aWNrQ2xvc2UpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Nsb3NlJywgKGNvZGUpID0+IGV2ZW50cy5jbG9zZShjb2RlKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5vbignZXhpdCcsIChjb2RlKSA9PiBldmVudHMuZXhpdChjb2RlKSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZXZlbnRzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmVyQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHV0aWxzXzEuZGVsYXkoNTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKGV2ZW50cy5leGl0Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoZXZlbnRzLmV4aXRDb2RlLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuY29tcGxldGlvbkRldGVjdGlvblBsdWdpbiA9IGNvbXBsZXRpb25EZXRlY3Rpb25QbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wbGV0aW9uLWRldGVjdGlvbi5wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVycm9yRGV0ZWN0aW9uUGx1Z2luID0gZXhwb3J0cy5lcnJvckRldGVjdGlvbkhhbmRsZXIgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LWVycm9yXCIpO1xuZnVuY3Rpb24gaXNUYXNrRXJyb3IocmVzdWx0KSB7XG4gICAgcmV0dXJuICEhKHJlc3VsdC5leGl0Q29kZSAmJiByZXN1bHQuc3RkRXJyLmxlbmd0aCk7XG59XG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UocmVzdWx0KSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoWy4uLnJlc3VsdC5zdGRPdXQsIC4uLnJlc3VsdC5zdGRFcnJdKTtcbn1cbmZ1bmN0aW9uIGVycm9yRGV0ZWN0aW9uSGFuZGxlcihvdmVyd3JpdGUgPSBmYWxzZSwgaXNFcnJvciA9IGlzVGFza0Vycm9yLCBlcnJvck1lc3NhZ2UgPSBnZXRFcnJvck1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKCghb3ZlcndyaXRlICYmIGVycm9yKSB8fCAhaXNFcnJvcihyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZShyZXN1bHQpO1xuICAgIH07XG59XG5leHBvcnRzLmVycm9yRGV0ZWN0aW9uSGFuZGxlciA9IGVycm9yRGV0ZWN0aW9uSGFuZGxlcjtcbmZ1bmN0aW9uIGVycm9yRGV0ZWN0aW9uUGx1Z2luKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0YXNrLmVycm9yJyxcbiAgICAgICAgYWN0aW9uKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gY29uZmlnKGRhdGEuZXJyb3IsIHtcbiAgICAgICAgICAgICAgICBzdGRFcnI6IGNvbnRleHQuc3RkRXJyLFxuICAgICAgICAgICAgICAgIHN0ZE91dDogY29udGV4dC5zdGRPdXQsXG4gICAgICAgICAgICAgICAgZXhpdENvZGU6IGNvbnRleHQuZXhpdENvZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBlcnJvcjogbmV3IGdpdF9lcnJvcl8xLkdpdEVycm9yKHVuZGVmaW5lZCwgZXJyb3IudG9TdHJpbmcoJ3V0Zi04JykpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmVycm9yRGV0ZWN0aW9uUGx1Z2luID0gZXJyb3JEZXRlY3Rpb25QbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvci1kZXRlY3Rpb24ucGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbHVnaW5TdG9yZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQbHVnaW5TdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgYWRkKHBsdWdpbikge1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW107XG4gICAgICAgIHV0aWxzXzEuYXNBcnJheShwbHVnaW4pLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbiAmJiB0aGlzLnBsdWdpbnMuYWRkKHV0aWxzXzEuYXBwZW5kKHBsdWdpbnMsIHBsdWdpbikpKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gdGhpcy5wbHVnaW5zLmRlbGV0ZShwbHVnaW4pKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZXhlYyh0eXBlLCBkYXRhLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBkYXRhO1xuICAgICAgICBjb25zdCBjb250ZXh0dWFsID0gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKGNvbnRleHQpKTtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5wbHVnaW5zKSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBwbHVnaW4uYWN0aW9uKG91dHB1dCwgY29udGV4dHVhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5leHBvcnRzLlBsdWdpblN0b3JlID0gUGx1Z2luU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbHVnaW4tc3RvcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2dyZXNzTW9uaXRvclBsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBwcm9ncmVzc01vbml0b3JQbHVnaW4ocHJvZ3Jlc3MpIHtcbiAgICBjb25zdCBwcm9ncmVzc0NvbW1hbmQgPSAnLS1wcm9ncmVzcyc7XG4gICAgY29uc3QgcHJvZ3Jlc3NNZXRob2RzID0gWydjaGVja291dCcsICdjbG9uZScsICdmZXRjaCcsICdwdWxsJywgJ3B1c2gnXTtcbiAgICBjb25zdCBvblByb2dyZXNzID0ge1xuICAgICAgICB0eXBlOiAnc3Bhd24uYWZ0ZXInLFxuICAgICAgICBhY3Rpb24oX2RhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICghY29udGV4dC5jb21tYW5kcy5pbmNsdWRlcyhwcm9ncmVzc0NvbW1hbmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY29udGV4dC5zcGF3bmVkLnN0ZGVycikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IC9eKFtcXHNcXFNdKz8pOlxccyooXFxkKyklIFxcKChcXGQrKVxcLyhcXGQrKVxcKS8uZXhlYyhjaHVuay50b1N0cmluZygndXRmOCcpKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9ncmVzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogY29udGV4dC5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlOiBwcm9ncmVzc0V2ZW50U3RhZ2UobWVzc2FnZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1dGlsc18xLmFzTnVtYmVyKG1lc3NhZ2VbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQ6IHV0aWxzXzEuYXNOdW1iZXIobWVzc2FnZVszXSksXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB1dGlsc18xLmFzTnVtYmVyKG1lc3NhZ2VbNF0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uQXJncyA9IHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFyZ3MnLFxuICAgICAgICBhY3Rpb24oYXJncywgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKCFwcm9ncmVzc01ldGhvZHMuaW5jbHVkZXMoY29udGV4dC5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5pbmNsdWRpbmcoYXJncywgcHJvZ3Jlc3NDb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFtvbkFyZ3MsIG9uUHJvZ3Jlc3NdO1xufVxuZXhwb3J0cy5wcm9ncmVzc01vbml0b3JQbHVnaW4gPSBwcm9ncmVzc01vbml0b3JQbHVnaW47XG5mdW5jdGlvbiBwcm9ncmVzc0V2ZW50U3RhZ2UoaW5wdXQpIHtcbiAgICByZXR1cm4gU3RyaW5nKGlucHV0LnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnLCAxKSkgfHwgJ3Vua25vd24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvZ3Jlc3MtbW9uaXRvci1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3Bhd25PcHRpb25zUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHNwYXduT3B0aW9uc1BsdWdpbihzcGF3bk9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdXRpbHNfMS5waWNrKHNwYXduT3B0aW9ucywgWyd1aWQnLCAnZ2lkJ10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5vcHRpb25zJyxcbiAgICAgICAgYWN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5zcGF3bk9wdGlvbnNQbHVnaW4gPSBzcGF3bk9wdGlvbnNQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGF3bi1vcHRpb25zLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGltZW91dFBsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IGdpdF9wbHVnaW5fZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LXBsdWdpbi1lcnJvclwiKTtcbmZ1bmN0aW9uIHRpbWVvdXRQbHVnaW4oeyBibG9jayB9KSB7XG4gICAgaWYgKGJsb2NrID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ3NwYXduLmFmdGVyJyxcbiAgICAgICAgICAgIGFjdGlvbihfZGF0YSwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gd2FpdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCAmJiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGtpbGwsIGJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGV4dC5zcGF3bmVkLnN0ZG91dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9mZignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjb250ZXh0LnNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub2ZmKCdkYXRhJywgd2FpdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vZmYoJ2V4aXQnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zcGF3bmVkLm9mZignY2xvc2UnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24ga2lsbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmtpbGwobmV3IGdpdF9wbHVnaW5fZXJyb3JfMS5HaXRQbHVnaW5FcnJvcih1bmRlZmluZWQsICd0aW1lb3V0JywgYGJsb2NrIHRpbWVvdXQgcmVhY2hlZGApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gY29udGV4dC5zcGF3bmVkLnN0ZG91dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uKCdkYXRhJywgd2FpdCk7XG4gICAgICAgICAgICAgICAgKF9iID0gY29udGV4dC5zcGF3bmVkLnN0ZGVycikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9uKCdkYXRhJywgd2FpdCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zcGF3bmVkLm9uKCdleGl0Jywgc3RvcCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zcGF3bmVkLm9uKCdjbG9zZScsIHN0b3ApO1xuICAgICAgICAgICAgICAgIHdhaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLnRpbWVvdXRQbHVnaW4gPSB0aW1lb3V0UGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltb3V0LXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1hbmQtY29uZmlnLXByZWZpeGluZy1wbHVnaW5cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbXBsZXRpb24tZGV0ZWN0aW9uLnBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZXJyb3ItZGV0ZWN0aW9uLnBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcGx1Z2luLXN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wcm9ncmVzcy1tb25pdG9yLXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2ltcGxlLWdpdC1wbHVnaW5cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NwYXduLW9wdGlvbnMtcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1vdXQtcGx1Z2luXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRMb2dnZXIgPSBleHBvcnRzLmNyZWF0ZUxvZ2dlciA9IHZvaWQgMDtcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiZGVidWdcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5kZWJ1Z18xLmRlZmF1bHQuZm9ybWF0dGVycy5MID0gKHZhbHVlKSA9PiBTdHJpbmcodXRpbHNfMS5maWx0ZXJIYXNMZW5ndGgodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogJy0nKTtcbmRlYnVnXzEuZGVmYXVsdC5mb3JtYXR0ZXJzLkIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUxvZygpIHtcbiAgICByZXR1cm4gZGVidWdfMS5kZWZhdWx0KCdzaW1wbGUtZ2l0Jyk7XG59XG5mdW5jdGlvbiBwcmVmaXhlZExvZ2dlcih0bywgcHJlZml4LCBmb3J3YXJkKSB7XG4gICAgaWYgKCFwcmVmaXggfHwgIVN0cmluZyhwcmVmaXgpLnJlcGxhY2UoL1xccyovLCAnJykpIHtcbiAgICAgICAgcmV0dXJuICFmb3J3YXJkID8gdG8gOiAobWVzc2FnZSwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgdG8obWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgICAgICBmb3J3YXJkKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdG8oYCVzICR7bWVzc2FnZX1gLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgZm9yd2FyZChtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjaGlsZExvZ2dlck5hbWUobmFtZSwgY2hpbGREZWJ1Z2dlciwgeyBuYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGROYW1lc3BhY2UgPSBjaGlsZERlYnVnZ2VyICYmIGNoaWxkRGVidWdnZXIubmFtZXNwYWNlIHx8ICcnO1xuICAgIGlmIChjaGlsZE5hbWVzcGFjZS5zdGFydHNXaXRoKHBhcmVudE5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTmFtZXNwYWNlLnN1YnN0cihwYXJlbnROYW1lc3BhY2UubGVuZ3RoICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5hbWVzcGFjZSB8fCBwYXJlbnROYW1lc3BhY2U7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIobGFiZWwsIHZlcmJvc2UsIGluaXRpYWxTdGVwLCBpbmZvRGVidWdnZXIgPSBjcmVhdGVMb2coKSkge1xuICAgIGNvbnN0IGxhYmVsUHJlZml4ID0gbGFiZWwgJiYgYFske2xhYmVsfV1gIHx8ICcnO1xuICAgIGNvbnN0IHNwYXduZWQgPSBbXTtcbiAgICBjb25zdCBkZWJ1Z0RlYnVnZ2VyID0gKHR5cGVvZiB2ZXJib3NlID09PSAnc3RyaW5nJykgPyBpbmZvRGVidWdnZXIuZXh0ZW5kKHZlcmJvc2UpIDogdmVyYm9zZTtcbiAgICBjb25zdCBrZXkgPSBjaGlsZExvZ2dlck5hbWUodXRpbHNfMS5maWx0ZXJUeXBlKHZlcmJvc2UsIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSwgZGVidWdEZWJ1Z2dlciwgaW5mb0RlYnVnZ2VyKTtcbiAgICByZXR1cm4gc3RlcChpbml0aWFsU3RlcCk7XG4gICAgZnVuY3Rpb24gc2libGluZyhuYW1lLCBpbml0aWFsKSB7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmFwcGVuZChzcGF3bmVkLCBjcmVhdGVMb2dnZXIobGFiZWwsIGtleS5yZXBsYWNlKC9eW146XSsvLCBuYW1lKSwgaW5pdGlhbCwgaW5mb0RlYnVnZ2VyKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXAocGhhc2UpIHtcbiAgICAgICAgY29uc3Qgc3RlcFByZWZpeCA9IHBoYXNlICYmIGBbJHtwaGFzZX1dYCB8fCAnJztcbiAgICAgICAgY29uc3QgZGVidWcgPSBkZWJ1Z0RlYnVnZ2VyICYmIHByZWZpeGVkTG9nZ2VyKGRlYnVnRGVidWdnZXIsIHN0ZXBQcmVmaXgpIHx8IHV0aWxzXzEuTk9PUDtcbiAgICAgICAgY29uc3QgaW5mbyA9IHByZWZpeGVkTG9nZ2VyKGluZm9EZWJ1Z2dlciwgYCR7bGFiZWxQcmVmaXh9ICR7c3RlcFByZWZpeH1gLCBkZWJ1Zyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlYnVnRGVidWdnZXIgPyBkZWJ1ZyA6IGluZm8sIHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgc2libGluZyxcbiAgICAgICAgICAgIGluZm8sXG4gICAgICAgICAgICBzdGVwLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcjtcbi8qKlxuICogVGhlIGBHaXRMb2dnZXJgIGlzIHVzZWQgYnkgdGhlIG1haW4gYFNpbXBsZUdpdGAgcnVubmVyIHRvIGhhbmRsZSBsb2dnaW5nXG4gKiBhbnkgd2FybmluZ3Mgb3IgZXJyb3JzLlxuICovXG5jbGFzcyBHaXRMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9vdXQgPSBjcmVhdGVMb2coKSkge1xuICAgICAgICB0aGlzLl9vdXQgPSBfb3V0O1xuICAgICAgICB0aGlzLmVycm9yID0gcHJlZml4ZWRMb2dnZXIoX291dCwgJ1tFUlJPUl0nKTtcbiAgICAgICAgdGhpcy53YXJuID0gcHJlZml4ZWRMb2dnZXIoX291dCwgJ1tXQVJOXScpO1xuICAgIH1cbiAgICBzaWxlbnQoc2lsZW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChzaWxlbmNlICE9PSB0aGlzLl9vdXQuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSB0aGlzLl9vdXQ7XG4gICAgICAgIGNvbnN0IGVudiA9IChwcm9jZXNzLmVudi5ERUJVRyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIocyA9PiAhIXMpO1xuICAgICAgICBjb25zdCBoYXNPbiA9IGVudi5pbmNsdWRlcyhuYW1lc3BhY2UpO1xuICAgICAgICBjb25zdCBoYXNPZmYgPSBlbnYuaW5jbHVkZXMoYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgLy8gZW5hYmxpbmcgdGhlIGxvZ1xuICAgICAgICBpZiAoIXNpbGVuY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPZmYpIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlbW92ZShlbnYsIGAtJHtuYW1lc3BhY2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnYucHVzaChuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc09uKSB7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5yZW1vdmUoZW52LCBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW52LnB1c2goYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z18xLmRlZmF1bHQuZW5hYmxlKGVudi5qb2luKCcsJykpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0TG9nZ2VyID0gR2l0TG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWxvZ2dlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFza3NQZW5kaW5nUXVldWUgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LWVycm9yXCIpO1xuY29uc3QgZ2l0X2xvZ2dlcl8xID0gcmVxdWlyZShcIi4uL2dpdC1sb2dnZXJcIik7XG5jbGFzcyBUYXNrc1BlbmRpbmdRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IobG9nTGFiZWwgPSAnR2l0RXhlY3V0b3InKSB7XG4gICAgICAgIHRoaXMubG9nTGFiZWwgPSBsb2dMYWJlbDtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHdpdGhQcm9ncmVzcyh0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZS5nZXQodGFzayk7XG4gICAgfVxuICAgIGNyZWF0ZVByb2dyZXNzKHRhc2spIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IFRhc2tzUGVuZGluZ1F1ZXVlLmdldE5hbWUodGFzay5jb21tYW5kc1swXSk7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IGdpdF9sb2dnZXJfMS5jcmVhdGVMb2dnZXIodGhpcy5sb2dMYWJlbCwgbmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrLFxuICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHVzaCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5jcmVhdGVQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgcHJvZ3Jlc3MubG9nZ2VyKCdBZGRpbmcgdGFzayB0byB0aGUgcXVldWUsIGNvbW1hbmRzID0gJW8nLCB0YXNrLmNvbW1hbmRzKTtcbiAgICAgICAgdGhpcy5fcXVldWUuc2V0KHRhc2ssIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH1cbiAgICBmYXRhbChlcnIpIHtcbiAgICAgICAgZm9yIChjb25zdCBbdGFzaywgeyBsb2dnZXIgfV0gb2YgQXJyYXkuZnJvbSh0aGlzLl9xdWV1ZS5lbnRyaWVzKCkpKSB7XG4gICAgICAgICAgICBpZiAodGFzayA9PT0gZXJyLnRhc2spIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgRmFpbGVkICVvYCwgZXJyKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIoYEZhdGFsIGV4Y2VwdGlvbiwgYW55IGFzLXlldCB1bi1zdGFydGVkIHRhc2tzIHJ1biB0aHJvdWdoIHRoaXMgZXhlY3V0b3Igd2lsbCBub3QgYmUgYXR0ZW1wdGVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgQSBmYXRhbCBleGNlcHRpb24gb2NjdXJyZWQgaW4gYSBwcmV2aW91cyB0YXNrLCB0aGUgcXVldWUgaGFzIGJlZW4gcHVyZ2VkOiAlb2AsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLnNpemUgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUXVldWUgc2l6ZSBzaG91bGQgYmUgemVybyBhZnRlciBmYXRhbDogJHt0aGlzLl9xdWV1ZS5zaXplfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBsZXRlKHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLndpdGhQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0ZW1wdCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy53aXRoUHJvZ3Jlc3ModGFzayk7XG4gICAgICAgIGlmICghcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih1bmRlZmluZWQsICdUYXNrc1BlbmRpbmdRdWV1ZTogYXR0ZW1wdCBjYWxsZWQgZm9yIGFuIHVua25vd24gdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIHByb2dyZXNzLmxvZ2dlcignU3RhcnRpbmcgdGFzaycpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROYW1lKG5hbWUgPSAnZW1wdHknKSB7XG4gICAgICAgIHJldHVybiBgdGFzazoke25hbWV9OiR7KytUYXNrc1BlbmRpbmdRdWV1ZS5jb3VudGVyfWA7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrc1BlbmRpbmdRdWV1ZSA9IFRhc2tzUGVuZGluZ1F1ZXVlO1xuVGFza3NQZW5kaW5nUXVldWUuY291bnRlciA9IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrcy1wZW5kaW5nLXF1ZXVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdEV4ZWN1dG9yQ2hhaW4gPSB2b2lkIDA7XG5jb25zdCBjaGlsZF9wcm9jZXNzXzEgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi4vdGFza3MvdGFza1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB0YXNrc19wZW5kaW5nX3F1ZXVlXzEgPSByZXF1aXJlKFwiLi90YXNrcy1wZW5kaW5nLXF1ZXVlXCIpO1xuY2xhc3MgR2l0RXhlY3V0b3JDaGFpbiB7XG4gICAgY29uc3RydWN0b3IoX2V4ZWN1dG9yLCBfc2NoZWR1bGVyLCBfcGx1Z2lucykge1xuICAgICAgICB0aGlzLl9leGVjdXRvciA9IF9leGVjdXRvcjtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVyID0gX3NjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5fcGx1Z2lucyA9IF9wbHVnaW5zO1xuICAgICAgICB0aGlzLl9jaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyB0YXNrc19wZW5kaW5nX3F1ZXVlXzEuVGFza3NQZW5kaW5nUXVldWUoKTtcbiAgICB9XG4gICAgZ2V0IGJpbmFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLmJpbmFyeTtcbiAgICB9XG4gICAgZ2V0IGN3ZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N3ZCB8fCB0aGlzLl9leGVjdXRvci5jd2Q7XG4gICAgfVxuICAgIHNldCBjd2QoY3dkKSB7XG4gICAgICAgIHRoaXMuX2N3ZCA9IGN3ZDtcbiAgICB9XG4gICAgZ2V0IGVudigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLmVudjtcbiAgICB9XG4gICAgZ2V0IG91dHB1dEhhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRvci5vdXRwdXRIYW5kbGVyO1xuICAgIH1cbiAgICBjaGFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1c2godGFzaykge1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHRhc2spO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW4gPSB0aGlzLl9jaGFpbi50aGVuKCgpID0+IHRoaXMuYXR0ZW1wdFRhc2sodGFzaykpO1xuICAgIH1cbiAgICBhdHRlbXB0VGFzayh0YXNrKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvblNjaGVkdWxlQ29tcGxldGUgPSB5aWVsZCB0aGlzLl9zY2hlZHVsZXIubmV4dCgpO1xuICAgICAgICAgICAgY29uc3Qgb25RdWV1ZUNvbXBsZXRlID0gKCkgPT4gdGhpcy5fcXVldWUuY29tcGxldGUodGFzayk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9nZ2VyIH0gPSB0aGlzLl9xdWV1ZS5hdHRlbXB0KHRhc2spO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCAodGFza18xLmlzRW1wdHlUYXNrKHRhc2spXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5hdHRlbXB0RW1wdHlUYXNrKHRhc2ssIGxvZ2dlcilcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmF0dGVtcHRSZW1vdGVUYXNrKHRhc2ssIGxvZ2dlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLm9uRmF0YWxFeGNlcHRpb24odGFzaywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBvblF1ZXVlQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICBvblNjaGVkdWxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uRmF0YWxFeGNlcHRpb24odGFzaywgZSkge1xuICAgICAgICBjb25zdCBnaXRFcnJvciA9IChlIGluc3RhbmNlb2YgZ2l0X2Vycm9yXzEuR2l0RXJyb3IpID8gT2JqZWN0LmFzc2lnbihlLCB7IHRhc2sgfSkgOiBuZXcgZ2l0X2Vycm9yXzEuR2l0RXJyb3IodGFzaywgZSAmJiBTdHJpbmcoZSkpO1xuICAgICAgICB0aGlzLl9jaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9xdWV1ZS5mYXRhbChnaXRFcnJvcik7XG4gICAgICAgIHJldHVybiBnaXRFcnJvcjtcbiAgICB9XG4gICAgYXR0ZW1wdFJlbW90ZVRhc2sodGFzaywgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5fcGx1Z2lucy5leGVjKCdzcGF3bi5hcmdzJywgWy4uLnRhc2suY29tbWFuZHNdLCBwbHVnaW5Db250ZXh0KHRhc2ssIHRhc2suY29tbWFuZHMpKTtcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IHlpZWxkIHRoaXMuZ2l0UmVzcG9uc2UodGFzaywgdGhpcy5iaW5hcnksIGFyZ3MsIHRoaXMub3V0cHV0SGFuZGxlciwgbG9nZ2VyLnN0ZXAoJ1NQQVdOJykpO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0U3RyZWFtcyA9IHlpZWxkIHRoaXMuaGFuZGxlVGFza0RhdGEodGFzaywgYXJncywgcmF3LCBsb2dnZXIuc3RlcCgnSEFORExFJykpO1xuICAgICAgICAgICAgbG9nZ2VyKGBwYXNzaW5nIHJlc3BvbnNlIHRvIHRhc2sncyBwYXJzZXIgYXMgYSAlc2AsIHRhc2suZm9ybWF0KTtcbiAgICAgICAgICAgIGlmICh0YXNrXzEuaXNCdWZmZXJUYXNrKHRhc2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuY2FsbFRhc2tQYXJzZXIodGFzay5wYXJzZXIsIG91dHB1dFN0cmVhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuY2FsbFRhc2tQYXJzZXIodGFzay5wYXJzZXIsIG91dHB1dFN0cmVhbXMuYXNTdHJpbmdzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXR0ZW1wdEVtcHR5VGFzayh0YXNrLCBsb2dnZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZ2dlcihgZW1wdHkgdGFzayBieXBhc3NpbmcgY2hpbGQgcHJvY2VzcyB0byBjYWxsIHRvIHRhc2sncyBwYXJzZXJgKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnBhcnNlcih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVRhc2tEYXRhKHRhc2ssIGFyZ3MsIHJlc3VsdCwgbG9nZ2VyKSB7XG4gICAgICAgIGNvbnN0IHsgZXhpdENvZGUsIHJlamVjdGlvbiwgc3RkT3V0LCBzdGRFcnIgfSA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChkb25lLCBmYWlsKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIoYFByZXBhcmluZyB0byBoYW5kbGUgcHJvY2VzcyByZXNwb25zZSBleGl0Q29kZT0lZCBzdGRPdXQ9YCwgZXhpdENvZGUpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5fcGx1Z2lucy5leGVjKCd0YXNrLmVycm9yJywgeyBlcnJvcjogcmVqZWN0aW9uIH0sIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGx1Z2luQ29udGV4dCh0YXNrLCBhcmdzKSksIHJlc3VsdCkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRhc2sub25FcnJvcikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBleGl0Q29kZT0lcyBoYW5kbGluZyB3aXRoIGN1c3RvbSBlcnJvciBoYW5kbGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sub25FcnJvcihyZXN1bHQsIGVycm9yLCAobmV3U3RkT3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBjdXN0b20gZXJyb3IgaGFuZGxlciB0cmVhdGVkIGFzIHN1Y2Nlc3NgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBjdXN0b20gZXJyb3IgcmV0dXJuZWQgYSAlc2AsIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcobmV3U3RkT3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhBcnJheS5pc0FycmF5KG5ld1N0ZE91dCkgPyBCdWZmZXIuY29uY2F0KG5ld1N0ZE91dCkgOiBuZXdTdGRPdXQsIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICAgICAgICAgIH0sIGZhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYGhhbmRsaW5nIGFzIGVycm9yOiBleGl0Q29kZT0lcyBzdGRFcnI9JXMgcmVqZWN0aW9uPSVvYCwgZXhpdENvZGUsIHN0ZEVyci5sZW5ndGgsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYHJldHJpZXZpbmcgdGFzayBvdXRwdXQgY29tcGxldGVgKTtcbiAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhCdWZmZXIuY29uY2F0KHN0ZE91dCksIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2l0UmVzcG9uc2UodGFzaywgY29tbWFuZCwgYXJncywgb3V0cHV0SGFuZGxlciwgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRMb2dnZXIgPSBsb2dnZXIuc2libGluZygnb3V0cHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzcGF3bk9wdGlvbnMgPSB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLm9wdGlvbnMnLCB7XG4gICAgICAgICAgICAgICAgY3dkOiB0aGlzLmN3ZCxcbiAgICAgICAgICAgICAgICBlbnY6IHRoaXMuZW52LFxuICAgICAgICAgICAgICAgIHdpbmRvd3NIaWRlOiB0cnVlLFxuICAgICAgICAgICAgfSwgcGx1Z2luQ29udGV4dCh0YXNrLCB0YXNrLmNvbW1hbmRzKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGRvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRPdXQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRFcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAlcyAlb2AsIGNvbW1hbmQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxvZ2dlcignJU8nLCBzcGF3bk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYXduZWQgPSBjaGlsZF9wcm9jZXNzXzEuc3Bhd24oY29tbWFuZCwgYXJncywgc3Bhd25PcHRpb25zKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLnN0ZG91dC5vbignZGF0YScsIG9uRGF0YVJlY2VpdmVkKHN0ZE91dCwgJ3N0ZE91dCcsIGxvZ2dlciwgb3V0cHV0TG9nZ2VyLnN0ZXAoJ3N0ZE91dCcpKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5zdGRlcnIub24oJ2RhdGEnLCBvbkRhdGFSZWNlaXZlZChzdGRFcnIsICdzdGRFcnInLCBsb2dnZXIsIG91dHB1dExvZ2dlci5zdGVwKCdzdGRFcnInKSkpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Vycm9yJywgb25FcnJvclJlY2VpdmVkKHN0ZEVyciwgbG9nZ2VyKSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBQYXNzaW5nIGNoaWxkIHByb2Nlc3Mgc3RkT3V0L3N0ZEVyciB0byBjdXN0b20gb3V0cHV0SGFuZGxlcmApO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRIYW5kbGVyKGNvbW1hbmQsIHNwYXduZWQuc3Rkb3V0LCBzcGF3bmVkLnN0ZGVyciwgWy4uLmFyZ3NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGx1Z2lucy5leGVjKCdzcGF3bi5hZnRlcicsIHVuZGVmaW5lZCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwbHVnaW5Db250ZXh0KHRhc2ssIGFyZ3MpKSwgeyBzcGF3bmVkLCBjbG9zZShleGl0Q29kZSwgcmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGRPdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RkRXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGlvbjogcmVqZWN0aW9uIHx8IHJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBraWxsKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYXduZWQua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0aW9uID0gcmVhc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25lZC5raWxsKCdTSUdJTlQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvckNoYWluID0gR2l0RXhlY3V0b3JDaGFpbjtcbmZ1bmN0aW9uIHBsdWdpbkNvbnRleHQodGFzaywgY29tbWFuZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6IHV0aWxzXzEuZmlyc3QodGFzay5jb21tYW5kcykgfHwgJycsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgIH07XG59XG5mdW5jdGlvbiBvbkVycm9yUmVjZWl2ZWQodGFyZ2V0LCBsb2dnZXIpIHtcbiAgICByZXR1cm4gKGVycikgPT4ge1xuICAgICAgICBsb2dnZXIoYFtFUlJPUl0gY2hpbGQgcHJvY2VzcyBleGNlcHRpb24gJW9gLCBlcnIpO1xuICAgICAgICB0YXJnZXQucHVzaChCdWZmZXIuZnJvbShTdHJpbmcoZXJyLnN0YWNrKSwgJ2FzY2lpJykpO1xuICAgIH07XG59XG5mdW5jdGlvbiBvbkRhdGFSZWNlaXZlZCh0YXJnZXQsIG5hbWUsIGxvZ2dlciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIChidWZmZXIpID0+IHtcbiAgICAgICAgbG9nZ2VyKGAlcyByZWNlaXZlZCAlTCBieXRlc2AsIG5hbWUsIGJ1ZmZlcik7XG4gICAgICAgIG91dHB1dChgJUJgLCBidWZmZXIpO1xuICAgICAgICB0YXJnZXQucHVzaChidWZmZXIpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXhlY3V0b3ItY2hhaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdEV4ZWN1dG9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2V4ZWN1dG9yX2NoYWluXzEgPSByZXF1aXJlKFwiLi9naXQtZXhlY3V0b3ItY2hhaW5cIik7XG5jbGFzcyBHaXRFeGVjdXRvciB7XG4gICAgY29uc3RydWN0b3IoYmluYXJ5ID0gJ2dpdCcsIGN3ZCwgX3NjaGVkdWxlciwgX3BsdWdpbnMpIHtcbiAgICAgICAgdGhpcy5iaW5hcnkgPSBiaW5hcnk7XG4gICAgICAgIHRoaXMuY3dkID0gY3dkO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBfc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gX3BsdWdpbnM7XG4gICAgICAgIHRoaXMuX2NoYWluID0gbmV3IGdpdF9leGVjdXRvcl9jaGFpbl8xLkdpdEV4ZWN1dG9yQ2hhaW4odGhpcywgdGhpcy5fc2NoZWR1bGVyLCB0aGlzLl9wbHVnaW5zKTtcbiAgICB9XG4gICAgY2hhaW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgZ2l0X2V4ZWN1dG9yX2NoYWluXzEuR2l0RXhlY3V0b3JDaGFpbih0aGlzLCB0aGlzLl9zY2hlZHVsZXIsIHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYWluLnB1c2godGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvciA9IEdpdEV4ZWN1dG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWV4ZWN1dG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5mdW5jdGlvbiB0YXNrQ2FsbGJhY2sodGFzaywgcmVzcG9uc2UsIGNhbGxiYWNrID0gdXRpbHNfMS5OT09QKSB7XG4gICAgY29uc3Qgb25TdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAoKGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci50YXNrKSA9PT0gdGFzaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKGVyciBpbnN0YW5jZW9mIGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IpID8gYWRkRGVwcmVjYXRpb25Ob3RpY2VUb0Vycm9yKGVycikgOiBlcnIsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlc3BvbnNlLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbn1cbmV4cG9ydHMudGFza0NhbGxiYWNrID0gdGFza0NhbGxiYWNrO1xuZnVuY3Rpb24gYWRkRGVwcmVjYXRpb25Ob3RpY2VUb0Vycm9yKGVycikge1xuICAgIGxldCBsb2cgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oYHNpbXBsZS1naXQgZGVwcmVjYXRpb24gbm90aWNlOiBhY2Nlc3NpbmcgR2l0UmVzcG9uc2VFcnJvci4ke25hbWV9IHNob3VsZCBiZSBHaXRSZXNwb25zZUVycm9yLmdpdC4ke25hbWV9LCB0aGlzIHdpbGwgbm8gbG9uZ2VyIGJlIGF2YWlsYWJsZSBpbiB2ZXJzaW9uIDNgKTtcbiAgICAgICAgbG9nID0gdXRpbHNfMS5OT09QO1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZXJyLCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlcnIuZ2l0KS5yZWR1Y2UoZGVzY3JpcHRvclJlZHVjZXIsIHt9KSk7XG4gICAgZnVuY3Rpb24gZGVzY3JpcHRvclJlZHVjZXIoYWxsLCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lIGluIGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgICAgfVxuICAgICAgICBhbGxbbmFtZV0gPSB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgbG9nKG5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnIuZ2l0W25hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gY2hhbmdlV29ya2luZ0RpcmVjdG9yeVRhc2soZGlyZWN0b3J5LCByb290KSB7XG4gICAgcmV0dXJuIHRhc2tfMS5hZGhvY0V4ZWNUYXNrKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBpZiAoIXV0aWxzXzEuZm9sZGVyRXhpc3RzKGRpcmVjdG9yeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgR2l0LmN3ZDogY2Fubm90IGNoYW5nZSB0byBub24tZGlyZWN0b3J5IFwiJHtkaXJlY3Rvcnl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKChyb290IHx8IGluc3RhbmNlKS5jd2QgPSBkaXJlY3RvcnkpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayA9IGNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhbmdlLXdvcmtpbmctZGlyZWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNoT2JqZWN0VGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG4vKipcbiAqIFRhc2sgdXNlZCBieSBgZ2l0Lmhhc2hPYmplY3RgXG4gKi9cbmZ1bmN0aW9uIGhhc2hPYmplY3RUYXNrKGZpbGVQYXRoLCB3cml0ZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydoYXNoLW9iamVjdCcsIGZpbGVQYXRoXTtcbiAgICBpZiAod3JpdGUpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLXcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzLCB0cnVlKTtcbn1cbmV4cG9ydHMuaGFzaE9iamVjdFRhc2sgPSBoYXNoT2JqZWN0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhc2gtb2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUluaXQgPSBleHBvcnRzLkluaXRTdW1tYXJ5ID0gdm9pZCAwO1xuY2xhc3MgSW5pdFN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKGJhcmUsIHBhdGgsIGV4aXN0aW5nLCBnaXREaXIpIHtcbiAgICAgICAgdGhpcy5iYXJlID0gYmFyZTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5leGlzdGluZyA9IGV4aXN0aW5nO1xuICAgICAgICB0aGlzLmdpdERpciA9IGdpdERpcjtcbiAgICB9XG59XG5leHBvcnRzLkluaXRTdW1tYXJ5ID0gSW5pdFN1bW1hcnk7XG5jb25zdCBpbml0UmVzcG9uc2VSZWdleCA9IC9eSW5pdC4rIHJlcG9zaXRvcnkgaW4gKC4rKSQvO1xuY29uc3QgcmVJbml0UmVzcG9uc2VSZWdleCA9IC9eUmVpbi4rIGluICguKykkLztcbmZ1bmN0aW9uIHBhcnNlSW5pdChiYXJlLCBwYXRoLCB0ZXh0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBTdHJpbmcodGV4dCkudHJpbSgpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKChyZXN1bHQgPSBpbml0UmVzcG9uc2VSZWdleC5leGVjKHJlc3BvbnNlKSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbml0U3VtbWFyeShiYXJlLCBwYXRoLCBmYWxzZSwgcmVzdWx0WzFdKTtcbiAgICB9XG4gICAgaWYgKChyZXN1bHQgPSByZUluaXRSZXNwb25zZVJlZ2V4LmV4ZWMocmVzcG9uc2UpKSkge1xuICAgICAgICByZXR1cm4gbmV3IEluaXRTdW1tYXJ5KGJhcmUsIHBhdGgsIHRydWUsIHJlc3VsdFsxXSk7XG4gICAgfVxuICAgIGxldCBnaXREaXIgPSAnJztcbiAgICBjb25zdCB0b2tlbnMgPSByZXNwb25zZS5zcGxpdCgnICcpO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0b2tlbiA9PT0gJ2luJykge1xuICAgICAgICAgICAgZ2l0RGlyID0gdG9rZW5zLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgSW5pdFN1bW1hcnkoYmFyZSwgcGF0aCwgL15yZS9pLnRlc3QocmVzcG9uc2UpLCBnaXREaXIpO1xufVxuZXhwb3J0cy5wYXJzZUluaXQgPSBwYXJzZUluaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbml0U3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBJbml0U3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeVwiKTtcbmNvbnN0IGJhcmVDb21tYW5kID0gJy0tYmFyZSc7XG5mdW5jdGlvbiBoYXNCYXJlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgcmV0dXJuIGNvbW1hbmQuaW5jbHVkZXMoYmFyZUNvbW1hbmQpO1xufVxuZnVuY3Rpb24gaW5pdFRhc2soYmFyZSA9IGZhbHNlLCBwYXRoLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2luaXQnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoYmFyZSAmJiAhaGFzQmFyZUNvbW1hbmQoY29tbWFuZHMpKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCBiYXJlQ29tbWFuZCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gSW5pdFN1bW1hcnlfMS5wYXJzZUluaXQoY29tbWFuZHMuaW5jbHVkZXMoJy0tYmFyZScpLCBwYXRoLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmluaXRUYXNrID0gaW5pdFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbml0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EaWZmU3VtbWFyeSA9IHZvaWQgMDtcbi8qKipcbiAqIFRoZSBEaWZmU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICovXG5jbGFzcyBEaWZmU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IDA7XG4gICAgICAgIHRoaXMuZGVsZXRpb25zID0gMDtcbiAgICAgICAgdGhpcy5pbnNlcnRpb25zID0gMDtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuRGlmZlN1bW1hcnkgPSBEaWZmU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpZmZTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZURpZmZSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCBEaWZmU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9EaWZmU3VtbWFyeVwiKTtcbmZ1bmN0aW9uIHBhcnNlRGlmZlJlc3VsdChzdGRPdXQpIHtcbiAgICBjb25zdCBsaW5lcyA9IHN0ZE91dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBEaWZmU3VtbWFyeV8xLkRpZmZTdW1tYXJ5KCk7XG4gICAgcmVhZFN1bW1hcnlMaW5lKHN0YXR1cywgbGluZXMucG9wKCkpO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIHRleHRGaWxlQ2hhbmdlKGxpbmUsIHN0YXR1cykgfHwgYmluYXJ5RmlsZUNoYW5nZShsaW5lLCBzdGF0dXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufVxuZXhwb3J0cy5wYXJzZURpZmZSZXN1bHQgPSBwYXJzZURpZmZSZXN1bHQ7XG5mdW5jdGlvbiByZWFkU3VtbWFyeUxpbmUoc3RhdHVzLCBzdW1tYXJ5KSB7XG4gICAgKHN1bW1hcnkgfHwgJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcsICcpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSAvKFxcZCspXFxzKFthLXpdKykvLmV4ZWModGV4dCk7XG4gICAgICAgIGlmICghc3VtbWFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1bW1hcnlUeXBlKHN0YXR1cywgc3VtbWFyeVsyXSwgcGFyc2VJbnQoc3VtbWFyeVsxXSwgMTApKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN1bW1hcnlUeXBlKHN0YXR1cywga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IG1hdGNoID0gKC8oW2Etel0rPylzP1xcYi8uZXhlYyhrZXkpKTtcbiAgICBpZiAoIW1hdGNoIHx8ICFzdGF0dXNVcGRhdGVbbWF0Y2hbMV1dKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdHVzVXBkYXRlW21hdGNoWzFdXShzdGF0dXMsIHZhbHVlKTtcbn1cbmNvbnN0IHN0YXR1c1VwZGF0ZSA9IHtcbiAgICBmaWxlKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmNoYW5nZWQgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGRlbGV0aW9uKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmRlbGV0aW9ucyA9IHZhbHVlO1xuICAgIH0sXG4gICAgaW5zZXJ0aW9uKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmluc2VydGlvbnMgPSB2YWx1ZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gdGV4dEZpbGVDaGFuZ2UoaW5wdXQsIHsgZmlsZXMgfSkge1xuICAgIGNvbnN0IGxpbmUgPSBpbnB1dC50cmltKCkubWF0Y2goL14oLispXFxzK1xcfFxccysoXFxkKykoXFxzK1srXFwtXSspPyQvKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgICB2YXIgYWx0ZXJhdGlvbnMgPSAobGluZVszXSB8fCAnJykudHJpbSgpO1xuICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGZpbGU6IGxpbmVbMV0udHJpbSgpLFxuICAgICAgICAgICAgY2hhbmdlczogcGFyc2VJbnQobGluZVsyXSwgMTApLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogYWx0ZXJhdGlvbnMucmVwbGFjZSgvLS9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgICAgZGVsZXRpb25zOiBhbHRlcmF0aW9ucy5yZXBsYWNlKC9cXCsvZywgJycpLmxlbmd0aCxcbiAgICAgICAgICAgIGJpbmFyeTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBiaW5hcnlGaWxlQ2hhbmdlKGlucHV0LCB7IGZpbGVzIH0pIHtcbiAgICBjb25zdCBsaW5lID0gaW5wdXQubWF0Y2goL14oLispIFxcfFxccytCaW4gKFswLTkuXSspIC0+IChbMC05Ll0rKSAoW2Etel0rKSQvKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGZpbGU6IGxpbmVbMV0udHJpbSgpLFxuICAgICAgICAgICAgYmVmb3JlOiArbGluZVsyXSxcbiAgICAgICAgICAgIGFmdGVyOiArbGluZVszXSxcbiAgICAgICAgICAgIGJpbmFyeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWRpZmYtc3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIgPSBleHBvcnRzLlNQTElUVEVSID0gZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkgPSBleHBvcnRzLlNUQVJUX0JPVU5EQVJZID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX2RpZmZfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4vcGFyc2UtZGlmZi1zdW1tYXJ5XCIpO1xuZXhwb3J0cy5TVEFSVF9CT1VOREFSWSA9ICfDssOyw7LDssOyw7IgJztcbmV4cG9ydHMuQ09NTUlUX0JPVU5EQVJZID0gJyDDssOyJztcbmV4cG9ydHMuU1BMSVRURVIgPSAnIMOyICc7XG5jb25zdCBkZWZhdWx0RmllbGROYW1lcyA9IFsnaGFzaCcsICdkYXRlJywgJ21lc3NhZ2UnLCAncmVmcycsICdhdXRob3JfbmFtZScsICdhdXRob3JfZW1haWwnXTtcbmZ1bmN0aW9uIGxpbmVCdWlsZGVyKHRva2VucywgZmllbGRzKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGxpbmUsIGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBsaW5lW2ZpZWxkXSA9IHRva2Vuc1tpbmRleF0gfHwgJyc7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH0sIE9iamVjdC5jcmVhdGUoeyBkaWZmOiBudWxsIH0pKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyKHNwbGl0dGVyID0gZXhwb3J0cy5TUExJVFRFUiwgZmllbGRzID0gZGVmYXVsdEZpZWxkTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0ZE91dCkge1xuICAgICAgICBjb25zdCBhbGwgPSB1dGlsc18xLnRvTGluZXNXaXRoQ29udGVudChzdGRPdXQsIHRydWUsIGV4cG9ydHMuU1RBUlRfQk9VTkRBUlkpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lRGV0YWlsID0gaXRlbS50cmltKCkuc3BsaXQoZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkpO1xuICAgICAgICAgICAgY29uc3QgbGlzdExvZ0xpbmUgPSBsaW5lQnVpbGRlcihsaW5lRGV0YWlsWzBdLnRyaW0oKS5zcGxpdChzcGxpdHRlciksIGZpZWxkcyk7XG4gICAgICAgICAgICBpZiAobGluZURldGFpbC5sZW5ndGggPiAxICYmICEhbGluZURldGFpbFsxXS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0TG9nTGluZS5kaWZmID0gcGFyc2VfZGlmZl9zdW1tYXJ5XzEucGFyc2VEaWZmUmVzdWx0KGxpbmVEZXRhaWxbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RMb2dMaW5lO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbCxcbiAgICAgICAgICAgIGxhdGVzdDogYWxsLmxlbmd0aCAmJiBhbGxbMF0gfHwgbnVsbCxcbiAgICAgICAgICAgIHRvdGFsOiBhbGwubGVuZ3RoLFxuICAgICAgICB9O1xuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyID0gY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2dUYXNrID0gZXhwb3J0cy5wYXJzZUxvZ09wdGlvbnMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG52YXIgZXhjbHVkZU9wdGlvbnM7XG4oZnVuY3Rpb24gKGV4Y2x1ZGVPcHRpb25zKSB7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCItLXByZXR0eVwiXSA9IDBdID0gXCItLXByZXR0eVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibWF4LWNvdW50XCJdID0gMV0gPSBcIm1heC1jb3VudFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibWF4Q291bnRcIl0gPSAyXSA9IFwibWF4Q291bnRcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIm5cIl0gPSAzXSA9IFwiblwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiZmlsZVwiXSA9IDRdID0gXCJmaWxlXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmb3JtYXRcIl0gPSA1XSA9IFwiZm9ybWF0XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmcm9tXCJdID0gNl0gPSBcImZyb21cIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInRvXCJdID0gN10gPSBcInRvXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJzcGxpdHRlclwiXSA9IDhdID0gXCJzcGxpdHRlclwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wic3ltbWV0cmljXCJdID0gOV0gPSBcInN5bW1ldHJpY1wiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibWFpbE1hcFwiXSA9IDEwXSA9IFwibWFpbE1hcFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibXVsdGlMaW5lXCJdID0gMTFdID0gXCJtdWx0aUxpbmVcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInN0cmljdERhdGVcIl0gPSAxMl0gPSBcInN0cmljdERhdGVcIjtcbn0pKGV4Y2x1ZGVPcHRpb25zIHx8IChleGNsdWRlT3B0aW9ucyA9IHt9KSk7XG5mdW5jdGlvbiBwcmV0dHlGb3JtYXQoZm9ybWF0LCBzcGxpdHRlcikge1xuICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuICAgIGNvbnN0IGZvcm1hdFN0ciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGZvcm1hdCkuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgZmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICBmb3JtYXRTdHIucHVzaChTdHJpbmcoZm9ybWF0W2ZpZWxkXSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIGZpZWxkcywgZm9ybWF0U3RyLmpvaW4oc3BsaXR0ZXIpXG4gICAgXTtcbn1cbmZ1bmN0aW9uIHVzZXJPcHRpb25zKGlucHV0KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuICAgIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgaW4gZXhjbHVkZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvdXRwdXRba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBwYXJzZUxvZ09wdGlvbnMob3B0ID0ge30sIGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IHNwbGl0dGVyID0gb3B0LnNwbGl0dGVyIHx8IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5TUExJVFRFUjtcbiAgICBjb25zdCBmb3JtYXQgPSBvcHQuZm9ybWF0IHx8IHtcbiAgICAgICAgaGFzaDogJyVIJyxcbiAgICAgICAgZGF0ZTogb3B0LnN0cmljdERhdGUgPT09IGZhbHNlID8gJyVhaScgOiAnJWFJJyxcbiAgICAgICAgbWVzc2FnZTogJyVzJyxcbiAgICAgICAgcmVmczogJyVEJyxcbiAgICAgICAgYm9keTogb3B0Lm11bHRpTGluZSA/ICclQicgOiAnJWInLFxuICAgICAgICBhdXRob3JfbmFtZTogb3B0Lm1haWxNYXAgIT09IGZhbHNlID8gJyVhTicgOiAnJWFuJyxcbiAgICAgICAgYXV0aG9yX2VtYWlsOiBvcHQubWFpbE1hcCAhPT0gZmFsc2UgPyAnJWFFJyA6ICclYWUnXG4gICAgfTtcbiAgICBjb25zdCBbZmllbGRzLCBmb3JtYXRTdHJdID0gcHJldHR5Rm9ybWF0KGZvcm1hdCwgc3BsaXR0ZXIpO1xuICAgIGNvbnN0IHN1ZmZpeCA9IFtdO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBbXG4gICAgICAgIGAtLXByZXR0eT1mb3JtYXQ6JHtwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuU1RBUlRfQk9VTkRBUll9JHtmb3JtYXRTdHJ9JHtwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuQ09NTUlUX0JPVU5EQVJZfWAsXG4gICAgICAgIC4uLmN1c3RvbUFyZ3MsXG4gICAgXTtcbiAgICBjb25zdCBtYXhDb3VudCA9IG9wdC5uIHx8IG9wdFsnbWF4LWNvdW50J10gfHwgb3B0Lm1heENvdW50O1xuICAgIGlmIChtYXhDb3VudCkge1xuICAgICAgICBjb21tYW5kLnB1c2goYC0tbWF4LWNvdW50PSR7bWF4Q291bnR9YCk7XG4gICAgfVxuICAgIGlmIChvcHQuZnJvbSAmJiBvcHQudG8pIHtcbiAgICAgICAgY29uc3QgcmFuZ2VPcGVyYXRvciA9IChvcHQuc3ltbWV0cmljICE9PSBmYWxzZSkgPyAnLi4uJyA6ICcuLic7XG4gICAgICAgIHN1ZmZpeC5wdXNoKGAke29wdC5mcm9tfSR7cmFuZ2VPcGVyYXRvcn0ke29wdC50b31gKTtcbiAgICB9XG4gICAgaWYgKG9wdC5maWxlKSB7XG4gICAgICAgIHN1ZmZpeC5wdXNoKCctLWZvbGxvdycsIG9wdC5maWxlKTtcbiAgICB9XG4gICAgdXRpbHNfMS5hcHBlbmRUYXNrT3B0aW9ucyh1c2VyT3B0aW9ucyhvcHQpLCBjb21tYW5kKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHNwbGl0dGVyLFxuICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgLi4uY29tbWFuZCxcbiAgICAgICAgICAgIC4uLnN1ZmZpeCxcbiAgICAgICAgXSxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZUxvZ09wdGlvbnMgPSBwYXJzZUxvZ09wdGlvbnM7XG5mdW5jdGlvbiBsb2dUYXNrKHNwbGl0dGVyLCBmaWVsZHMsIGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydsb2cnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihzcGxpdHRlciwgZmllbGRzKSxcbiAgICB9O1xufVxuZXhwb3J0cy5sb2dUYXNrID0gbG9nVGFzaztcbmZ1bmN0aW9uIGRlZmF1bHRfMSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2coLi4ucmVzdCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcmVqZWN0RGVwcmVjYXRlZFNpZ25hdHVyZXMoLi4ucmVzdCkgfHxcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2dUYXNrKHBhcnNlTG9nT3B0aW9ucyh1dGlsc18xLnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3VtZW50cyksIHV0aWxzXzEuZmlsdGVyVHlwZShhcmd1bWVudHNbMF0sIHV0aWxzXzEuZmlsdGVyQXJyYXkpKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTG9nVGFzayhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBsb2dUYXNrKG9wdGlvbnMuc3BsaXR0ZXIsIG9wdGlvbnMuZmllbGRzLCBvcHRpb25zLmNvbW1hbmRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVqZWN0RGVwcmVjYXRlZFNpZ25hdHVyZXMoZnJvbSwgdG8pIHtcbiAgICAgICAgcmV0dXJuICh1dGlsc18xLmZpbHRlclN0cmluZyhmcm9tKSAmJlxuICAgICAgICAgICAgdXRpbHNfMS5maWx0ZXJTdHJpbmcodG8pICYmXG4gICAgICAgICAgICB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhgZ2l0LmxvZyhzdHJpbmcsIHN0cmluZykgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggZ2l0LmxvZyh7IGZyb206IHN0cmluZywgdG86IHN0cmluZyB9KWApKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2cuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lcmdlU3VtbWFyeURldGFpbCA9IGV4cG9ydHMuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QgPSB2b2lkIDA7XG5jbGFzcyBNZXJnZVN1bW1hcnlDb25mbGljdCB7XG4gICAgY29uc3RydWN0b3IocmVhc29uLCBmaWxlID0gbnVsbCwgbWV0YSkge1xuICAgICAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpbGV9OiR7dGhpcy5yZWFzb259YDtcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlU3VtbWFyeUNvbmZsaWN0ID0gTWVyZ2VTdW1tYXJ5Q29uZmxpY3Q7XG5jbGFzcyBNZXJnZVN1bW1hcnlEZXRhaWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbmZsaWN0cyA9IFtdO1xuICAgICAgICB0aGlzLm1lcmdlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICdzdWNjZXNzJztcbiAgICB9XG4gICAgZ2V0IGZhaWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGdldCByZWFzb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ09ORkxJQ1RTOiAke3RoaXMuY29uZmxpY3RzLmpvaW4oJywgJyl9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ09LJztcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlU3VtbWFyeURldGFpbCA9IE1lcmdlU3VtbWFyeURldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHVsbFN1bW1hcnkgPSB2b2lkIDA7XG5jbGFzcyBQdWxsU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVtb3RlTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBhbGw6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5kZWxldGVkID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWxldGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5pbnNlcnRpb25zID0ge307XG4gICAgICAgIHRoaXMuc3VtbWFyeSA9IHtcbiAgICAgICAgICAgIGNoYW5nZXM6IDAsXG4gICAgICAgICAgICBkZWxldGlvbnM6IDAsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuUHVsbFN1bW1hcnkgPSBQdWxsU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVB1bGxTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdGVNZXNzYWdlc09iamVjdFBhcnNlcnMgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVtb3RlTWVzc2FnZXMpIHtcbiAgICByZXR1cm4gKHJlbW90ZU1lc3NhZ2VzLm9iamVjdHMgPSByZW1vdGVNZXNzYWdlcy5vYmplY3RzIHx8IHtcbiAgICAgICAgY29tcHJlc3Npbmc6IDAsXG4gICAgICAgIGNvdW50aW5nOiAwLFxuICAgICAgICBlbnVtZXJhdGluZzogMCxcbiAgICAgICAgcGFja1JldXNlZDogMCxcbiAgICAgICAgcmV1c2VkOiB7IGNvdW50OiAwLCBkZWx0YTogMCB9LFxuICAgICAgICB0b3RhbDogeyBjb3VudDogMCwgZGVsdGE6IDAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYXNPYmplY3RDb3VudChzb3VyY2UpIHtcbiAgICBjb25zdCBjb3VudCA9IC9eXFxzKihcXGQrKS8uZXhlYyhzb3VyY2UpO1xuICAgIGNvbnN0IGRlbHRhID0gL2RlbHRhIChcXGQrKS9pLmV4ZWMoc291cmNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogdXRpbHNfMS5hc051bWJlcihjb3VudCAmJiBjb3VudFsxXSB8fCAnMCcpLFxuICAgICAgICBkZWx0YTogdXRpbHNfMS5hc051bWJlcihkZWx0YSAmJiBkZWx0YVsxXSB8fCAnMCcpLFxuICAgIH07XG59XG5leHBvcnRzLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKC9ecmVtb3RlOlxccyooZW51bWVyYXRpbmd8Y291bnRpbmd8Y29tcHJlc3NpbmcpIG9iamVjdHM6IChcXGQrKSwvaSwgKHJlc3VsdCwgW2FjdGlvbiwgY291bnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbnVtZXJhdGlvbiA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW51bWVyYXRpb24sIHsgW2tleV06IHV0aWxzXzEuYXNOdW1iZXIoY291bnQpIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKihlbnVtZXJhdGluZ3xjb3VudGluZ3xjb21wcmVzc2luZykgb2JqZWN0czogXFxkKyUgXFwoXFxkK1xcLyhcXGQrKVxcKSwvaSwgKHJlc3VsdCwgW2FjdGlvbiwgY291bnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbnVtZXJhdGlvbiA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW51bWVyYXRpb24sIHsgW2tleV06IHV0aWxzXzEuYXNOdW1iZXIoY291bnQpIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL3RvdGFsIChbXixdKyksIHJldXNlZCAoW14sXSspLCBwYWNrLXJldXNlZCAoXFxkKykvaSwgKHJlc3VsdCwgW3RvdGFsLCByZXVzZWQsIHBhY2tSZXVzZWRdKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZXN1bHQucmVtb3RlTWVzc2FnZXMpO1xuICAgICAgICBvYmplY3RzLnRvdGFsID0gYXNPYmplY3RDb3VudCh0b3RhbCk7XG4gICAgICAgIG9iamVjdHMucmV1c2VkID0gYXNPYmplY3RDb3VudChyZXVzZWQpO1xuICAgICAgICBvYmplY3RzLnBhY2tSZXVzZWQgPSB1dGlsc18xLmFzTnVtYmVyKHBhY2tSZXVzZWQpO1xuICAgIH0pLFxuXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbW90ZS1vYmplY3RzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW1vdGVNZXNzYWdlU3VtbWFyeSA9IGV4cG9ydHMucGFyc2VSZW1vdGVNZXNzYWdlcyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfb2JqZWN0c18xID0gcmVxdWlyZShcIi4vcGFyc2UtcmVtb3RlLW9iamVjdHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKiguKykkLywgKHJlc3VsdCwgW3RleHRdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy5hbGwucHVzaCh0ZXh0LnRyaW0oKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSxcbiAgICAuLi5wYXJzZV9yZW1vdGVfb2JqZWN0c18xLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKFsvY3JlYXRlIGEgKD86cHVsbHxtZXJnZSkgcmVxdWVzdC9pLCAvXFxzKGh0dHBzPzpcXC9cXC9cXFMrKSQvXSwgKHJlc3VsdCwgW3B1bGxSZXF1ZXN0VXJsXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3RlTWVzc2FnZXMucHVsbFJlcXVlc3RVcmwgPSBwdWxsUmVxdWVzdFVybDtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKFsvZm91bmQgKFxcZCspIHZ1bG5lcmFiaWxpdGllcy4rXFwoKFteKV0rKVxcKS9pLCAvXFxzKGh0dHBzPzpcXC9cXC9cXFMrKSQvXSwgKHJlc3VsdCwgW2NvdW50LCBzdW1tYXJ5LCB1cmxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy52dWxuZXJhYmlsaXRpZXMgPSB7XG4gICAgICAgICAgICBjb3VudDogdXRpbHNfMS5hc051bWJlcihjb3VudCksXG4gICAgICAgICAgICBzdW1tYXJ5LFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICB9O1xuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlUmVtb3RlTWVzc2FnZXMoX3N0ZE91dCwgc3RkRXJyKSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZSh7IHJlbW90ZU1lc3NhZ2VzOiBuZXcgUmVtb3RlTWVzc2FnZVN1bW1hcnkoKSB9LCBwYXJzZXJzLCBzdGRFcnIpO1xufVxuZXhwb3J0cy5wYXJzZVJlbW90ZU1lc3NhZ2VzID0gcGFyc2VSZW1vdGVNZXNzYWdlcztcbmNsYXNzIFJlbW90ZU1lc3NhZ2VTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLlJlbW90ZU1lc3NhZ2VTdW1tYXJ5ID0gUmVtb3RlTWVzc2FnZVN1bW1hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZW1vdGUtbWVzc2FnZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlUHVsbFJlc3VsdCA9IGV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gdm9pZCAwO1xuY29uc3QgUHVsbFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvUHVsbFN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtbWVzc2FnZXNcIik7XG5jb25zdCBGSUxFX1VQREFURV9SRUdFWCA9IC9eXFxzKiguKz8pXFxzK1xcfFxccytcXGQrXFxzKihcXCsqKSgtKikvO1xuY29uc3QgU1VNTUFSWV9SRUdFWCA9IC8oXFxkKylcXEQrKChcXGQrKVxcRCtcXChcXCtcXCkpPyhcXEQrKFxcZCspXFxEK1xcKC1cXCkpPy87XG5jb25zdCBBQ1RJT05fUkVHRVggPSAvXihjcmVhdGV8ZGVsZXRlKSBtb2RlIFxcZCsgKC4rKS87XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoRklMRV9VUERBVEVfUkVHRVgsIChyZXN1bHQsIFtmaWxlLCBpbnNlcnRpb25zLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICBpZiAoaW5zZXJ0aW9ucykge1xuICAgICAgICAgICAgcmVzdWx0Lmluc2VydGlvbnNbZmlsZV0gPSBpbnNlcnRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZXRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQuZGVsZXRpb25zW2ZpbGVdID0gZGVsZXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoU1VNTUFSWV9SRUdFWCwgKHJlc3VsdCwgW2NoYW5nZXMsICwgaW5zZXJ0aW9ucywgLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChpbnNlcnRpb25zICE9PSB1bmRlZmluZWQgfHwgZGVsZXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSArY2hhbmdlcyB8fCAwO1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9ICtpbnNlcnRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSArZGVsZXRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihBQ1RJT05fUkVHRVgsIChyZXN1bHQsIFthY3Rpb24sIGZpbGVdKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5maWxlcywgZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKChhY3Rpb24gPT09ICdjcmVhdGUnKSA/IHJlc3VsdC5jcmVhdGVkIDogcmVzdWx0LmRlbGV0ZWQsIGZpbGUpO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlUHVsbERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gcGFyc2VQdWxsRGV0YWlsO1xuY29uc3QgcGFyc2VQdWxsUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwoc3RkT3V0LCBzdGRFcnIpLCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMS5wYXJzZVJlbW90ZU1lc3NhZ2VzKHN0ZE91dCwgc3RkRXJyKSk7XG59O1xuZXhwb3J0cy5wYXJzZVB1bGxSZXN1bHQgPSBwYXJzZVB1bGxSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1wdWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsID0gZXhwb3J0cy5wYXJzZU1lcmdlUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgTWVyZ2VTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL01lcmdlU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9wdWxsXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1wdWxsXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0by1tZXJnaW5nXFxzKyguKykkLywgKHN1bW1hcnksIFthdXRvTWVyZ2VdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkubWVyZ2VzLnB1c2goYXV0b01lcmdlKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQ09ORkxJQ1RcXHMrXFwoKC4rKVxcKTogTWVyZ2UgY29uZmxpY3QgaW4gKC4rKSQvLCAoc3VtbWFyeSwgW3JlYXNvbiwgZmlsZV0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QocmVhc29uLCBmaWxlKSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkNPTkZMSUNUXFxzK1xcKCguK1xcL2RlbGV0ZSlcXCk6ICguKykgZGVsZXRlZCBpbiAoLispIGFuZC8sIChzdW1tYXJ5LCBbcmVhc29uLCBmaWxlLCBkZWxldGVSZWZdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkuY29uZmxpY3RzLnB1c2gobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeUNvbmZsaWN0KHJlYXNvbiwgZmlsZSwgeyBkZWxldGVSZWYgfSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15DT05GTElDVFxccytcXCgoLispXFwpOi8sIChzdW1tYXJ5LCBbcmVhc29uXSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmNvbmZsaWN0cy5wdXNoKG5ldyBNZXJnZVN1bW1hcnlfMS5NZXJnZVN1bW1hcnlDb25mbGljdChyZWFzb24sIG51bGwpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0b21hdGljIG1lcmdlIGZhaWxlZDtcXHMrKC4rKSQvLCAoc3VtbWFyeSwgW3Jlc3VsdF0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfSksXG5dO1xuLyoqXG4gKiBQYXJzZSB0aGUgY29tcGxldGUgcmVzcG9uc2UgZnJvbSBgZ2l0Lm1lcmdlYFxuICovXG5jb25zdCBwYXJzZU1lcmdlUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsKHN0ZE91dCwgc3RkRXJyKSwgcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycikpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZVJlc3VsdCA9IHBhcnNlTWVyZ2VSZXN1bHQ7XG4vKipcbiAqIFBhcnNlIHRoZSBtZXJnZSBzcGVjaWZpYyBkZXRhaWwgKGllOiBub3QgdGhlIGNvbnRlbnQgYWxzbyBhdmFpbGFibGUgaW4gdGhlIHB1bGwgZGV0YWlsKSBmcm9tIGBnaXQubW5lcmdlYFxuICogQHBhcmFtIHN0ZE91dFxuICovXG5jb25zdCBwYXJzZU1lcmdlRGV0YWlsID0gKHN0ZE91dCkgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeURldGFpbCgpLCBwYXJzZXJzLCBzdGRPdXQpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZURldGFpbCA9IHBhcnNlTWVyZ2VEZXRhaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1tZXJnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2VUYXNrID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHBhcnNlX21lcmdlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1tZXJnZVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBtZXJnZVRhc2soY3VzdG9tQXJncykge1xuICAgIGlmICghY3VzdG9tQXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQubWVyZ2UgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydtZXJnZScsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2UgPSBwYXJzZV9tZXJnZV8xLnBhcnNlTWVyZ2VSZXN1bHQoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICAgICAgaWYgKG1lcmdlLmZhaWxlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKG1lcmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLm1lcmdlVGFzayA9IG1lcmdlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwgPSBleHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1tZXNzYWdlc1wiKTtcbmZ1bmN0aW9uIHB1c2hSZXN1bHRQdXNoZWRJdGVtKGxvY2FsLCByZW1vdGUsIHN0YXR1cykge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBzdGF0dXMuaW5jbHVkZXMoJ2RlbGV0ZWQnKTtcbiAgICBjb25zdCB0YWcgPSBzdGF0dXMuaW5jbHVkZXMoJ3RhZycpIHx8IC9ecmVmc1xcL3RhZ3MvLnRlc3QobG9jYWwpO1xuICAgIGNvbnN0IGFscmVhZHlVcGRhdGVkID0gIXN0YXR1cy5pbmNsdWRlcygnbmV3Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZXRlZCxcbiAgICAgICAgdGFnLFxuICAgICAgICBicmFuY2g6ICF0YWcsXG4gICAgICAgIG5ldzogIWFscmVhZHlVcGRhdGVkLFxuICAgICAgICBhbHJlYWR5VXBkYXRlZCxcbiAgICAgICAgbG9jYWwsXG4gICAgICAgIHJlbW90ZSxcbiAgICB9O1xufVxuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eUHVzaGluZyB0byAoLispJC8sIChyZXN1bHQsIFtyZXBvXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVwbyA9IHJlcG87XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXnVwZGF0aW5nIGxvY2FsIHRyYWNraW5nIHJlZiAnKC4rKScvLCAocmVzdWx0LCBbbG9jYWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZWYgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChyZXN1bHQucmVmIHx8IHt9KSksIHsgbG9jYWwgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlsqLT1dXFxzKyhbXjpdKyk6KFxcUyspXFxzK1xcWyguKyldJC8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCB0eXBlXSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaGVkLnB1c2gocHVzaFJlc3VsdFB1c2hlZEl0ZW0obG9jYWwsIHJlbW90ZSwgdHlwZSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15CcmFuY2ggJyhbXiddKyknIHNldCB1cCB0byB0cmFjayByZW1vdGUgYnJhbmNoICcoW14nXSspJyBmcm9tICcoW14nXSspJy8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCByZW1vdGVOYW1lXSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAocmVzdWx0LmJyYW5jaCB8fCB7fSkpLCB7IGxvY2FsLFxuICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgcmVtb3RlTmFtZSB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFteOl0rKTooXFxTKylcXHMrKFthLXowLTldKylcXC5cXC4oW2EtejAtOV0rKSQvLCAocmVzdWx0LCBbbG9jYWwsIHJlbW90ZSwgZnJvbSwgdG9dKSA9PiB7XG4gICAgICAgIHJlc3VsdC51cGRhdGUgPSB7XG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgbG9jYWwsXG4gICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KSxcbl07XG5jb25zdCBwYXJzZVB1c2hSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICBjb25zdCBwdXNoRGV0YWlsID0gZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwoc3RkT3V0LCBzdGRFcnIpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGV0YWlsID0gcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEucGFyc2VSZW1vdGVNZXNzYWdlcyhzdGRPdXQsIHN0ZEVycik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHVzaERldGFpbCksIHJlc3BvbnNlRGV0YWlsKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHBhcnNlUHVzaFJlc3VsdDtcbmNvbnN0IHBhcnNlUHVzaERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UoeyBwdXNoZWQ6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCwgc3RkRXJyKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaERldGFpbCA9IHBhcnNlUHVzaERldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXB1c2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnB1c2hUYXNrID0gZXhwb3J0cy5wdXNoVGFnc1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9wdXNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1wdXNoXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHB1c2hUYWdzVGFzayhyZWYgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLXRhZ3MnKTtcbiAgICByZXR1cm4gcHVzaFRhc2socmVmLCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMucHVzaFRhZ3NUYXNrID0gcHVzaFRhZ3NUYXNrO1xuZnVuY3Rpb24gcHVzaFRhc2socmVmID0ge30sIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncHVzaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZWYuYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZWYuYnJhbmNoKTtcbiAgICB9XG4gICAgaWYgKHJlZi5yZW1vdGUpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlZi5yZW1vdGUpO1xuICAgIH1cbiAgICB1dGlsc18xLnJlbW92ZShjb21tYW5kcywgJy12Jyk7XG4gICAgdXRpbHNfMS5hcHBlbmQoY29tbWFuZHMsICctLXZlcmJvc2UnKTtcbiAgICB1dGlsc18xLmFwcGVuZChjb21tYW5kcywgJy0tcG9yY2VsYWluJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9wdXNoXzEucGFyc2VQdXNoUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLnB1c2hUYXNrID0gcHVzaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GaWxlU3RhdHVzU3VtbWFyeSA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IHZvaWQgMDtcbmV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IC9eKC4rKSAtPiAoLispJC87XG5jbGFzcyBGaWxlU3RhdHVzU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IocGF0aCwgaW5kZXgsIHdvcmtpbmdfZGlyKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy53b3JraW5nX2RpciA9IHdvcmtpbmdfZGlyO1xuICAgICAgICBpZiAoJ1InID09PSAoaW5kZXggKyB3b3JraW5nX2RpcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleC5leGVjKHBhdGgpIHx8IFtudWxsLCBwYXRoLCBwYXRoXTtcbiAgICAgICAgICAgIHRoaXMuZnJvbSA9IGRldGFpbFsxXSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGRldGFpbFsyXSB8fCAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRmlsZVN0YXR1c1N1bW1hcnkgPSBGaWxlU3RhdHVzU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVN0YXR1c1N1bW1hcnkgPSBleHBvcnRzLlN0YXR1c1N1bW1hcnkgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgRmlsZVN0YXR1c1N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuL0ZpbGVTdGF0dXNTdW1tYXJ5XCIpO1xuLyoqXG4gKiBUaGUgU3RhdHVzU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICovXG5jbGFzcyBTdGF0dXNTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RfYWRkZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jb25mbGljdGVkID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RpZmllZCA9IFtdO1xuICAgICAgICB0aGlzLnJlbmFtZWQgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBmaWxlcyByZXByZXNlbnRlZCBhcyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIGBwYXRoYCBhbmQgc3RhdHVzIGluIGBpbmRleGAgYW5kXG4gICAgICAgICAqIGluIHRoZSBgd29ya2luZ19kaXJgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YWdlZCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGNvbW1pdHMgYWhlYWQgb2YgdGhlIHRyYWNrZWQgYnJhbmNoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFoZWFkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqTnVtYmVyIG9mIGNvbW1pdHMgYmVoaW5kIHRoZSB0cmFja2VkIGJyYW5jaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iZWhpbmQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBicmFuY2ggYmVpbmcgdHJhY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFja2luZyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGlzIFN0YXR1c1N1bW1hcnkgcmVwcmVzZW50cyBhIGNsZWFuIHdvcmtpbmcgYnJhbmNoLlxuICAgICAqL1xuICAgIGlzQ2xlYW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5TdGF0dXNTdW1tYXJ5ID0gU3RhdHVzU3VtbWFyeTtcbnZhciBQb3JjZWxhaW5GaWxlU3RhdHVzO1xuKGZ1bmN0aW9uIChQb3JjZWxhaW5GaWxlU3RhdHVzKSB7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkFEREVEXCJdID0gXCJBXCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkRFTEVURURcIl0gPSBcIkRcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTU9ESUZJRURcIl0gPSBcIk1cIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiUkVOQU1FRFwiXSA9IFwiUlwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJDT1BJRURcIl0gPSBcIkNcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5NRVJHRURcIl0gPSBcIlVcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5UUkFDS0VEXCJdID0gXCI/XCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIklHTk9SRURcIl0gPSBcIiFcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTk9ORVwiXSA9IFwiIFwiO1xufSkoUG9yY2VsYWluRmlsZVN0YXR1cyB8fCAoUG9yY2VsYWluRmlsZVN0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiByZW5hbWVkRmlsZShsaW5lKSB7XG4gICAgY29uc3QgZGV0YWlsID0gL14oLispIC0+ICguKykkLy5leGVjKGxpbmUpO1xuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmcm9tOiBsaW5lLCB0bzogbGluZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBTdHJpbmcoZGV0YWlsWzFdKSxcbiAgICAgICAgdG86IFN0cmluZyhkZXRhaWxbMl0pLFxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZXIoaW5kZXhYLCBpbmRleFksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gW2Ake2luZGV4WH0ke2luZGV4WX1gLCBoYW5kbGVyXTtcbn1cbmZ1bmN0aW9uIGNvbmZsaWN0cyhpbmRleFgsIC4uLmluZGV4WSkge1xuICAgIHJldHVybiBpbmRleFkubWFwKHkgPT4gcGFyc2VyKGluZGV4WCwgeSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNvbmZsaWN0ZWQsIGZpbGUpKSk7XG59XG5jb25zdCBwYXJzZXJzID0gbmV3IE1hcChbXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5kZWxldGVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5tb2RpZmllZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmRlbGV0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSAmJiB1dGlsc18xLmFwcGVuZChyZXN1bHQuc3RhZ2VkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkRmlsZShmaWxlKSk7XG4gICAgfSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCByZW5hbWVkID0gcmVuYW1lZEZpbGUoZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCByZW5hbWVkLnRvKTtcbiAgICB9KSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5VTlRSQUNLRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5UUkFDS0VELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubm90X2FkZGVkLCBmaWxlKSksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQpLFxuICAgIC4uLmNvbmZsaWN0cyhQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgWycjIycsIChyZXN1bHQsIGxpbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFoZWFkUmVnID0gL2FoZWFkIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBiZWhpbmRSZWcgPSAvYmVoaW5kIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UmVnID0gL14oLis/KD89KD86XFwuezN9fFxcc3wkKSkpLztcbiAgICAgICAgICAgIGNvbnN0IHRyYWNraW5nUmVnID0gL1xcLnszfShcXFMqKS87XG4gICAgICAgICAgICBjb25zdCBvbkVtcHR5QnJhbmNoUmVnID0gL1xcc29uXFxzKFtcXFNdKykkLztcbiAgICAgICAgICAgIGxldCByZWdleFJlc3VsdDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gYWhlYWRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5haGVhZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBiZWhpbmRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5iZWhpbmQgPSByZWdleFJlc3VsdCAmJiArcmVnZXhSZXN1bHRbMV0gfHwgMDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gY3VycmVudFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmN1cnJlbnQgPSByZWdleFJlc3VsdCAmJiByZWdleFJlc3VsdFsxXTtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gdHJhY2tpbmdSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC50cmFja2luZyA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBvbkVtcHR5QnJhbmNoUmVnLmV4ZWMobGluZSk7XG4gICAgICAgICAgICByZXN1bHQuY3VycmVudCA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdIHx8IHJlc3VsdC5jdXJyZW50O1xuICAgICAgICB9XVxuXSk7XG5jb25zdCBwYXJzZVN0YXR1c1N1bW1hcnkgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBTdGF0dXNTdW1tYXJ5KCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgc3BsaXRMaW5lKHN0YXR1cywgbGluZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufTtcbmV4cG9ydHMucGFyc2VTdGF0dXNTdW1tYXJ5ID0gcGFyc2VTdGF0dXNTdW1tYXJ5O1xuZnVuY3Rpb24gc3BsaXRMaW5lKHJlc3VsdCwgbGluZVN0cikge1xuICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lU3RyLnRyaW0oKTtcbiAgICBzd2l0Y2ggKCcgJykge1xuICAgICAgICBjYXNlIHRyaW1tZWQuY2hhckF0KDIpOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGEodHJpbW1lZC5jaGFyQXQoMCksIHRyaW1tZWQuY2hhckF0KDEpLCB0cmltbWVkLnN1YnN0cigzKSk7XG4gICAgICAgIGNhc2UgdHJpbW1lZC5jaGFyQXQoMSk6XG4gICAgICAgICAgICByZXR1cm4gZGF0YShQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIHRyaW1tZWQuY2hhckF0KDApLCB0cmltbWVkLnN1YnN0cigyKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRhdGEoaW5kZXgsIHdvcmtpbmdEaXIsIHBhdGgpIHtcbiAgICAgICAgY29uc3QgcmF3ID0gYCR7aW5kZXh9JHt3b3JraW5nRGlyfWA7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJzZXJzLmdldChyYXcpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihyZXN1bHQsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXcgIT09ICcjIycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKG5ldyBGaWxlU3RhdHVzU3VtbWFyeV8xLkZpbGVTdGF0dXNTdW1tYXJ5KHBhdGgsIGluZGV4LCB3b3JraW5nRGlyKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0dXNUYXNrID0gdm9pZCAwO1xuY29uc3QgU3RhdHVzU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5XCIpO1xuZnVuY3Rpb24gc3RhdHVzVGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydzdGF0dXMnLCAnLS1wb3JjZWxhaW4nLCAnLWInLCAnLXUnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXNTdW1tYXJ5XzEucGFyc2VTdGF0dXNTdW1tYXJ5KHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuc3RhdHVzVGFzayA9IHN0YXR1c1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0dXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbXBsZUdpdEFwaSA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfY2FsbGJhY2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2stY2FsbGJhY2tcIik7XG5jb25zdCBjaGFuZ2Vfd29ya2luZ19kaXJlY3RvcnlfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NoYW5nZS13b3JraW5nLWRpcmVjdG9yeVwiKTtcbmNvbnN0IGNvbmZpZ18xID0gcmVxdWlyZShcIi4vdGFza3MvY29uZmlnXCIpO1xuY29uc3QgaGFzaF9vYmplY3RfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2hhc2gtb2JqZWN0XCIpO1xuY29uc3QgaW5pdF8xID0gcmVxdWlyZShcIi4vdGFza3MvaW5pdFwiKTtcbmNvbnN0IGxvZ18xID0gcmVxdWlyZShcIi4vdGFza3MvbG9nXCIpO1xuY29uc3QgbWVyZ2VfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL21lcmdlXCIpO1xuY29uc3QgcHVzaF8xID0gcmVxdWlyZShcIi4vdGFza3MvcHVzaFwiKTtcbmNvbnN0IHN0YXR1c18xID0gcmVxdWlyZShcIi4vdGFza3Mvc3RhdHVzXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza3MvdGFza1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNsYXNzIFNpbXBsZUdpdEFwaSB7XG4gICAgY29uc3RydWN0b3IoX2V4ZWN1dG9yKSB7XG4gICAgICAgIHRoaXMuX2V4ZWN1dG9yID0gX2V4ZWN1dG9yO1xuICAgIH1cbiAgICBfcnVuVGFzayh0YXNrLCB0aGVuKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZXhlY3V0b3IuY2hhaW4oKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNoYWluLnB1c2godGFzayk7XG4gICAgICAgIGlmICh0aGVuKSB7XG4gICAgICAgICAgICB0YXNrX2NhbGxiYWNrXzEudGFza0NhbGxiYWNrKHRhc2ssIHByb21pc2UsIHRoZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMsIHtcbiAgICAgICAgICAgIHRoZW46IHsgdmFsdWU6IHByb21pc2UudGhlbi5iaW5kKHByb21pc2UpIH0sXG4gICAgICAgICAgICBjYXRjaDogeyB2YWx1ZTogcHJvbWlzZS5jYXRjaC5iaW5kKHByb21pc2UpIH0sXG4gICAgICAgICAgICBfZXhlY3V0b3I6IHsgdmFsdWU6IGNoYWluIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGQoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydhZGQnLCAuLi51dGlsc18xLmFzQXJyYXkoZmlsZXMpXSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBjd2QoZGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgICBpZiAodHlwZW9mIGRpcmVjdG9yeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGNoYW5nZV93b3JraW5nX2RpcmVjdG9yeV8xLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrKGRpcmVjdG9yeSwgdGhpcy5fZXhlY3V0b3IpLCBuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChkaXJlY3RvcnkgPT09IG51bGwgfHwgZGlyZWN0b3J5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXJlY3RvcnkucGF0aCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhjaGFuZ2Vfd29ya2luZ19kaXJlY3RvcnlfMS5jaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayhkaXJlY3RvcnkucGF0aCwgZGlyZWN0b3J5LnJvb3QgJiYgdGhpcy5fZXhlY3V0b3IgfHwgdW5kZWZpbmVkKSwgbmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFza18xLmNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0dpdC5jd2Q6IHdvcmtpbmdEaXJlY3RvcnkgbXVzdCBiZSBzdXBwbGllZCBhcyBhIHN0cmluZycpLCBuZXh0KTtcbiAgICB9XG4gICAgaGFzaE9iamVjdChwYXRoLCB3cml0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhoYXNoX29iamVjdF8xLmhhc2hPYmplY3RUYXNrKHBhdGgsIHdyaXRlID09PSB0cnVlKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIGluaXQoYmFyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhpbml0XzEuaW5pdFRhc2soYmFyZSA9PT0gdHJ1ZSwgdGhpcy5fZXhlY3V0b3IuY3dkLCB1dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIG1lcmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhtZXJnZV8xLm1lcmdlVGFzayh1dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIG1lcmdlRnJvbVRvKHJlbW90ZSwgYnJhbmNoKSB7XG4gICAgICAgIGlmICghKHV0aWxzXzEuZmlsdGVyU3RyaW5nKHJlbW90ZSkgJiYgdXRpbHNfMS5maWx0ZXJTdHJpbmcoYnJhbmNoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGBHaXQubWVyZ2VGcm9tVG8gcmVxdWlyZXMgdGhhdCB0aGUgJ3JlbW90ZScgYW5kICdicmFuY2gnIGFyZ3VtZW50cyBhcmUgc3VwcGxpZWQgYXMgc3RyaW5nc2ApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhtZXJnZV8xLm1lcmdlVGFzayhbcmVtb3RlLCBicmFuY2gsIC4uLnV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzLCBmYWxzZSkpO1xuICAgIH1cbiAgICBvdXRwdXRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fZXhlY3V0b3Iub3V0cHV0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdXNoKCkge1xuICAgICAgICBjb25zdCB0YXNrID0gcHVzaF8xLnB1c2hUYXNrKHtcbiAgICAgICAgICAgIHJlbW90ZTogdXRpbHNfMS5maWx0ZXJUeXBlKGFyZ3VtZW50c1swXSwgdXRpbHNfMS5maWx0ZXJTdHJpbmcpLFxuICAgICAgICAgICAgYnJhbmNoOiB1dGlsc18xLmZpbHRlclR5cGUoYXJndW1lbnRzWzFdLCB1dGlsc18xLmZpbHRlclN0cmluZyksXG4gICAgICAgIH0sIHV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgc3Rhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsnc3Rhc2gnLCAuLi51dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHN0YXR1c18xLnN0YXR1c1Rhc2sodXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2ltcGxlR2l0QXBpID0gU2ltcGxlR2l0QXBpO1xuT2JqZWN0LmFzc2lnbihTaW1wbGVHaXRBcGkucHJvdG90eXBlLCBjb25maWdfMS5kZWZhdWx0KCksIGxvZ18xLmRlZmF1bHQoKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHByb21pc2VfZGVmZXJyZWRfMSA9IHJlcXVpcmUoXCJAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkXCIpO1xuY29uc3QgZ2l0X2xvZ2dlcl8xID0gcmVxdWlyZShcIi4uL2dpdC1sb2dnZXJcIik7XG5jb25zdCBjcmVhdGVTY2hlZHVsZWRUYXNrID0gKCgpID0+IHtcbiAgICBsZXQgaWQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlkKys7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgZG9uZSB9ID0gcHJvbWlzZV9kZWZlcnJlZF8xLmNyZWF0ZURlZmVycmVkKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICB9O1xuICAgIH07XG59KSgpO1xuY2xhc3MgU2NoZWR1bGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25jdXJyZW5jeSA9IDIpIHtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IGNvbmN1cnJlbmN5O1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGdpdF9sb2dnZXJfMS5jcmVhdGVMb2dnZXIoJycsICdzY2hlZHVsZXInKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gW107XG4gICAgICAgIHRoaXMucnVubmluZyA9IFtdO1xuICAgICAgICB0aGlzLmxvZ2dlcihgQ29uc3RydWN0ZWQsIGNvbmN1cnJlbmN5PSVzYCwgY29uY3VycmVuY3kpO1xuICAgIH1cbiAgICBzY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBlbmRpbmcubGVuZ3RoIHx8IHRoaXMucnVubmluZy5sZW5ndGggPj0gdGhpcy5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIoYFNjaGVkdWxlIGF0dGVtcHQgaWdub3JlZCwgcGVuZGluZz0lcyBydW5uaW5nPSVzIGNvbmN1cnJlbmN5PSVzYCwgdGhpcy5wZW5kaW5nLmxlbmd0aCwgdGhpcy5ydW5uaW5nLmxlbmd0aCwgdGhpcy5jb25jdXJyZW5jeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFzayA9IHV0aWxzXzEuYXBwZW5kKHRoaXMucnVubmluZywgdGhpcy5wZW5kaW5nLnNoaWZ0KCkpO1xuICAgICAgICB0aGlzLmxvZ2dlcihgQXR0ZW1wdGluZyBpZD0lc2AsIHRhc2suaWQpO1xuICAgICAgICB0YXNrLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIoYENvbXBsZXRpbmcgaWQ9YCwgdGFzay5pZCk7XG4gICAgICAgICAgICB1dGlsc18xLnJlbW92ZSh0aGlzLnJ1bm5pbmcsIHRhc2spO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBwcm9taXNlLCBpZCB9ID0gdXRpbHNfMS5hcHBlbmQodGhpcy5wZW5kaW5nLCBjcmVhdGVTY2hlZHVsZWRUYXNrKCkpO1xuICAgICAgICB0aGlzLmxvZ2dlcihgU2NoZWR1bGluZyBpZD0lc2AsIGlkKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG5leHBvcnRzLlNjaGVkdWxlciA9IFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXBwbHlQYXRjaFRhc2sgPSB2b2lkIDA7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gYXBwbHlQYXRjaFRhc2socGF0Y2hlcywgY3VzdG9tQXJncykge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ2FwcGx5JywgLi4uY3VzdG9tQXJncywgLi4ucGF0Y2hlc10pO1xufVxuZXhwb3J0cy5hcHBseVBhdGNoVGFzayA9IGFwcGx5UGF0Y2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwbHktcGF0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzU2luZ2xlQnJhbmNoRGVsZXRlRmFpbHVyZSA9IGV4cG9ydHMuYnJhbmNoRGVsZXRpb25GYWlsdXJlID0gZXhwb3J0cy5icmFuY2hEZWxldGlvblN1Y2Nlc3MgPSBleHBvcnRzLkJyYW5jaERlbGV0aW9uQmF0Y2ggPSB2b2lkIDA7XG5jbGFzcyBCcmFuY2hEZWxldGlvbkJhdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIH1cbiAgICBnZXQgc3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmVycm9ycy5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5CcmFuY2hEZWxldGlvbkJhdGNoID0gQnJhbmNoRGVsZXRpb25CYXRjaDtcbmZ1bmN0aW9uIGJyYW5jaERlbGV0aW9uU3VjY2VzcyhicmFuY2gsIGhhc2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2gsIGhhc2gsIHN1Y2Nlc3M6IHRydWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoRGVsZXRpb25TdWNjZXNzID0gYnJhbmNoRGVsZXRpb25TdWNjZXNzO1xuZnVuY3Rpb24gYnJhbmNoRGVsZXRpb25GYWlsdXJlKGJyYW5jaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJyYW5jaCwgaGFzaDogbnVsbCwgc3VjY2VzczogZmFsc2UsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoRGVsZXRpb25GYWlsdXJlID0gYnJhbmNoRGVsZXRpb25GYWlsdXJlO1xuZnVuY3Rpb24gaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlKHRlc3QpIHtcbiAgICByZXR1cm4gdGVzdC5zdWNjZXNzO1xufVxuZXhwb3J0cy5pc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmUgPSBpc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CcmFuY2hEZWxldGVTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCcmFuY2hEZWxldGlvbkVycm9yID0gZXhwb3J0cy5wYXJzZUJyYW5jaERlbGV0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IEJyYW5jaERlbGV0ZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBkZWxldGVTdWNjZXNzUmVnZXggPSAvKFxcUyspXFxzK1xcKFxcUytcXHMoW14pXSspXFwpLztcbmNvbnN0IGRlbGV0ZUVycm9yUmVnZXggPSAvXmVycm9yW14nXSsnKFteJ10rKScvbTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihkZWxldGVTdWNjZXNzUmVnZXgsIChyZXN1bHQsIFticmFuY2gsIGhhc2hdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gQnJhbmNoRGVsZXRlU3VtbWFyeV8xLmJyYW5jaERlbGV0aW9uU3VjY2VzcyhicmFuY2gsIGhhc2gpO1xuICAgICAgICByZXN1bHQuYWxsLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYnJhbmNoZXNbYnJhbmNoXSA9IGRlbGV0aW9uO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoZGVsZXRlRXJyb3JSZWdleCwgKHJlc3VsdCwgW2JyYW5jaF0pID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRpb24gPSBCcmFuY2hEZWxldGVTdW1tYXJ5XzEuYnJhbmNoRGVsZXRpb25GYWlsdXJlKGJyYW5jaCk7XG4gICAgICAgIHJlc3VsdC5lcnJvcnMucHVzaChkZWxldGlvbik7XG4gICAgICAgIHJlc3VsdC5hbGwucHVzaChkZWxldGlvbik7XG4gICAgICAgIHJlc3VsdC5icmFuY2hlc1ticmFuY2hdID0gZGVsZXRpb247XG4gICAgfSksXG5dO1xuY29uc3QgcGFyc2VCcmFuY2hEZWxldGlvbnMgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKG5ldyBCcmFuY2hEZWxldGVTdW1tYXJ5XzEuQnJhbmNoRGVsZXRpb25CYXRjaCgpLCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59O1xuZXhwb3J0cy5wYXJzZUJyYW5jaERlbGV0aW9ucyA9IHBhcnNlQnJhbmNoRGVsZXRpb25zO1xuZnVuY3Rpb24gaGFzQnJhbmNoRGVsZXRpb25FcnJvcihkYXRhLCBwcm9jZXNzRXhpdENvZGUpIHtcbiAgICByZXR1cm4gcHJvY2Vzc0V4aXRDb2RlID09PSB1dGlsc18xLkV4aXRDb2Rlcy5FUlJPUiAmJiBkZWxldGVFcnJvclJlZ2V4LnRlc3QoZGF0YSk7XG59XG5leHBvcnRzLmhhc0JyYW5jaERlbGV0aW9uRXJyb3IgPSBoYXNCcmFuY2hEZWxldGlvbkVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtYnJhbmNoLWRlbGV0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQnJhbmNoU3VtbWFyeVJlc3VsdCA9IHZvaWQgMDtcbmNsYXNzIEJyYW5jaFN1bW1hcnlSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFsbCA9IFtdO1xuICAgICAgICB0aGlzLmJyYW5jaGVzID0ge307XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICcnO1xuICAgICAgICB0aGlzLmRldGFjaGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHB1c2goY3VycmVudCwgZGV0YWNoZWQsIG5hbWUsIGNvbW1pdCwgbGFiZWwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoZWQgPSBkZXRhY2hlZDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGwucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5icmFuY2hlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgY29tbWl0OiBjb21taXQsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLkJyYW5jaFN1bW1hcnlSZXN1bHQgPSBCcmFuY2hTdW1tYXJ5UmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJhbmNoU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VCcmFuY2hTdW1tYXJ5ID0gdm9pZCAwO1xuY29uc3QgQnJhbmNoU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9CcmFuY2hTdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXihcXCpcXHMpP1xcKCg/OkhFQUQgKT9kZXRhY2hlZCAoPzpmcm9tfGF0KSAoXFxTKylcXClcXHMrKFthLXowLTldKylcXHMoLiopJC8sIChyZXN1bHQsIFtjdXJyZW50LCBuYW1lLCBjb21taXQsIGxhYmVsXSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaCghIWN1cnJlbnQsIHRydWUsIG5hbWUsIGNvbW1pdCwgbGFiZWwpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFwqXFxzKT8oXFxTKylcXHMrKFthLXowLTldKylcXHMoLiopJC9zLCAocmVzdWx0LCBbY3VycmVudCwgbmFtZSwgY29tbWl0LCBsYWJlbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goISFjdXJyZW50LCBmYWxzZSwgbmFtZSwgY29tbWl0LCBsYWJlbCk7XG4gICAgfSlcbl07XG5mdW5jdGlvbiBwYXJzZUJyYW5jaFN1bW1hcnkoc3RkT3V0KSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgQnJhbmNoU3VtbWFyeV8xLkJyYW5jaFN1bW1hcnlSZXN1bHQoKSwgcGFyc2Vycywgc3RkT3V0KTtcbn1cbmV4cG9ydHMucGFyc2VCcmFuY2hTdW1tYXJ5ID0gcGFyc2VCcmFuY2hTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtYnJhbmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWxldGVCcmFuY2hUYXNrID0gZXhwb3J0cy5kZWxldGVCcmFuY2hlc1Rhc2sgPSBleHBvcnRzLmJyYW5jaExvY2FsVGFzayA9IGV4cG9ydHMuYnJhbmNoVGFzayA9IGV4cG9ydHMuY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHBhcnNlX2JyYW5jaF9kZWxldGVfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWJyYW5jaC1kZWxldGVcIik7XG5jb25zdCBwYXJzZV9icmFuY2hfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWJyYW5jaFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjb250YWluc0RlbGV0ZUJyYW5jaENvbW1hbmQoY29tbWFuZHMpIHtcbiAgICBjb25zdCBkZWxldGVDb21tYW5kcyA9IFsnLWQnLCAnLUQnLCAnLS1kZWxldGUnXTtcbiAgICByZXR1cm4gY29tbWFuZHMuc29tZShjb21tYW5kID0+IGRlbGV0ZUNvbW1hbmRzLmluY2x1ZGVzKGNvbW1hbmQpKTtcbn1cbmV4cG9ydHMuY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kID0gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kO1xuZnVuY3Rpb24gYnJhbmNoVGFzayhjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgaXNEZWxldGUgPSBjb250YWluc0RlbGV0ZUJyYW5jaENvbW1hbmQoY3VzdG9tQXJncyk7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2JyYW5jaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLWEnKTtcbiAgICB9XG4gICAgaWYgKCFjb21tYW5kcy5pbmNsdWRlcygnLXYnKSkge1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UoMSwgMCwgJy12Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgaWYgKGlzRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycikuYWxsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF8xLnBhcnNlQnJhbmNoU3VtbWFyeShzdGRPdXQpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaFRhc2sgPSBicmFuY2hUYXNrO1xuZnVuY3Rpb24gYnJhbmNoTG9jYWxUYXNrKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlX2JyYW5jaF8xLnBhcnNlQnJhbmNoU3VtbWFyeTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ2JyYW5jaCcsICctdiddLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoTG9jYWxUYXNrID0gYnJhbmNoTG9jYWxUYXNrO1xuZnVuY3Rpb24gZGVsZXRlQnJhbmNoZXNUYXNrKGJyYW5jaGVzLCBmb3JjZURlbGV0ZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydicmFuY2gnLCAnLXYnLCBmb3JjZURlbGV0ZSA/ICctRCcgOiAnLWQnLCAuLi5icmFuY2hlc10sXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3IoeyBleGl0Q29kZSwgc3RkT3V0IH0sIGVycm9yLCBkb25lLCBmYWlsKSB7XG4gICAgICAgICAgICBpZiAoIXBhcnNlX2JyYW5jaF9kZWxldGVfMS5oYXNCcmFuY2hEZWxldGlvbkVycm9yKFN0cmluZyhlcnJvciksIGV4aXRDb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUoc3RkT3V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWxldGVCcmFuY2hlc1Rhc2sgPSBkZWxldGVCcmFuY2hlc1Rhc2s7XG5mdW5jdGlvbiBkZWxldGVCcmFuY2hUYXNrKGJyYW5jaCwgZm9yY2VEZWxldGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsnYnJhbmNoJywgJy12JywgZm9yY2VEZWxldGUgPyAnLUQnIDogJy1kJywgYnJhbmNoXSxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfYnJhbmNoX2RlbGV0ZV8xLnBhcnNlQnJhbmNoRGVsZXRpb25zKHN0ZE91dCwgc3RkRXJyKS5icmFuY2hlc1ticmFuY2hdO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKHsgZXhpdENvZGUsIHN0ZEVyciwgc3RkT3V0IH0sIGVycm9yLCBfLCBmYWlsKSB7XG4gICAgICAgICAgICBpZiAoIXBhcnNlX2JyYW5jaF9kZWxldGVfMS5oYXNCcmFuY2hEZWxldGlvbkVycm9yKFN0cmluZyhlcnJvciksIGV4aXRDb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKHRhc2sucGFyc2VyKHV0aWxzXzEuYnVmZmVyVG9TdHJpbmcoc3RkT3V0KSwgdXRpbHNfMS5idWZmZXJUb1N0cmluZyhzdGRFcnIpKSwgU3RyaW5nKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmV4cG9ydHMuZGVsZXRlQnJhbmNoVGFzayA9IGRlbGV0ZUJyYW5jaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icmFuY2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQ2hlY2tJZ25vcmUgPSB2b2lkIDA7XG4vKipcbiAqIFBhcnNlciBmb3IgdGhlIGBjaGVjay1pZ25vcmVgIGNvbW1hbmQgLSByZXR1cm5zIGVhY2ggZmlsZSBhcyBhIHN0cmluZyBhcnJheVxuICovXG5jb25zdCBwYXJzZUNoZWNrSWdub3JlID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdCgvXFxuL2cpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSlcbiAgICAgICAgLmZpbHRlcihmaWxlID0+ICEhZmlsZSk7XG59O1xuZXhwb3J0cy5wYXJzZUNoZWNrSWdub3JlID0gcGFyc2VDaGVja0lnbm9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoZWNrSWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGVja0lnbm9yZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBDaGVja0lnbm9yZV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9DaGVja0lnbm9yZVwiKTtcbmZ1bmN0aW9uIGNoZWNrSWdub3JlVGFzayhwYXRocykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2NoZWNrLWlnbm9yZScsIC4uLnBhdGhzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IENoZWNrSWdub3JlXzEucGFyc2VDaGVja0lnbm9yZSxcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lnbm9yZVRhc2sgPSBjaGVja0lnbm9yZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVjay1pZ25vcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsb25lTWlycm9yVGFzayA9IGV4cG9ydHMuY2xvbmVUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjbG9uZVRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2Nsb25lJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHR5cGVvZiByZXBvID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb21tYW5kcy5wdXNoKHJlcG8pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpcmVjdG9yeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChkaXJlY3RvcnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5jbG9uZVRhc2sgPSBjbG9uZVRhc2s7XG5mdW5jdGlvbiBjbG9uZU1pcnJvclRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKSB7XG4gICAgdXRpbHNfMS5hcHBlbmQoY3VzdG9tQXJncywgJy0tbWlycm9yJyk7XG4gICAgcmV0dXJuIGNsb25lVGFzayhyZXBvLCBkaXJlY3RvcnksIGN1c3RvbUFyZ3MpO1xufVxuZXhwb3J0cy5jbG9uZU1pcnJvclRhc2sgPSBjbG9uZU1pcnJvclRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbG9uZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VDb21taXRSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eXFxbKFteXFxzXSspKCBcXChbXildK1xcKSk/IChbXlxcXV0rKS8sIChyZXN1bHQsIFticmFuY2gsIHJvb3QsIGNvbW1pdF0pID0+IHtcbiAgICAgICAgcmVzdWx0LmJyYW5jaCA9IGJyYW5jaDtcbiAgICAgICAgcmVzdWx0LmNvbW1pdCA9IGNvbW1pdDtcbiAgICAgICAgcmVzdWx0LnJvb3QgPSAhIXJvb3Q7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFxzKkF1dGhvcjpcXHMoLispL2ksIChyZXN1bHQsIFthdXRob3JdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gYXV0aG9yLnNwbGl0KCc8Jyk7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcGFydHMucG9wKCk7XG4gICAgICAgIGlmICghZW1haWwgfHwgIWVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXV0aG9yID0ge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLnN1YnN0cigwLCBlbWFpbC5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIG5hbWU6IHBhcnRzLmpvaW4oJzwnKS50cmltKClcbiAgICAgICAgfTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC8oXFxkKylbXixdKig/OixcXHMqKFxcZCspW14sXSopKD86LFxccyooXFxkKykpL2csIChyZXN1bHQsIFtjaGFuZ2VzLCBpbnNlcnRpb25zLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSBwYXJzZUludChjaGFuZ2VzLCAxMCkgfHwgMDtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9IHBhcnNlSW50KGluc2VydGlvbnMsIDEwKSB8fCAwO1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSBwYXJzZUludChkZWxldGlvbnMsIDEwKSB8fCAwO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFxkKylbXixdKig/OixcXHMqKFxcZCspW14oXStcXCgoWystXSkpPy8sIChyZXN1bHQsIFtjaGFuZ2VzLCBsaW5lcywgZGlyZWN0aW9uXSkgPT4ge1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5jaGFuZ2VzID0gcGFyc2VJbnQoY2hhbmdlcywgMTApIHx8IDA7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobGluZXMsIDEwKSB8fCAwO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmRlbGV0aW9ucyA9IGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5pbnNlcnRpb25zID0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9KSxcbl07XG5mdW5jdGlvbiBwYXJzZUNvbW1pdFJlc3VsdChzdGRPdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgICAgYnJhbmNoOiAnJyxcbiAgICAgICAgY29tbWl0OiAnJyxcbiAgICAgICAgcm9vdDogZmFsc2UsXG4gICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgIGNoYW5nZXM6IDAsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgICAgICAgZGVsZXRpb25zOiAwLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlQ29tbWl0UmVzdWx0ID0gcGFyc2VDb21taXRSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1jb21taXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbW1pdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9jb21taXRfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWNvbW1pdFwiKTtcbmZ1bmN0aW9uIGNvbW1pdFRhc2sobWVzc2FnZSwgZmlsZXMsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY29tbWl0J107XG4gICAgbWVzc2FnZS5mb3JFYWNoKChtKSA9PiBjb21tYW5kcy5wdXNoKCctbScsIG0pKTtcbiAgICBjb21tYW5kcy5wdXNoKC4uLmZpbGVzLCAuLi5jdXN0b21BcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX2NvbW1pdF8xLnBhcnNlQ29tbWl0UmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLmNvbW1pdFRhc2sgPSBjb21taXRUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaWZmU3VtbWFyeVRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9kaWZmX3N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWRpZmYtc3VtbWFyeVwiKTtcbmZ1bmN0aW9uIGRpZmZTdW1tYXJ5VGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnZGlmZicsICctLXN0YXQ9NDA5NicsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9kaWZmX3N1bW1hcnlfMS5wYXJzZURpZmZSZXN1bHQoc3RkT3V0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRpZmZTdW1tYXJ5VGFzayA9IGRpZmZTdW1tYXJ5VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpZmYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlRmV0Y2hSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9Gcm9tICguKykkLywgKHJlc3VsdCwgW3JlbW90ZV0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZSA9IHJlbW90ZTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXCogXFxbbmV3IGJyYW5jaF1cXHMrKFxcUyspXFxzKi0+ICguKykkLywgKHJlc3VsdCwgW25hbWUsIHRyYWNraW5nXSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHJhY2tpbmcsXG4gICAgICAgIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL1xcKiBcXFtuZXcgdGFnXVxccysoXFxTKylcXHMqLT4gKC4rKSQvLCAocmVzdWx0LCBbbmFtZSwgdHJhY2tpbmddKSA9PiB7XG4gICAgICAgIHJlc3VsdC50YWdzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRyYWNraW5nLFxuICAgICAgICB9KTtcbiAgICB9KVxuXTtcbmZ1bmN0aW9uIHBhcnNlRmV0Y2hSZXN1bHQoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHJhdzogc3RkT3V0LFxuICAgICAgICByZW1vdGU6IG51bGwsXG4gICAgICAgIGJyYW5jaGVzOiBbXSxcbiAgICAgICAgdGFnczogW10sXG4gICAgfTtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHJlc3VsdCwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufVxuZXhwb3J0cy5wYXJzZUZldGNoUmVzdWx0ID0gcGFyc2VGZXRjaFJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWZldGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9mZXRjaF8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtZmV0Y2hcIik7XG5mdW5jdGlvbiBmZXRjaFRhc2socmVtb3RlLCBicmFuY2gsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnZmV0Y2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAocmVtb3RlICYmIGJyYW5jaCkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKHJlbW90ZSwgYnJhbmNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9mZXRjaF8xLnBhcnNlRmV0Y2hSZXN1bHQsXG4gICAgfTtcbn1cbmV4cG9ydHMuZmV0Y2hUYXNrID0gZmV0Y2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15SZW5hbWluZyAoLispIHRvICguKykkLywgKHJlc3VsdCwgW2Zyb20sIHRvXSkgPT4ge1xuICAgICAgICByZXN1bHQubW92ZXMucHVzaCh7IGZyb20sIHRvIH0pO1xuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlTW92ZVJlc3VsdChzdGRPdXQpIHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgbW92ZXM6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHBhcnNlTW92ZVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLW1vdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1vdmVUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbW92ZV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbW92ZVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBtb3ZlVGFzayhmcm9tLCB0bykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ212JywgJy12JywgLi4udXRpbHNfMS5hc0FycmF5KGZyb20pLCB0b10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9tb3ZlXzEucGFyc2VNb3ZlUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLm1vdmVUYXNrID0gbW92ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wdWxsVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX3B1bGxfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLXB1bGxcIik7XG5mdW5jdGlvbiBwdWxsVGFzayhyZW1vdGUsIGJyYW5jaCwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydwdWxsJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlbW90ZSAmJiBicmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlbW90ZSwgYnJhbmNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5wdWxsVGFzayA9IHB1bGxUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA9IGV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHBhcnNlR2V0UmVtb3Rlcyh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lXSkgPT4gcmVtb3Rlc1tuYW1lXSA9IHsgbmFtZSB9KTtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZW1vdGVzKTtcbn1cbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gcGFyc2VHZXRSZW1vdGVzO1xuZnVuY3Rpb24gcGFyc2VHZXRSZW1vdGVzVmVyYm9zZSh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lLCB1cmwsIHB1cnBvc2VdKSA9PiB7XG4gICAgICAgIGlmICghcmVtb3Rlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmVtb3Rlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHJlZnM6IHsgZmV0Y2g6ICcnLCBwdXNoOiAnJyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHVycG9zZSAmJiB1cmwpIHtcbiAgICAgICAgICAgIHJlbW90ZXNbbmFtZV0ucmVmc1twdXJwb3NlLnJlcGxhY2UoL1teYS16XS9nLCAnJyldID0gdXJsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVtb3Rlcyk7XG59XG5leHBvcnRzLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgPSBwYXJzZUdldFJlbW90ZXNWZXJib3NlO1xuZnVuY3Rpb24gZm9yRWFjaCh0ZXh0LCBoYW5kbGVyKSB7XG4gICAgdXRpbHNfMS5mb3JFYWNoTGluZVdpdGhDb250ZW50KHRleHQsIChsaW5lKSA9PiBoYW5kbGVyKGxpbmUuc3BsaXQoL1xccysvKSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R2V0UmVtb3RlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IGV4cG9ydHMucmVtb3RlVGFzayA9IGV4cG9ydHMubGlzdFJlbW90ZXNUYXNrID0gZXhwb3J0cy5nZXRSZW1vdGVzVGFzayA9IGV4cG9ydHMuYWRkUmVtb3RlVGFzayA9IHZvaWQgMDtcbmNvbnN0IEdldFJlbW90ZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBhZGRSZW1vdGVUYXNrKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlbW90ZScsICdhZGQnLCAuLi5jdXN0b21BcmdzLCByZW1vdGVOYW1lLCByZW1vdGVSZXBvXSk7XG59XG5leHBvcnRzLmFkZFJlbW90ZVRhc2sgPSBhZGRSZW1vdGVUYXNrO1xuZnVuY3Rpb24gZ2V0UmVtb3Rlc1Rhc2sodmVyYm9zZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZW1vdGUnXTtcbiAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHZlcmJvc2UgPyBHZXRSZW1vdGVTdW1tYXJ5XzEucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA6IEdldFJlbW90ZVN1bW1hcnlfMS5wYXJzZUdldFJlbW90ZXMsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0UmVtb3Rlc1Rhc2sgPSBnZXRSZW1vdGVzVGFzaztcbmZ1bmN0aW9uIGxpc3RSZW1vdGVzVGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdscy1yZW1vdGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ2xzLXJlbW90ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5saXN0UmVtb3Rlc1Rhc2sgPSBsaXN0UmVtb3Rlc1Rhc2s7XG5mdW5jdGlvbiByZW1vdGVUYXNrKGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWy4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kc1swXSAhPT0gJ3JlbW90ZScpIHtcbiAgICAgICAgY29tbWFuZHMudW5zaGlmdCgncmVtb3RlJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnJlbW90ZVRhc2sgPSByZW1vdGVUYXNrO1xuZnVuY3Rpb24gcmVtb3ZlUmVtb3RlVGFzayhyZW1vdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsncmVtb3RlJywgJ3JlbW92ZScsIHJlbW90ZU5hbWVdKTtcbn1cbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IHJlbW92ZVJlbW90ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXNoTGlzdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5XCIpO1xuY29uc3QgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5mdW5jdGlvbiBzdGFzaExpc3RUYXNrKG9wdCA9IHt9LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGxvZ18xLnBhcnNlTG9nT3B0aW9ucyhvcHQpO1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihvcHRpb25zLnNwbGl0dGVyLCBvcHRpb25zLmZpZWxkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnc3Rhc2gnLCAnbGlzdCcsIC4uLm9wdGlvbnMuY29tbWFuZHMsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5zdGFzaExpc3RUYXNrID0gc3Rhc2hMaXN0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXNoLWxpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLnN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFkZFN1Yk1vZHVsZVRhc2socmVwbywgcGF0aCkge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsnYWRkJywgcmVwbywgcGF0aF0pO1xufVxuZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gYWRkU3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIGluaXRTdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gc3ViTW9kdWxlVGFzayhbJ2luaXQnLCAuLi5jdXN0b21BcmdzXSk7XG59XG5leHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gaW5pdFN1Yk1vZHVsZVRhc2s7XG5mdW5jdGlvbiBzdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdzdWJtb2R1bGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ3N1Ym1vZHVsZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5zdWJNb2R1bGVUYXNrID0gc3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIHVwZGF0ZVN1Yk1vZHVsZVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsndXBkYXRlJywgLi4uY3VzdG9tQXJnc10pO1xufVxuZXhwb3J0cy51cGRhdGVTdWJNb2R1bGVUYXNrID0gdXBkYXRlU3ViTW9kdWxlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1Yi1tb2R1bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlVGFnTGlzdCA9IGV4cG9ydHMuVGFnTGlzdCA9IHZvaWQgMDtcbmNsYXNzIFRhZ0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGFsbCwgbGF0ZXN0KSB7XG4gICAgICAgIHRoaXMuYWxsID0gYWxsO1xuICAgICAgICB0aGlzLmxhdGVzdCA9IGxhdGVzdDtcbiAgICB9XG59XG5leHBvcnRzLlRhZ0xpc3QgPSBUYWdMaXN0O1xuY29uc3QgcGFyc2VUYWdMaXN0ID0gZnVuY3Rpb24gKGRhdGEsIGN1c3RvbVNvcnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhZ3MgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcCh0cmltbWVkKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGlmICghY3VzdG9tU29ydCkge1xuICAgICAgICB0YWdzLnNvcnQoZnVuY3Rpb24gKHRhZ0EsIHRhZ0IpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQSA9IHRhZ0Euc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQiA9IHRhZ0Iuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChwYXJ0c0EubGVuZ3RoID09PSAxIHx8IHBhcnRzQi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2luZ2xlU29ydGVkKHRvTnVtYmVyKHBhcnRzQVswXSksIHRvTnVtYmVyKHBhcnRzQlswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBNYXRoLm1heChwYXJ0c0EubGVuZ3RoLCBwYXJ0c0IubGVuZ3RoKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBzb3J0ZWQodG9OdW1iZXIocGFydHNBW2ldKSwgdG9OdW1iZXIocGFydHNCW2ldKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3QgPSBjdXN0b21Tb3J0ID8gdGFnc1swXSA6IFsuLi50YWdzXS5yZXZlcnNlKCkuZmluZCgodGFnKSA9PiB0YWcuaW5kZXhPZignLicpID49IDApO1xuICAgIHJldHVybiBuZXcgVGFnTGlzdCh0YWdzLCBsYXRlc3QpO1xufTtcbmV4cG9ydHMucGFyc2VUYWdMaXN0ID0gcGFyc2VUYWdMaXN0O1xuZnVuY3Rpb24gc2luZ2xlU29ydGVkKGEsIGIpIHtcbiAgICBjb25zdCBhSXNOdW0gPSBpc05hTihhKTtcbiAgICBjb25zdCBiSXNOdW0gPSBpc05hTihiKTtcbiAgICBpZiAoYUlzTnVtICE9PSBiSXNOdW0pIHtcbiAgICAgICAgcmV0dXJuIGFJc051bSA/IDEgOiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGFJc051bSA/IHNvcnRlZChhLCBiKSA6IDA7XG59XG5mdW5jdGlvbiBzb3J0ZWQoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xufVxuZnVuY3Rpb24gdHJpbW1lZChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50cmltKCk7XG59XG5mdW5jdGlvbiB0b051bWJlcihpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC5yZXBsYWNlKC9eXFxEKy9nLCAnJyksIDEwKSB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhZ0xpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZEFubm90YXRlZFRhZ1Rhc2sgPSBleHBvcnRzLmFkZFRhZ1Rhc2sgPSBleHBvcnRzLnRhZ0xpc3RUYXNrID0gdm9pZCAwO1xuY29uc3QgVGFnTGlzdF8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9UYWdMaXN0XCIpO1xuLyoqXG4gKiBUYXNrIHVzZWQgYnkgYGdpdC50YWdzYFxuICovXG5mdW5jdGlvbiB0YWdMaXN0VGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBoYXNDdXN0b21Tb3J0ID0gY3VzdG9tQXJncy5zb21lKChvcHRpb24pID0+IC9eLS1zb3J0PS8udGVzdChvcHRpb24pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctbCcsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFRhZ0xpc3RfMS5wYXJzZVRhZ0xpc3QodGV4dCwgaGFzQ3VzdG9tU29ydCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMudGFnTGlzdFRhc2sgPSB0YWdMaXN0VGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRUYWdUYXNrKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRUYWdUYXNrID0gYWRkVGFnVGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRBbm5vdGF0ZWRUYWdUYXNrKG5hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctYScsICctbScsIHRhZ01lc3NhZ2UsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRBbm5vdGF0ZWRUYWdUYXNrID0gYWRkQW5ub3RhdGVkVGFnVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhZy5qcy5tYXAiLCJjb25zdCB7R2l0RXhlY3V0b3J9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9naXQtZXhlY3V0b3InKTtcbmNvbnN0IHtTaW1wbGVHaXRBcGl9ID0gcmVxdWlyZSgnLi9saWIvc2ltcGxlLWdpdC1hcGknKTtcblxuY29uc3Qge1NjaGVkdWxlcn0gPSByZXF1aXJlKCcuL2xpYi9ydW5uZXJzL3NjaGVkdWxlcicpO1xuY29uc3Qge0dpdExvZ2dlcn0gPSByZXF1aXJlKCcuL2xpYi9naXQtbG9nZ2VyJyk7XG5jb25zdCB7Y29uZmlndXJhdGlvbkVycm9yVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5jb25zdCB7XG4gICBhc0FycmF5LFxuICAgZmlsdGVyQXJyYXksXG4gICBmaWx0ZXJQcmltaXRpdmVzLFxuICAgZmlsdGVyU3RyaW5nLFxuICAgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSxcbiAgIGZpbHRlclR5cGUsXG4gICBnZXRUcmFpbGluZ09wdGlvbnMsXG4gICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQsXG4gICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudFxufSA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XG5jb25zdCB7YXBwbHlQYXRjaFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvYXBwbHktcGF0Y2gnKVxuY29uc3Qge2JyYW5jaFRhc2ssIGJyYW5jaExvY2FsVGFzaywgZGVsZXRlQnJhbmNoZXNUYXNrLCBkZWxldGVCcmFuY2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2JyYW5jaCcpO1xuY29uc3Qge2NoZWNrSWdub3JlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jaGVjay1pZ25vcmUnKTtcbmNvbnN0IHtjaGVja0lzUmVwb1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2hlY2staXMtcmVwbycpO1xuY29uc3Qge2Nsb25lVGFzaywgY2xvbmVNaXJyb3JUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2Nsb25lJyk7XG5jb25zdCB7Y2xlYW5XaXRoT3B0aW9uc1Rhc2ssIGlzQ2xlYW5PcHRpb25zQXJyYXl9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2xlYW4nKTtcbmNvbnN0IHtjb21taXRUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NvbW1pdCcpO1xuY29uc3Qge2RpZmZTdW1tYXJ5VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9kaWZmJyk7XG5jb25zdCB7ZmV0Y2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2ZldGNoJyk7XG5jb25zdCB7bW92ZVRhc2t9ID0gcmVxdWlyZShcIi4vbGliL3Rhc2tzL21vdmVcIik7XG5jb25zdCB7cHVsbFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcHVsbCcpO1xuY29uc3Qge3B1c2hUYWdzVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9wdXNoJyk7XG5jb25zdCB7YWRkUmVtb3RlVGFzaywgZ2V0UmVtb3Rlc1Rhc2ssIGxpc3RSZW1vdGVzVGFzaywgcmVtb3RlVGFzaywgcmVtb3ZlUmVtb3RlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9yZW1vdGUnKTtcbmNvbnN0IHtnZXRSZXNldE1vZGUsIHJlc2V0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9yZXNldCcpO1xuY29uc3Qge3N0YXNoTGlzdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3Mvc3Rhc2gtbGlzdCcpO1xuY29uc3Qge2FkZFN1Yk1vZHVsZVRhc2ssIGluaXRTdWJNb2R1bGVUYXNrLCBzdWJNb2R1bGVUYXNrLCB1cGRhdGVTdWJNb2R1bGVUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N1Yi1tb2R1bGUnKTtcbmNvbnN0IHthZGRBbm5vdGF0ZWRUYWdUYXNrLCBhZGRUYWdUYXNrLCB0YWdMaXN0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YWcnKTtcbmNvbnN0IHtzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrLCBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3Rhc2snKTtcblxuZnVuY3Rpb24gR2l0IChvcHRpb25zLCBwbHVnaW5zKSB7XG4gICB0aGlzLl9leGVjdXRvciA9IG5ldyBHaXRFeGVjdXRvcihcbiAgICAgIG9wdGlvbnMuYmluYXJ5LCBvcHRpb25zLmJhc2VEaXIsXG4gICAgICBuZXcgU2NoZWR1bGVyKG9wdGlvbnMubWF4Q29uY3VycmVudFByb2Nlc3NlcyksIHBsdWdpbnMsXG4gICApO1xuICAgdGhpcy5fbG9nZ2VyID0gbmV3IEdpdExvZ2dlcigpO1xufVxuXG4oR2l0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2ltcGxlR2l0QXBpLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gR2l0O1xuXG4vKipcbiAqIExvZ2dpbmcgdXRpbGl0eSBmb3IgcHJpbnRpbmcgb3V0IGluZm8gb3IgZXJyb3IgbWVzc2FnZXMgdG8gdGhlIHVzZXJcbiAqIEB0eXBlIHtHaXRMb2dnZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5HaXQucHJvdG90eXBlLl9sb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFNldHMgdGhlIHBhdGggdG8gYSBjdXN0b20gZ2l0IGJpbmFyeSwgc2hvdWxkIGVpdGhlciBiZSBgZ2l0YCB3aGVuIHRoZXJlIGlzIGFuIGluc3RhbGxhdGlvbiBvZiBnaXQgYXZhaWxhYmxlIG9uXG4gKiB0aGUgc3lzdGVtIHBhdGgsIG9yIGEgZnVsbHkgcXVhbGlmaWVkIHBhdGggdG8gdGhlIGV4ZWN1dGFibGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmRcbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuY3VzdG9tQmluYXJ5ID0gZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgIHRoaXMuX2V4ZWN1dG9yLmJpbmFyeSA9IGNvbW1hbmQ7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSBmb3IgdGhlIHNwYXduZWQgY2hpbGQgcHJvY2VzcywgZWl0aGVyIHN1cHBseSBib3RoIGEgbmFtZSBhbmQgdmFsdWUgYXMgc3RyaW5ncyBvclxuICogYSBzaW5nbGUgb2JqZWN0IHRvIGVudGlyZWx5IHJlcGxhY2UgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuZW52ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuX2V4ZWN1dG9yLmVudiA9IG5hbWU7XG4gICB9IGVsc2Uge1xuICAgICAgKHRoaXMuX2V4ZWN1dG9yLmVudiA9IHRoaXMuX2V4ZWN1dG9yLmVudiB8fCB7fSlbbmFtZV0gPSB2YWx1ZTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIExpc3QgdGhlIHN0YXNoKHMpIG9mIHRoZSBsb2NhbCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUuc3Rhc2hMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3Rhc2hMaXN0VGFzayhcbiAgICAgICAgIHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3VtZW50cykgfHwge30sXG4gICAgICAgICBmaWx0ZXJBcnJheShvcHRpb25zKSAmJiBvcHRpb25zIHx8IFtdXG4gICAgICApLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xvbmVUYXNrIChhcGksIHRhc2ssIHJlcG9QYXRoLCBsb2NhbFBhdGgpIHtcbiAgIGlmICh0eXBlb2YgcmVwb1BhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY29uZmlndXJhdGlvbkVycm9yVGFzayhgZ2l0LiR7IGFwaSB9KCkgcmVxdWlyZXMgYSBzdHJpbmcgJ3JlcG9QYXRoJ2ApO1xuICAgfVxuXG4gICByZXR1cm4gdGFzayhyZXBvUGF0aCwgZmlsdGVyVHlwZShsb2NhbFBhdGgsIGZpbHRlclN0cmluZyksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcbn1cblxuXG4vKipcbiAqIENsb25lIGEgZ2l0IHJlcG9cbiAqL1xuR2l0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY3JlYXRlQ2xvbmVUYXNrKCdjbG9uZScsIGNsb25lVGFzaywgLi4uYXJndW1lbnRzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTWlycm9yIGEgZ2l0IHJlcG9cbiAqL1xuR2l0LnByb3RvdHlwZS5taXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNyZWF0ZUNsb25lVGFzaygnbWlycm9yJywgY2xvbmVNaXJyb3JUYXNrLCAuLi5hcmd1bWVudHMpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBNb3ZlcyBvbmUgb3IgbW9yZSBmaWxlcyB0byBhIG5ldyBkZXN0aW5hdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0LXNjbS5jb20vZG9jcy9naXQtbXZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZnJvbVxuICogQHBhcmFtIHtzdHJpbmd9IHRvXG4gKi9cbkdpdC5wcm90b3R5cGUubXYgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKG1vdmVUYXNrKGZyb20sIHRvKSwgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBJbnRlcm5hbGx5IHVzZXMgcHVsbCBhbmQgdGFncyB0byBnZXQgdGhlIGxpc3Qgb2YgdGFncyB0aGVuIGNoZWNrcyBvdXQgdGhlIGxhdGVzdCB0YWcuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXRMYXRlc3RUYWcgPSBmdW5jdGlvbiAodGhlbikge1xuICAgdmFyIGdpdCA9IHRoaXM7XG4gICByZXR1cm4gdGhpcy5wdWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGdpdC50YWdzKGZ1bmN0aW9uIChlcnIsIHRhZ3MpIHtcbiAgICAgICAgIGdpdC5jaGVja291dCh0YWdzLmxhdGVzdCwgdGhlbik7XG4gICAgICB9KTtcbiAgIH0pO1xufTtcblxuLyoqXG4gKiBDb21taXRzIGNoYW5nZXMgaW4gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgLSB3aGVuIHNwZWNpZmljIGZpbGUgcGF0aHMgYXJlIHN1cHBsaWVkLCBvbmx5IGNoYW5nZXMgb24gdGhvc2VcbiAqIGZpbGVzIHdpbGwgYmUgY29tbWl0dGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBtZXNzYWdlXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2ZpbGVzXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGZpbGVzLCBvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuXG4gICBpZiAoZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheShtZXNzYWdlKSkge1xuICAgICAgbWVzc2FnZXMucHVzaCguLi5hc0FycmF5KG1lc3NhZ2UpKTtcbiAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3NpbXBsZS1naXQgZGVwcmVjYXRpb24gbm90aWNlOiBnaXQuY29tbWl0OiByZXF1aXJlcyB0aGUgY29tbWl0IG1lc3NhZ2UgdG8gYmUgc3VwcGxpZWQgYXMgYSBzdHJpbmcvc3RyaW5nW10sIHRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB2ZXJzaW9uIDMnKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjb21taXRUYXNrKFxuICAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgICBhc0FycmF5KGZpbHRlclR5cGUoZmlsZXMsIGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXksIFtdKSksXG4gICAgICAgICBbLi4uZmlsdGVyVHlwZShvcHRpb25zLCBmaWx0ZXJBcnJheSwgW10pLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAwLCB0cnVlKV1cbiAgICAgICksXG4gICAgICBuZXh0XG4gICApO1xufTtcblxuLyoqXG4gKiBQdWxsIHRoZSB1cGRhdGVkIGNvbnRlbnRzIG9mIHRoZSBjdXJyZW50IHJlcG9cbiAqL1xuR2l0LnByb3RvdHlwZS5wdWxsID0gZnVuY3Rpb24gKHJlbW90ZSwgYnJhbmNoLCBvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHB1bGxUYXNrKGZpbHRlclR5cGUocmVtb3RlLCBmaWx0ZXJTdHJpbmcpLCBmaWx0ZXJUeXBlKGJyYW5jaCwgZmlsdGVyU3RyaW5nKSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBGZXRjaCB0aGUgdXBkYXRlZCBjb250ZW50cyBvZiB0aGUgY3VycmVudCByZXBvLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgIC5mZXRjaCgndXBzdHJlYW0nLCAnbWFzdGVyJykgLy8gZmV0Y2hlcyBmcm9tIG1hc3RlciBvbiByZW1vdGUgbmFtZWQgdXBzdHJlYW1cbiAqICAgLmZldGNoKGZ1bmN0aW9uICgpIHt9KSAvLyBydW5zIGZldGNoIGFnYWluc3QgZGVmYXVsdCByZW1vdGUgYW5kIGJyYW5jaCBhbmQgY2FsbHMgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3JlbW90ZV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbYnJhbmNoXVxuICovXG5HaXQucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKHJlbW90ZSwgYnJhbmNoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGZldGNoVGFzayhmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKSwgZmlsdGVyVHlwZShicmFuY2gsIGZpbHRlclN0cmluZyksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRGlzYWJsZXMvZW5hYmxlcyB0aGUgdXNlIG9mIHRoZSBjb25zb2xlIGZvciBwcmludGluZyB3YXJuaW5ncyBhbmQgZXJyb3JzLCBieSBkZWZhdWx0IG1lc3NhZ2VzIGFyZSBub3Qgc2hvd24gaW5cbiAqIGEgcHJvZHVjdGlvbiBlbnZpcm9ubWVudC5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVuY2VcbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuc2lsZW50ID0gZnVuY3Rpb24gKHNpbGVuY2UpIHtcbiAgIGNvbnNvbGUud2Fybignc2ltcGxlLWdpdCBkZXByZWNhdGlvbiBub3RpY2U6IGdpdC5zaWxlbnQ6IGxvZ2dpbmcgc2hvdWxkIGJlIGNvbmZpZ3VyZWQgdXNpbmcgdGhlIGBkZWJ1Z2AgbGlicmFyeSAvIGBERUJVR2AgZW52aXJvbm1lbnQgdmFyaWFibGUsIHRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB2ZXJzaW9uIDMnKTtcbiAgIHRoaXMuX2xvZ2dlci5zaWxlbnQoISFzaWxlbmNlKTtcbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBMaXN0IGFsbCB0YWdzLiBXaGVuIHVzaW5nIGdpdCAyLjcuMCBvciBhYm92ZSwgaW5jbHVkZSBhbiBvcHRpb25zIG9iamVjdCB3aXRoIGBcIi0tc29ydFwiOiBcInByb3BlcnR5LW5hbWVcImAgdG9cbiAqIHNvcnQgdGhlIHRhZ3MgYnkgdGhhdCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBkZWZhdWx0IHNlbWFudGljIHZlcnNpb25pbmcgc29ydC5cbiAqXG4gKiBOb3RlLCBzdXBwbHlpbmcgdGhpcyBvcHRpb24gd2hlbiBpdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgR2l0IHZlcnNpb24gd2lsbCBjYXVzZSB0aGUgb3BlcmF0aW9uIHRvIGZhaWwuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUudGFncyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHRhZ0xpc3RUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUmViYXNlcyB0aGUgY3VycmVudCB3b3JraW5nIGNvcHkuIE9wdGlvbnMgY2FuIGJlIHN1cHBsaWVkIGVpdGhlciBhcyBhbiBhcnJheSBvZiBzdHJpbmcgcGFyYW1ldGVyc1xuICogdG8gYmUgc2VudCB0byB0aGUgYGdpdCByZWJhc2VgIGNvbW1hbmQsIG9yIGEgc3RhbmRhcmQgb3B0aW9ucyBvYmplY3QuXG4gKi9cbkdpdC5wcm90b3R5cGUucmViYXNlID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsncmViYXNlJywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXNldCBhIHJlcG9cbiAqL1xuR2l0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHJlc2V0VGFzayhnZXRSZXNldE1vZGUobW9kZSksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUmV2ZXJ0IG9uZSBvciBtb3JlIGNvbW1pdHMgaW4gdGhlIGxvY2FsIHdvcmtpbmcgY29weVxuICovXG5HaXQucHJvdG90eXBlLnJldmVydCA9IGZ1bmN0aW9uIChjb21taXQpIHtcbiAgIGNvbnN0IG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgaWYgKHR5cGVvZiBjb21taXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgICAgIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0NvbW1pdCBtdXN0IGJlIGEgc3RyaW5nJyksXG4gICAgICAgICBuZXh0LFxuICAgICAgKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsncmV2ZXJ0JywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMCwgdHJ1ZSksIGNvbW1pdF0pLFxuICAgICAgbmV4dFxuICAgKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlnaHR3ZWlnaHQgdGFnIHRvIHRoZSBoZWFkIG9mIHRoZSBjdXJyZW50IGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmFkZFRhZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICBjb25zdCB0YXNrID0gKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJylcbiAgICAgID8gYWRkVGFnVGFzayhuYW1lKVxuICAgICAgOiBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQuYWRkVGFnIHJlcXVpcmVzIGEgdGFnIG5hbWUnKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBBZGQgYW4gYW5ub3RhdGVkIHRhZyB0byB0aGUgaGVhZCBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRBbm5vdGF0ZWRUYWcgPSBmdW5jdGlvbiAodGFnTmFtZSwgdGFnTWVzc2FnZSkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRBbm5vdGF0ZWRUYWdUYXNrKHRhZ05hbWUsIHRhZ01lc3NhZ2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDaGVjayBvdXQgYSB0YWcgb3IgcmV2aXNpb24sIGFueSBudW1iZXIgb2YgYWRkaXRpb25hbCBhcmd1bWVudHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgYGdpdCBjaGVja291dGAgY29tbWFuZFxuICogYnkgc3VwcGx5aW5nIGVpdGhlciBhIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja291dCA9IGZ1bmN0aW9uICgpIHtcbiAgIGNvbnN0IGNvbW1hbmRzID0gWydjaGVja291dCcsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpXTtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENoZWNrIG91dCBhIHJlbW90ZSBicmFuY2hcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJhbmNoTmFtZSBuYW1lIG9mIGJyYW5jaFxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0UG9pbnQgKGUuZyBvcmlnaW4vZGV2ZWxvcG1lbnQpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja291dEJyYW5jaCA9IGZ1bmN0aW9uIChicmFuY2hOYW1lLCBzdGFydFBvaW50LCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5jaGVja291dChbJy1iJywgYnJhbmNoTmFtZSwgc3RhcnRQb2ludF0sIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgb3V0IGEgbG9jYWwgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXRMb2NhbEJyYW5jaCA9IGZ1bmN0aW9uIChicmFuY2hOYW1lLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5jaGVja291dChbJy1iJywgYnJhbmNoTmFtZV0sIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogRGVsZXRlIGEgbG9jYWwgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuZGVsZXRlTG9jYWxCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgZm9yY2VEZWxldGUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgZGVsZXRlQnJhbmNoVGFzayhicmFuY2hOYW1lLCB0eXBlb2YgZm9yY2VEZWxldGUgPT09IFwiYm9vbGVhblwiID8gZm9yY2VEZWxldGUgOiBmYWxzZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIERlbGV0ZSBvbmUgb3IgbW9yZSBsb2NhbCBicmFuY2hlc1xuICovXG5HaXQucHJvdG90eXBlLmRlbGV0ZUxvY2FsQnJhbmNoZXMgPSBmdW5jdGlvbiAoYnJhbmNoTmFtZXMsIGZvcmNlRGVsZXRlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRlbGV0ZUJyYW5jaGVzVGFzayhicmFuY2hOYW1lcywgdHlwZW9mIGZvcmNlRGVsZXRlID09PSBcImJvb2xlYW5cIiA/IGZvcmNlRGVsZXRlIDogZmFsc2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBMaXN0IGFsbCBicmFuY2hlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0IHwgc3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuYnJhbmNoID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYnJhbmNoVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJldHVybiBsaXN0IG9mIGxvY2FsIGJyYW5jaGVzXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuYnJhbmNoTG9jYWwgPSBmdW5jdGlvbiAodGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBicmFuY2hMb2NhbFRhc2soKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRXhlY3V0ZXMgYW55IGNvbW1hbmQgYWdhaW5zdCB0aGUgZ2l0IGJpbmFyeS5cbiAqL1xuR2l0LnByb3RvdHlwZS5yYXcgPSBmdW5jdGlvbiAoY29tbWFuZHMpIHtcbiAgIGNvbnN0IGNyZWF0ZVJlc3RDb21tYW5kcyA9ICFBcnJheS5pc0FycmF5KGNvbW1hbmRzKTtcbiAgIGNvbnN0IGNvbW1hbmQgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZVJlc3RDb21tYW5kcyA/IGFyZ3VtZW50cyA6IGNvbW1hbmRzLCAwKTtcblxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tYW5kLmxlbmd0aCAmJiBjcmVhdGVSZXN0Q29tbWFuZHM7IGkrKykge1xuICAgICAgaWYgKCFmaWx0ZXJQcmltaXRpdmVzKGNvbW1hbmRbaV0pKSB7XG4gICAgICAgICBjb21tYW5kLnNwbGljZShpLCBjb21tYW5kLmxlbmd0aCAtIGkpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbW1hbmQucHVzaChcbiAgICAgIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpLFxuICAgKTtcblxuICAgdmFyIG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgaWYgKCFjb21tYW5kLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdSYXc6IG11c3Qgc3VwcGx5IG9uZSBvciBtb3JlIGNvbW1hbmQgdG8gZXhlY3V0ZScpLFxuICAgICAgICAgbmV4dCxcbiAgICAgICk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCksIG5leHQpO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVBZGQgPSBmdW5jdGlvbiAocmVwbywgcGF0aCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRTdWJNb2R1bGVUYXNrKHJlcG8sIHBhdGgpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVVcGRhdGUgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB1cGRhdGVTdWJNb2R1bGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlSW5pdCA9IGZ1bmN0aW9uIChhcmdzLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGluaXRTdWJNb2R1bGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3ViTW9kdWxlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmxpc3RSZW1vdGUgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGxpc3RSZW1vdGVzVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSByZW1vdGUgdG8gdGhlIGxpc3Qgb2YgcmVtb3Rlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRSZW1vdGUgPSBmdW5jdGlvbiAocmVtb3RlTmFtZSwgcmVtb3RlUmVwbywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRSZW1vdGVUYXNrKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBlbnRyeSBieSBuYW1lIGZyb20gdGhlIGxpc3Qgb2YgcmVtb3Rlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5yZW1vdmVSZW1vdGUgPSBmdW5jdGlvbiAocmVtb3RlTmFtZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZW1vdmVSZW1vdGVUYXNrKHJlbW90ZU5hbWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50bHkgYXZhaWxhYmxlIHJlbW90ZXMsIHNldHRpbmcgdGhlIG9wdGlvbmFsIHZlcmJvc2UgYXJndW1lbnQgdG8gdHJ1ZSBpbmNsdWRlcyBhZGRpdGlvbmFsXG4gKiBkZXRhaWwgb24gdGhlIHJlbW90ZXMgdGhlbXNlbHZlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5nZXRSZW1vdGVzID0gZnVuY3Rpb24gKHZlcmJvc2UsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgZ2V0UmVtb3Rlc1Rhc2sodmVyYm9zZSA9PT0gdHJ1ZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENhbGwgYW55IGBnaXQgcmVtb3RlYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5yZW1vdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZW1vdGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2FsbCBhbnkgYGdpdCB0YWdgIGZ1bmN0aW9uIHdpdGggYXJndW1lbnRzIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnRhZyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBjb21tYW5kID0gZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyk7XG5cbiAgIGlmIChjb21tYW5kWzBdICE9PSAndGFnJykge1xuICAgICAgY29tbWFuZC51bnNoaWZ0KCd0YWcnKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cylcbiAgICk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgcmVwb3NpdG9yeSBzZXJ2ZXIgaW5mb1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnVwZGF0ZVNlcnZlckluZm8gPSBmdW5jdGlvbiAodGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsndXBkYXRlLXNlcnZlci1pbmZvJ10pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBQdXNoZXMgdGhlIGN1cnJlbnQgdGFnIGNoYW5nZXMgdG8gYSByZW1vdGUgd2hpY2ggY2FuIGJlIGVpdGhlciBhIFVSTCBvciBuYW1lZCByZW1vdGUuIFdoZW4gbm90IHNwZWNpZmllZCB1c2VzIHRoZVxuICogZGVmYXVsdCBjb25maWd1cmVkIHJlbW90ZSBzcGVjLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVtb3RlXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUucHVzaFRhZ3MgPSBmdW5jdGlvbiAocmVtb3RlLCB0aGVuKSB7XG4gICBjb25zdCB0YXNrID0gcHVzaFRhZ3NUYXNrKHtyZW1vdGU6IGZpbHRlclR5cGUocmVtb3RlLCBmaWx0ZXJTdHJpbmcpfSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5hbWVkIGZpbGVzIGZyb20gc291cmNlIGNvbnRyb2wuXG4gKi9cbkdpdC5wcm90b3R5cGUucm0gPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JtJywgJy1mJywgLi4uYXNBcnJheShmaWxlcyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sIGJ1dCBrZWVwcyB0aGVtIG9uIGRpc2sgcmF0aGVyIHRoYW4gZGVsZXRpbmcgdGhlbSBlbnRpcmVseS4gVG9cbiAqIGNvbXBsZXRlbHkgcmVtb3ZlIHRoZSBmaWxlcywgdXNlIGBybWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZpbGVzXG4gKi9cbkdpdC5wcm90b3R5cGUucm1LZWVwTG9jYWwgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JtJywgJy0tY2FjaGVkJywgLi4uYXNBcnJheShmaWxlcyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGluIGEgdHJlZSBiYXNlZCBvbiBjb21taXQgaGFzaC4gUGFzc2luZyBpbiBhbiBvYmplY3QgaGFzaCByZXR1cm5zIHRoZSBvYmplY3QncyBjb250ZW50LFxuICogc2l6ZSwgYW5kIHR5cGUuXG4gKlxuICogUGFzc2luZyBcIi1wXCIgd2lsbCBpbnN0cnVjdCBjYXQtZmlsZSB0byBkZXRlcm1pbmUgdGhlIG9iamVjdCB0eXBlLCBhbmQgZGlzcGxheSBpdHMgZm9ybWF0dGVkIGNvbnRlbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2F0RmlsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fY2F0RmlsZSgndXRmLTgnLCBhcmd1bWVudHMpO1xufTtcblxuR2l0LnByb3RvdHlwZS5iaW5hcnlDYXRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX2NhdEZpbGUoJ2J1ZmZlcicsIGFyZ3VtZW50cyk7XG59O1xuXG5HaXQucHJvdG90eXBlLl9jYXRGaWxlID0gZnVuY3Rpb24gKGZvcm1hdCwgYXJncykge1xuICAgdmFyIGhhbmRsZXIgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJncyk7XG4gICB2YXIgY29tbWFuZCA9IFsnY2F0LWZpbGUnXTtcbiAgIHZhciBvcHRpb25zID0gYXJnc1swXTtcblxuICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQuY2F0RmlsZTogb3B0aW9ucyBtdXN0IGJlIHN1cHBsaWVkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MnKSxcbiAgICAgICAgIGhhbmRsZXIsXG4gICAgICApO1xuICAgfVxuXG4gICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgY29tbWFuZC5wdXNoLmFwcGx5KGNvbW1hbmQsIG9wdGlvbnMpO1xuICAgfVxuXG4gICBjb25zdCB0YXNrID0gZm9ybWF0ID09PSAnYnVmZmVyJ1xuICAgICAgPyBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrKGNvbW1hbmQpXG4gICAgICA6IHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIGhhbmRsZXIpO1xufTtcblxuR2l0LnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIGNvbnN0IGNvbW1hbmQgPSBbJ2RpZmYnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV07XG5cbiAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbW1hbmQuc3BsaWNlKDEsIDAsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oJ0dpdCNkaWZmOiBzdXBwbHlpbmcgb3B0aW9ucyBhcyBhIHNpbmdsZSBzdHJpbmcgaXMgbm93IGRlcHJlY2F0ZWQsIHN3aXRjaCB0byBhbiBhcnJheSBvZiBzdHJpbmdzJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZGlmZlN1bW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRpZmZTdW1tYXJ5VGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAxKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAocGF0Y2hlcykge1xuICAgY29uc3QgdGFzayA9ICFmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5KHBhdGNoZXMpXG4gICAgICA/IGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC5hcHBseVBhdGNoIHJlcXVpcmVzIG9uZSBvciBtb3JlIHN0cmluZyBwYXRjaGVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudGApXG4gICAgICA6IGFwcGx5UGF0Y2hUYXNrKGFzQXJyYXkocGF0Y2hlcyksIGdldFRyYWlsaW5nT3B0aW9ucyhbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB0YXNrLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufVxuXG5HaXQucHJvdG90eXBlLnJldnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpXTtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcywgdHJ1ZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFNob3cgdmFyaW91cyB0eXBlcyBvZiBvYmplY3RzLCBmb3IgZXhhbXBsZSB0aGUgZmlsZSBhdCBhIGNlcnRhaW4gY29tbWl0XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3Nob3cnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAxKV0pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cylcbiAgICk7XG59O1xuXG4vKipcbiAqL1xuR2l0LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uIChtb2RlLCBvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ID0gaXNDbGVhbk9wdGlvbnNBcnJheShtb2RlKTtcbiAgIGNvbnN0IGNsZWFuTW9kZSA9IHVzaW5nQ2xlYW5PcHRpb25zQXJyYXkgJiYgbW9kZS5qb2luKCcnKSB8fCBmaWx0ZXJUeXBlKG1vZGUsIGZpbHRlclN0cmluZykgfHwgJyc7XG4gICBjb25zdCBjdXN0b21BcmdzID0gZ2V0VHJhaWxpbmdPcHRpb25zKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ID8gMSA6IDApKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjbGVhbldpdGhPcHRpb25zVGFzayhjbGVhbk1vZGUsIGN1c3RvbUFyZ3MpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICBjb21tYW5kczogW10sXG4gICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICBwYXJzZXIgKCkge1xuICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9O1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrKTtcbn07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNvbW1hbmRzIGFuZCByZXR1cm5zIHRoZSB3cmFwcGVyIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAqXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmNsZWFyUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAvLyBUT0RPOlxuICAgLy8gdGhpcy5fZXhlY3V0b3IuY2xlYXIoKTtcbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGhuYW1lIG9yIHBhdGhuYW1lcyBhcmUgZXhjbHVkZWQgYnkgLmdpdGlnbm9yZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBwYXRobmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrSWdub3JlID0gZnVuY3Rpb24gKHBhdGhuYW1lcywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjaGVja0lnbm9yZVRhc2soYXNBcnJheSgoZmlsdGVyVHlwZShwYXRobmFtZXMsIGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXksIFtdKSkpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuY2hlY2tJc1JlcG8gPSBmdW5jdGlvbiAoY2hlY2tUeXBlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNoZWNrSXNSZXBvVGFzayhmaWx0ZXJUeXBlKGNoZWNrVHlwZSwgZmlsdGVyU3RyaW5nKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdpdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5naXRJbnN0YW5jZUZhY3RvcnkgPSBleHBvcnRzLmdpdEV4cG9ydEZhY3RvcnkgPSBleHBvcnRzLmVzTW9kdWxlRmFjdG9yeSA9IHZvaWQgMDtcbmNvbnN0IGFwaV8xID0gcmVxdWlyZShcIi4vYXBpXCIpO1xuY29uc3QgcGx1Z2luc18xID0gcmVxdWlyZShcIi4vcGx1Z2luc1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IEdpdCA9IHJlcXVpcmUoJy4uL2dpdCcpO1xuLyoqXG4gKiBBZGRzIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllcyB0byB0aGUgc3VwcGxpZWQgb2JqZWN0IHRvIGVuYWJsZSBpdCBmb3IgdXNlIGFzXG4gKiB0aGUgZGVmYXVsdCBleHBvcnQgb2YgYSBtb2R1bGUuXG4gKlxuICogRWc6IGBtb2R1bGUuZXhwb3J0cyA9IGVzTW9kdWxlRmFjdG9yeSh7IHNvbWV0aGluZyAoKSB7fSB9KWBcbiAqL1xuZnVuY3Rpb24gZXNNb2R1bGVGYWN0b3J5KGRlZmF1bHRFeHBvcnQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZGVmYXVsdEV4cG9ydCwge1xuICAgICAgICBfX2VzTW9kdWxlOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIGRlZmF1bHQ6IHsgdmFsdWU6IGRlZmF1bHRFeHBvcnQgfSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXNNb2R1bGVGYWN0b3J5ID0gZXNNb2R1bGVGYWN0b3J5O1xuZnVuY3Rpb24gZ2l0RXhwb3J0RmFjdG9yeShmYWN0b3J5LCBleHRyYSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGFwaV8xLmRlZmF1bHQsIGV4dHJhIHx8IHt9KTtcbn1cbmV4cG9ydHMuZ2l0RXhwb3J0RmFjdG9yeSA9IGdpdEV4cG9ydEZhY3Rvcnk7XG5mdW5jdGlvbiBnaXRJbnN0YW5jZUZhY3RvcnkoYmFzZURpciwgb3B0aW9ucykge1xuICAgIGNvbnN0IHBsdWdpbnMgPSBuZXcgcGx1Z2luc18xLlBsdWdpblN0b3JlKCk7XG4gICAgY29uc3QgY29uZmlnID0gdXRpbHNfMS5jcmVhdGVJbnN0YW5jZUNvbmZpZyhiYXNlRGlyICYmICh0eXBlb2YgYmFzZURpciA9PT0gJ3N0cmluZycgPyB7IGJhc2VEaXIgfSA6IGJhc2VEaXIpIHx8IHt9LCBvcHRpb25zKTtcbiAgICBpZiAoIXV0aWxzXzEuZm9sZGVyRXhpc3RzKGNvbmZpZy5iYXNlRGlyKSkge1xuICAgICAgICB0aHJvdyBuZXcgYXBpXzEuZGVmYXVsdC5HaXRDb25zdHJ1Y3RFcnJvcihjb25maWcsIGBDYW5ub3QgdXNlIHNpbXBsZS1naXQgb24gYSBkaXJlY3RvcnkgdGhhdCBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuY29uZmlnKSkge1xuICAgICAgICBwbHVnaW5zLmFkZChwbHVnaW5zXzEuY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbihjb25maWcuY29uZmlnKSk7XG4gICAgfVxuICAgIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5jb21wbGV0aW9uRGV0ZWN0aW9uUGx1Z2luKGNvbmZpZy5jb21wbGV0aW9uKSk7XG4gICAgY29uZmlnLnByb2dyZXNzICYmIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5wcm9ncmVzc01vbml0b3JQbHVnaW4oY29uZmlnLnByb2dyZXNzKSk7XG4gICAgY29uZmlnLnRpbWVvdXQgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnRpbWVvdXRQbHVnaW4oY29uZmlnLnRpbWVvdXQpKTtcbiAgICBjb25maWcuc3Bhd25PcHRpb25zICYmIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5zcGF3bk9wdGlvbnNQbHVnaW4oY29uZmlnLnNwYXduT3B0aW9ucykpO1xuICAgIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvblBsdWdpbihwbHVnaW5zXzEuZXJyb3JEZXRlY3Rpb25IYW5kbGVyKHRydWUpKSk7XG4gICAgY29uZmlnLmVycm9ycyAmJiBwbHVnaW5zLmFkZChwbHVnaW5zXzEuZXJyb3JEZXRlY3Rpb25QbHVnaW4oY29uZmlnLmVycm9ycykpO1xuICAgIHJldHVybiBuZXcgR2l0KGNvbmZpZywgcGx1Z2lucyk7XG59XG5leHBvcnRzLmdpdEluc3RhbmNlRmFjdG9yeSA9IGdpdEluc3RhbmNlRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1mYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5naXRQID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IGdpdF9mYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZ2l0LWZhY3RvcnlcIik7XG5jb25zdCBmdW5jdGlvbk5hbWVzQnVpbGRlckFwaSA9IFtcbiAgICAnY3VzdG9tQmluYXJ5JywgJ2VudicsICdvdXRwdXRIYW5kbGVyJywgJ3NpbGVudCcsXG5dO1xuY29uc3QgZnVuY3Rpb25OYW1lc1Byb21pc2VBcGkgPSBbXG4gICAgJ2FkZCcsXG4gICAgJ2FkZEFubm90YXRlZFRhZycsXG4gICAgJ2FkZENvbmZpZycsXG4gICAgJ2FkZFJlbW90ZScsXG4gICAgJ2FkZFRhZycsXG4gICAgJ2FwcGx5UGF0Y2gnLFxuICAgICdiaW5hcnlDYXRGaWxlJyxcbiAgICAnYnJhbmNoJyxcbiAgICAnYnJhbmNoTG9jYWwnLFxuICAgICdjYXRGaWxlJyxcbiAgICAnY2hlY2tJZ25vcmUnLFxuICAgICdjaGVja0lzUmVwbycsXG4gICAgJ2NoZWNrb3V0JyxcbiAgICAnY2hlY2tvdXRCcmFuY2gnLFxuICAgICdjaGVja291dExhdGVzdFRhZycsXG4gICAgJ2NoZWNrb3V0TG9jYWxCcmFuY2gnLFxuICAgICdjbGVhbicsXG4gICAgJ2Nsb25lJyxcbiAgICAnY29tbWl0JyxcbiAgICAnY3dkJyxcbiAgICAnZGVsZXRlTG9jYWxCcmFuY2gnLFxuICAgICdkZWxldGVMb2NhbEJyYW5jaGVzJyxcbiAgICAnZGlmZicsXG4gICAgJ2RpZmZTdW1tYXJ5JyxcbiAgICAnZXhlYycsXG4gICAgJ2ZldGNoJyxcbiAgICAnZ2V0UmVtb3RlcycsXG4gICAgJ2luaXQnLFxuICAgICdsaXN0Q29uZmlnJyxcbiAgICAnbGlzdFJlbW90ZScsXG4gICAgJ2xvZycsXG4gICAgJ21lcmdlJyxcbiAgICAnbWVyZ2VGcm9tVG8nLFxuICAgICdtaXJyb3InLFxuICAgICdtdicsXG4gICAgJ3B1bGwnLFxuICAgICdwdXNoJyxcbiAgICAncHVzaFRhZ3MnLFxuICAgICdyYXcnLFxuICAgICdyZWJhc2UnLFxuICAgICdyZW1vdGUnLFxuICAgICdyZW1vdmVSZW1vdGUnLFxuICAgICdyZXNldCcsXG4gICAgJ3JldmVydCcsXG4gICAgJ3JldnBhcnNlJyxcbiAgICAncm0nLFxuICAgICdybUtlZXBMb2NhbCcsXG4gICAgJ3Nob3cnLFxuICAgICdzdGFzaCcsXG4gICAgJ3N0YXNoTGlzdCcsXG4gICAgJ3N0YXR1cycsXG4gICAgJ3N1Yk1vZHVsZScsXG4gICAgJ3N1Ym1vZHVsZUFkZCcsXG4gICAgJ3N1Ym1vZHVsZUluaXQnLFxuICAgICdzdWJtb2R1bGVVcGRhdGUnLFxuICAgICd0YWcnLFxuICAgICd0YWdzJyxcbiAgICAndXBkYXRlU2VydmVySW5mbydcbl07XG5mdW5jdGlvbiBnaXRQKC4uLmFyZ3MpIHtcbiAgICBsZXQgZ2l0O1xuICAgIGxldCBjaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGdpdCA9IGdpdF9mYWN0b3J5XzEuZ2l0SW5zdGFuY2VGYWN0b3J5KC4uLmFyZ3MpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjaGFpbiA9IFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZGVyUmV0dXJuKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZUFwaTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhaW5SZXR1cm4oKSB7XG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZUFwaSA9IFsuLi5mdW5jdGlvbk5hbWVzQnVpbGRlckFwaSwgLi4uZnVuY3Rpb25OYW1lc1Byb21pc2VBcGldLnJlZHVjZSgoYXBpLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXN5bmMgPSBmdW5jdGlvbk5hbWVzUHJvbWlzZUFwaS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBpc0FzeW5jID8gYXN5bmNXcmFwcGVyKG5hbWUsIGdpdCkgOiBzeW5jV3JhcHBlcihuYW1lLCBnaXQsIGFwaSk7XG4gICAgICAgIGNvbnN0IGFsdGVybmF0aXZlID0gaXNBc3luYyA/IGNoYWluUmV0dXJuIDogYnVpbGRlclJldHVybjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwaSwgbmFtZSwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGdpdCA/IHZhbGlkIDogYWx0ZXJuYXRpdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gcHJvbWlzZUFwaTtcbiAgICBmdW5jdGlvbiBhc3luY1dyYXBwZXIoZm4sIGdpdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIGludGVyZmFjZSByZXF1aXJlcyB0aGF0IGhhbmRsZXJzIGFyZSBub3Qgc3VwcGxpZWQgaW5saW5lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYWlsaW5nIGZ1bmN0aW9uIG5vdCBhbGxvd2VkIGluIGNhbGwgdG8gJyArIGZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgZ2l0W2ZuXS5hcHBseShnaXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN5bmNXcmFwcGVyKGZuLCBnaXQsIGFwaSkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGdpdFtmbl0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZ2l0UCA9IGdpdFA7XG5mdW5jdGlvbiB0b0Vycm9yKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKGVycm9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb21pc2Utd3JhcHBlZC5qcy5tYXAiLCJcbmNvbnN0IHtnaXRQfSA9IHJlcXVpcmUoJy4vbGliL3J1bm5lcnMvcHJvbWlzZS13cmFwcGVkJyk7XG5jb25zdCB7ZXNNb2R1bGVGYWN0b3J5LCBnaXRJbnN0YW5jZUZhY3RvcnksIGdpdEV4cG9ydEZhY3Rvcnl9ID0gcmVxdWlyZSgnLi9saWIvZ2l0LWZhY3RvcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlc01vZHVsZUZhY3RvcnkoXG4gICBnaXRFeHBvcnRGYWN0b3J5KGdpdEluc3RhbmNlRmFjdG9yeSwge2dpdFB9KVxuKTtcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IE9ic2lkaWFuR2l0IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEJyYW5jaEluZm8sIEZpbGVTdGF0dXNSZXN1bHQsIFN0YXR1cyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdpdE1hbmFnZXIge1xuICAgIHJlYWRvbmx5IHBsdWdpbjogT2JzaWRpYW5HaXQ7XG4gICAgcmVhZG9ubHkgYXBwOiBBcHA7XG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5hcHAgPSBwbHVnaW4uYXBwO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHN0YXR1cygpOiBQcm9taXNlPFN0YXR1cz47XG5cbiAgICBhYnN0cmFjdCBjb21taXRBbGwobWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPjtcblxuICAgIGFic3RyYWN0IHB1bGwoKTogUHJvbWlzZTxudW1iZXI+O1xuXG4gICAgYWJzdHJhY3QgcHVzaCgpOiBQcm9taXNlPG51bWJlcj47XG5cbiAgICBhYnN0cmFjdCBjYW5QdXNoKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICBhYnN0cmFjdCBjaGVja1JlcXVpcmVtZW50cygpOiBQcm9taXNlPFwidmFsaWRcIiB8IFwibWlzc2luZy1yZXBvXCIgfCBcIm1pc3NpbmctZ2l0XCI+O1xuXG4gICAgYWJzdHJhY3QgYnJhbmNoSW5mbygpOiBQcm9taXNlPEJyYW5jaEluZm8+O1xuXG4gICAgYWJzdHJhY3QgY2hlY2tvdXQoYnJhbmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3QgaW5pdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3QgY2xvbmUodXJsOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGFic3RyYWN0IHNldENvbmZpZyhwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3QgZ2V0Q29uZmlnKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PjtcblxuICAgIGFic3RyYWN0IGZldGNoKHJlbW90ZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBzZXRSZW1vdGUobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBnZXRSZW1vdGVzKCk6IFByb21pc2U8c3RyaW5nW10+O1xuXG4gICAgYWJzdHJhY3QgZ2V0UmVtb3RlQnJhbmNoZXMocmVtb3RlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPjtcblxuICAgIGFic3RyYWN0IHJlbW92ZVJlbW90ZShyZW1vdGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3QgdXBkYXRlVXBzdHJlYW1CcmFuY2gocmVtb3RlQnJhbmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3QgdXBkYXRlR2l0UGF0aChnaXRQYXRoOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgYXN5bmMgZm9ybWF0Q29tbWl0TWVzc2FnZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21taXRNZXNzYWdlO1xuXG4gICAgICAgIGlmICh0ZW1wbGF0ZS5pbmNsdWRlcyhcInt7bnVtRmlsZXN9fVwiKSkge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuc3RhdHVzKCk7XG4gICAgICAgICAgICBsZXQgbnVtRmlsZXMgPSBzdGF0dXMuY2hhbmdlZC5sZW5ndGg7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7e251bUZpbGVzfX1cIiwgU3RyaW5nKG51bUZpbGVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUuaW5jbHVkZXMoXCJ7e2ZpbGVzfX1cIikpIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLnN0YXR1cygpO1xuXG4gICAgICAgICAgICBsZXQgY2hhbmdlc2V0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdOyB9ID0ge307XG4gICAgICAgICAgICBzdGF0dXMuY2hhbmdlZC5mb3JFYWNoKCh2YWx1ZTogRmlsZVN0YXR1c1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleCBpbiBjaGFuZ2VzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc2V0W3ZhbHVlLmluZGV4XS5wdXNoKHZhbHVlLnBhdGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNldFt2YWx1ZS5pbmRleF0gPSBbdmFsdWUucGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjaHVua3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IFthY3Rpb24sIGZpbGVzXSBvZiBPYmplY3QuZW50cmllcyhjaGFuZ2VzZXQpKSB7XG4gICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goYWN0aW9uICsgXCIgXCIgKyBmaWxlcy5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmaWxlcyA9IGNodW5rcy5qb2luKFwiLCBcIik7XG5cbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShcInt7ZmlsZXN9fVwiLCBmaWxlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW9tZW50ID0gKHdpbmRvdyBhcyBhbnkpLm1vbWVudDtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFxuICAgICAgICAgICAgXCJ7e2RhdGV9fVwiLFxuICAgICAgICAgICAgbW9tZW50KCkuZm9ybWF0KHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSArIFwiXFxuXFxuXCIgKyBcIkFmZmVjdGVkIGZpbGVzOlwiICsgXCJcXG5cIiArIChhd2FpdCB0aGlzLnN0YXR1cygpKS5zdGFnZWQuam9pbihcIlxcblwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IEZpbGVTeXN0ZW1BZGFwdGVyIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgc2ltcGxlR2l0LCAqIGFzIHNpbXBsZSBmcm9tIFwic2ltcGxlLWdpdFwiO1xuaW1wb3J0IHsgR2l0TWFuYWdlciB9IGZyb20gXCIuL2dpdE1hbmFnZXJcIjtcbmltcG9ydCBPYnNpZGlhbkdpdCBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBCcmFuY2hJbmZvLCBGaWxlU3RhdHVzUmVzdWx0LCBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVHaXQgZXh0ZW5kcyBHaXRNYW5hZ2VyIHtcbiAgICBnaXQ6IHNpbXBsZS5TaW1wbGVHaXQ7XG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICBzdXBlcihwbHVnaW4pO1xuXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIEZpbGVTeXN0ZW1BZGFwdGVyO1xuICAgICAgICBjb25zdCBwYXRoID0gYWRhcHRlci5nZXRCYXNlUGF0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzR2l0SW5zdGFsbGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2l0ID0gc2ltcGxlR2l0KHtcbiAgICAgICAgICAgICAgICBiYXNlRGlyOiBwYXRoLFxuICAgICAgICAgICAgICAgIGJpbmFyeTogdGhpcy5wbHVnaW4uc2V0dGluZ3MuZ2l0UGF0aCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXR1cygpOiBQcm9taXNlPHtcbiAgICAgICAgY2hhbmdlZDogRmlsZVN0YXR1c1Jlc3VsdFtdO1xuICAgICAgICBzdGFnZWQ6IHN0cmluZ1tdO1xuICAgICAgICBjb25mbGljdGVkOiBzdHJpbmdbXTtcbiAgICB9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldFN0YXRlKFBsdWdpblN0YXRlLnN0YXR1cyk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hhbmdlZDogc3RhdHVzLmZpbGVzLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucGF0aCA9IHRoaXMuZml4RmlsZVBhdGgoZS5wYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3RhZ2VkOiBzdGF0dXMuc3RhZ2VkLm1hcCh0aGlzLmZpeEZpbGVQYXRoKSxcbiAgICAgICAgICAgIGNvbmZsaWN0ZWQ6IHN0YXR1cy5jb25mbGljdGVkLm1hcCh0aGlzLmZpeEZpbGVQYXRoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvL1JlbW92ZSB3cm9uZyBgXCJgIGxpa2UgXCJNeSBmaWxlLm1kXCJcbiAgICBmaXhGaWxlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBwYXRoLnN0YXJ0c1dpdGgoJ1wiJykgJiYgcGF0aC5lbmRzV2l0aCgnXCInKSAmJlxuICAgICAgICAgICAgKHBhdGggPSBwYXRoLnN1YnN0cmluZygxLCBwYXRoLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tbWl0QWxsKG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudXBkYXRlU3VibW9kdWxlcykge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29tbWl0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0LnN1Yk1vZHVsZShbXCJmb3JlYWNoXCIsIFwiLS1yZWN1cnNpdmVcIiwgYGdpdCBhZGQgLUEgJiYgaWYgWyAhIC16IFwiJChnaXQgc3RhdHVzIC0tcG9yY2VsYWluKVwiIF07IHRoZW4gZ2l0IGNvbW1pdCAtbSBcIiR7bWVzc2FnZSA/PyBhd2FpdCB0aGlzLmZvcm1hdENvbW1pdE1lc3NhZ2UoKX1cIjsgZmlgXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0U3RhdGUoUGx1Z2luU3RhdGUuYWRkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuYWRkKFxuICAgICAgICAgICAgXCIuLypcIiwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb21taXQpO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5naXQuY29tbWl0KG1lc3NhZ2UgPz8gYXdhaXQgdGhpcy5mb3JtYXRDb21taXRNZXNzYWdlKCkpKS5zdW1tYXJ5LmNoYW5nZXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5wdWxsKTtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnVwZGF0ZVN1Ym1vZHVsZXMpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdpdC5zdWJNb2R1bGUoW1widXBkYXRlXCIsIFwiLS1yZW1vdGVcIiwgXCItLW1lcmdlXCIsIFwiLS1yZWN1cnNpdmVcIl0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuXG4gICAgICAgIGNvbnN0IHB1bGxSZXN1bHQgPSBhd2FpdCB0aGlzLmdpdC5wdWxsKFtcIi0tbm8tcmViYXNlXCJdLFxuICAgICAgICAgICAgYXN5bmMgKGVycjogRXJyb3IgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5kaXNwbGF5RXJyb3IoYFB1bGwgZmFpbGVkICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwdWxsUmVzdWx0LmZpbGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldFN0YXRlKFBsdWdpblN0YXRlLnN0YXR1cyk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICBjb25zdCB0cmFja2luZ0JyYW5jaCA9IHN0YXR1cy50cmFja2luZztcbiAgICAgICAgY29uc3QgY3VycmVudEJyYW5jaCA9IHN0YXR1cy5jdXJyZW50O1xuICAgICAgICBjb25zdCByZW1vdGVDaGFuZ2VkRmlsZXMgPSAoYXdhaXQgdGhpcy5naXQuZGlmZlN1bW1hcnkoW2N1cnJlbnRCcmFuY2gsIHRyYWNraW5nQnJhbmNoXSkpLmNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0U3RhdGUoUGx1Z2luU3RhdGUucHVzaCk7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy51cGRhdGVTdWJtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdpdC5lbnYoeyAuLi5wcm9jZXNzLmVudiwgXCJPQlNJRElBTl9HSVRcIjogMSB9KS5zdWJNb2R1bGUoW1wiZm9yZWFjaFwiLCBcIi0tcmVjdXJzaXZlXCIsIGB0cmFja2luZz0kKGdpdCBmb3ItZWFjaC1yZWYgLS1mb3JtYXQ9JyUodXBzdHJlYW06c2hvcnQpJyBcIiQoZ2l0IHN5bWJvbGljLXJlZiAtcSBIRUFEKVwiKTsgZWNobyAkdHJhY2tpbmc7IGlmIFsgISAteiBcIiQoZ2l0IGRpZmYgLS1zaG9ydHN0YXQgJHRyYWNraW5nKVwiIF07IHRoZW4gZ2l0IHB1c2g7IGZpYF0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5naXQuZW52KHsgLi4ucHJvY2Vzcy5lbnYsIFwiT0JTSURJQU5fR0lUXCI6IDEgfSkucHVzaCgoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcblxuICAgICAgICByZXR1cm4gcmVtb3RlQ2hhbmdlZEZpbGVzO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY2FuUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgLy8gYWxsb3cgcHVzaGluZyBpbiBzdWJtb2R1bGVzIGV2ZW4gaWYgdGhlIHJvb3QgaGFzIG5vIGNoYW5nZXMuXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy51cGRhdGVTdWJtb2R1bGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIGNvbnN0IHRyYWNraW5nQnJhbmNoID0gc3RhdHVzLnRyYWNraW5nO1xuICAgICAgICBjb25zdCBjdXJyZW50QnJhbmNoID0gc3RhdHVzLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHJlbW90ZUNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdC5kaWZmU3VtbWFyeShbY3VycmVudEJyYW5jaCwgdHJhY2tpbmdCcmFuY2hdKSkuY2hhbmdlZDtcblxuICAgICAgICByZXR1cm4gcmVtb3RlQ2hhbmdlZEZpbGVzICE9PSAwO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrUmVxdWlyZW1lbnRzKCk6IFByb21pc2U8XCJ2YWxpZFwiIHwgXCJtaXNzaW5nLXJlcG9cIiB8IFwibWlzc2luZy1naXRcIj4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNHaXRJbnN0YWxsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwibWlzc2luZy1naXRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCB0aGlzLmdpdC5jaGVja0lzUmVwbygpKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwibWlzc2luZy1yZXBvXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidmFsaWRcIjtcbiAgICB9XG5cbiAgICBhc3luYyBicmFuY2hJbmZvKCk6IFByb21pc2U8QnJhbmNoSW5mbz4ge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgdGhpcy5naXQuYnJhbmNoKFtcIi0tbm8tY29sb3JcIl0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiBzdGF0dXMuY3VycmVudCxcbiAgICAgICAgICAgIHRyYWNraW5nOiBzdGF0dXMudHJhY2tpbmcsXG4gICAgICAgICAgICBicmFuY2hlczogYnJhbmNoZXMuYWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrb3V0KGJyYW5jaDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmNoZWNrb3V0KGJyYW5jaCwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuaW5pdChmYWxzZSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvbmUodXJsOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmNsb25lKHVybCwgcGF0aC5qb2luKCh0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIEZpbGVTeXN0ZW1BZGFwdGVyKS5nZXRCYXNlUGF0aCgpLCBkaXIpLCBbXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0Q29uZmlnKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5hZGRDb25maWcocGF0aCwgdmFsdWUsIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbmZpZyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmdpdC5saXN0Q29uZmlnKChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgICAgICByZXR1cm4gY29uZmlnLmFsbFtwYXRoXTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaChyZW1vdGU/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuZmV0Y2gocmVtb3RlICE9IHVuZGVmaW5lZCA/IFtyZW1vdGVdIDogW10sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFJlbW90ZShuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICgoYXdhaXQgdGhpcy5nZXRSZW1vdGVzKCkpLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5naXQucmVtb3RlKFtcInNldC11cmxcIiwgbmFtZSwgdXJsXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdpdC5yZW1vdGUoW1wiYWRkXCIsIG5hbWUsIHVybF0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UmVtb3RlQnJhbmNoZXMocmVtb3RlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2l0LmJyYW5jaChbXCItclwiLCBcIi0tbGlzdFwiLCBgJHtyZW1vdGV9KmBdLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpdGVtIGluIHJlcy5icmFuY2hlcykge1xuICAgICAgICAgICAgbGlzdC5wdXNoKHJlcy5icmFuY2hlc1tpdGVtXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZW1vdGVzKCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdpdC5yZW1vdGUoW10sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRyaW0oKS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVJlbW90ZShyZW1vdGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQucmVtb3ZlUmVtb3RlKHJlbW90ZU5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVVwc3RyZWFtQnJhbmNoKHJlbW90ZUJyYW5jaDogc3RyaW5nKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LnB1c2goW1wiLS1zZXQtdXBzdHJlYW1cIiwgLi4ucmVtb3RlQnJhbmNoLnNwbGl0KFwiL1wiKV0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlR2l0UGF0aChnaXRQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2l0LmN1c3RvbUJpbmFyeShnaXRQYXRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzR2l0SW5zdGFsbGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RldmV1a3gvZ2l0LWpzL2lzc3Vlcy80MDJcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHNwYXduU3luYygnZ2l0JywgWyctLXZlcnNpb24nXSwge1xuICAgICAgICAgICAgc3RkaW86ICdpZ25vcmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb21tYW5kLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbW1hbmQuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcjogRXJyb3IgfCBudWxsKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uZGlzcGxheUVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5vdGljZSwgUGx1Z2luLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ2hhbmdlZEZpbGVzTW9kYWwgfSBmcm9tIFwic3JjL21vZGFscy9jaGFuZ2VkRmlsZXNNb2RhbFwiO1xuaW1wb3J0IHsgQ3VzdG9tTWVzc2FnZU1vZGFsIH0gZnJvbSBcInNyYy9tb2RhbHMvY3VzdG9tTWVzc2FnZU1vZGFsXCI7XG5pbXBvcnQgeyBQcm9taXNlUXVldWUgfSBmcm9tIFwic3JjL3Byb21pc2VRdWV1ZVwiO1xuaW1wb3J0IHsgT2JzaWRpYW5HaXRTZXR0aW5nc1RhYiB9IGZyb20gXCJzcmMvc2V0dGluZ3NcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCJzcmMvc3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBHaXRNYW5hZ2VyIH0gZnJvbSBcIi4vZ2l0TWFuYWdlclwiO1xuaW1wb3J0IHsgR2VuZXJhbE1vZGFsIH0gZnJvbSBcIi4vbW9kYWxzL2dlbmVyYWxNb2RhbFwiO1xuaW1wb3J0IHsgU2ltcGxlR2l0IH0gZnJvbSBcIi4vc2ltcGxlR2l0XCI7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmludGVyZmFjZSBPYnNpZGlhbkdpdFNldHRpbmdzIHtcbiAgICBjb21taXRNZXNzYWdlOiBzdHJpbmc7XG4gICAgY29tbWl0RGF0ZUZvcm1hdDogc3RyaW5nO1xuICAgIGF1dG9TYXZlSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBhdXRvUHVsbEludGVydmFsOiBudW1iZXI7XG4gICAgYXV0b1B1bGxPbkJvb3Q6IGJvb2xlYW47XG4gICAgZGlzYWJsZVB1c2g6IGJvb2xlYW47XG4gICAgcHVsbEJlZm9yZVB1c2g6IGJvb2xlYW47XG4gICAgZGlzYWJsZVBvcHVwczogYm9vbGVhbjtcbiAgICBsaXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keTogYm9vbGVhbjtcbiAgICBzaG93U3RhdHVzQmFyOiBib29sZWFuO1xuICAgIHVwZGF0ZVN1Ym1vZHVsZXM6IGJvb2xlYW47XG4gICAgZ2l0UGF0aDogc3RyaW5nO1xufVxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogT2JzaWRpYW5HaXRTZXR0aW5ncyA9IHtcbiAgICBjb21taXRNZXNzYWdlOiBcInZhdWx0IGJhY2t1cDoge3tkYXRlfX1cIixcbiAgICBjb21taXREYXRlRm9ybWF0OiBcIllZWVktTU0tREQgSEg6bW06c3NcIixcbiAgICBhdXRvU2F2ZUludGVydmFsOiAwLFxuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IDAsXG4gICAgYXV0b1B1bGxPbkJvb3Q6IGZhbHNlLFxuICAgIGRpc2FibGVQdXNoOiBmYWxzZSxcbiAgICBwdWxsQmVmb3JlUHVzaDogdHJ1ZSxcbiAgICBkaXNhYmxlUG9wdXBzOiBmYWxzZSxcbiAgICBsaXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keTogZmFsc2UsXG4gICAgc2hvd1N0YXR1c0JhcjogdHJ1ZSxcbiAgICB1cGRhdGVTdWJtb2R1bGVzOiBmYWxzZSxcbiAgICBnaXRQYXRoOiBcIlwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhbkdpdCBleHRlbmRzIFBsdWdpbiB7XG4gICAgZ2l0TWFuYWdlcjogR2l0TWFuYWdlcjtcbiAgICBzZXR0aW5nczogT2JzaWRpYW5HaXRTZXR0aW5ncztcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBzdGF0ZTogUGx1Z2luU3RhdGU7XG4gICAgdGltZW91dElEQmFja3VwOiBudW1iZXI7XG4gICAgdGltZW91dElEUHVsbDogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGU6IG51bWJlcjtcbiAgICBnaXRSZWFkeSA9IGZhbHNlO1xuICAgIHByb21pc2VRdWV1ZTogUHJvbWlzZVF1ZXVlID0gbmV3IFByb21pc2VRdWV1ZSgpO1xuICAgIGNvbmZsaWN0T3V0cHV0RmlsZSA9IFwiY29uZmxpY3QtZmlsZXMtb2JzaWRpYW4tZ2l0Lm1kXCI7XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhcj8uZGlzcGxheSgpO1xuICAgIH1cblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgJyArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiIHBsdWdpblwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgICAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IE9ic2lkaWFuR2l0U2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwicHVsbFwiLFxuICAgICAgICAgICAgbmFtZTogXCJQdWxsIGZyb20gcmVtb3RlIHJlcG9zaXRvcnlcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucHVsbENoYW5nZXNGcm9tUmVtb3RlKCkpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwicHVzaFwiLFxuICAgICAgICAgICAgbmFtZTogXCJDcmVhdGUgYmFja3VwXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLmNyZWF0ZUJhY2t1cChmYWxzZSkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJlZGl0LXJlbW90ZXNcIixcbiAgICAgICAgICAgIG5hbWU6IFwiRWRpdCByZW1vdGVzXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4gdGhpcy5lZGl0UmVtb3RlcygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJyZW1vdmUtcmVtb3RlXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlJlbW92ZSByZW1vdGVcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB0aGlzLnJlbW92ZVJlbW90ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJpbml0LXJlcG9cIixcbiAgICAgICAgICAgIG5hbWU6IFwiSW5pdGlhbGl6ZSBhIG5ldyByZXBvXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4gdGhpcy5jcmVhdGVOZXdSZXBvKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNsb25lLXJlcG9cIixcbiAgICAgICAgICAgIG5hbWU6IFwiQ2xvbmUgYW4gZXhpc3RpbmcgcmVtb3RlIHJlcG9cIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB0aGlzLmNsb25lTmV3UmVwbygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJjb21taXQtcHVzaC1zcGVjaWZpZWQtbWVzc2FnZVwiLFxuICAgICAgICAgICAgbmFtZTogXCJDcmVhdGUgYmFja3VwIHdpdGggc3BlY2lmaWVkIG1lc3NhZ2VcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiBuZXcgQ3VzdG9tTWVzc2FnZU1vZGFsKHRoaXMpLm9wZW4oKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwibGlzdC1jaGFuZ2VkLWZpbGVzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkxpc3QgY2hhbmdlZCBmaWxlc1wiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcblxuICAgICAgICAgICAgICAgIG5ldyBDaGFuZ2VkRmlsZXNNb2RhbCh0aGlzLCBzdGF0dXMuY2hhbmdlZCkub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1N0YXR1c0Jhcikge1xuICAgICAgICAgICAgLy8gaW5pdCBzdGF0dXNCYXJcbiAgICAgICAgICAgIGxldCBzdGF0dXNCYXJFbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHN0YXR1c0JhckVsLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcnZhbChcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zdGF0dXNCYXIuZGlzcGxheSgpLCAxMDAwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB0aGlzLmluaXQoKSk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJREJhY2t1cCk7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SURQdWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VubG9hZGluZyAnICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCIgcGx1Z2luXCIpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuICAgIH1cbiAgICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZUxhc3RBdXRvKGRhdGU6IERhdGUsIG1vZGU6IFwiYmFja3VwXCIgfCBcInB1bGxcIikge1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJiYWNrdXBcIikge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubWFuaWZlc3QuaWQgKyBcIjpsYXN0QXV0b0JhY2t1cFwiLCBkYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwicHVsbFwiKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvUHVsbFwiLCBkYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExhc3RBdXRvKCk6IFByb21pc2U8eyBcImJhY2t1cFwiOiBEYXRlLCBcInB1bGxcIjogRGF0ZTsgfT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJiYWNrdXBcIjogbmV3IERhdGUod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubWFuaWZlc3QuaWQgKyBcIjpsYXN0QXV0b0JhY2t1cFwiKSA/PyBcIlwiKSxcbiAgICAgICAgICAgIFwicHVsbFwiOiBuZXcgRGF0ZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvUHVsbFwiKSA/PyBcIlwiKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmdpdE1hbmFnZXIgPSBuZXcgU2ltcGxlR2l0KHRoaXMpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuY2hlY2tSZXF1aXJlbWVudHMoKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pc3NpbmctZ2l0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKFwiQ2Fubm90IHJ1biBnaXQgY29tbWFuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pc3NpbmctcmVwb1wiOlxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQ2FuJ3QgZmluZCBhIHZhbGlkIGdpdCByZXBvc2l0b3J5LiBQbGVhc2UgY3JlYXRlIG9uZSB2aWEgdGhlIGdpdmVuIGNvbW1hbmQuXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5naXRSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1B1bGxPbkJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5wdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEF1dG9zID0gYXdhaXQgdGhpcy5sb2FkTGFzdEF1dG8oKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCAtIChNYXRoLnJvdW5kKCgobm93LmdldFRpbWUoKSAtIGxhc3RBdXRvcy5iYWNrdXAuZ2V0VGltZSgpKSAvIDEwMDApIC8gNjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQmFja3VwKGRpZmYgPD0gMCA/IDAgOiBkaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCAtIChNYXRoLnJvdW5kKCgobm93LmdldFRpbWUoKSAtIGxhc3RBdXRvcy5wdWxsLmdldFRpbWUoKSkgLyAxMDAwKSAvIDYwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1B1bGwoZGlmZiA8PSAwID8gMCA6IGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlaXJkIGhhcHBlbmVkLiBUaGUgJ2NoZWNrUmVxdWlyZW1lbnRzJyByZXN1bHQgaXMgXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1JlcG8oKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5pbml0KCk7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJJbml0aWFsaXplZCBuZXcgcmVwb1wiKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9uZU5ld1JlcG8oKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IEdlbmVyYWxNb2RhbCh0aGlzLmFwcCwgW10sIFwiRW50ZXIgcmVtb3RlIFVSTFwiKTtcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgbW9kYWwub3BlbigpO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBsZXQgZGlyID0gYXdhaXQgbmV3IEdlbmVyYWxNb2RhbCh0aGlzLmFwcCwgW10sIFwiRW50ZXIgZGlyZWN0b3J5IGZvciBjbG9uZS4gSXQgbmVlZHMgdG8gYmUgZW1wdHkgb3Igbm90IGV4aXN0ZW50LlwiKS5vcGVuKCk7XG4gICAgICAgICAgICBpZiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gcGF0aC5ub3JtYWxpemUoZGlyKTtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGBDbG9uaW5nIG5ldyByZXBvIGludG8gXCIke2Rpcn1cImApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5jbG9uZSh1cmwsIGRpcik7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIkNsb25lZCBuZXcgcmVwb1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXMgdG8gY2FsbCBgdGhpcy5pbml0KClgIGlmIG5lY2Vzc2FyeSwgb3RoZXJ3aXNlIHJldHVybnMgZGlyZWN0bHlcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGB0aGlzLmdpdE1hbmFnZXJgIGlzIHJlYWR5IHRvIGJlIHVzZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhc3luYyBpc0FsbEluaXRpYWxpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBpZiAoIXRoaXMuZ2l0UmVhZHkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdpdFJlYWR5O1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAoIWF3YWl0IHRoaXMuaXNBbGxJbml0aWFsaXplZCgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZXNVcGRhdGVkID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLnB1bGwoKTtcbiAgICAgICAgaWYgKGZpbGVzVXBkYXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYFB1bGxlZCBuZXcgY2hhbmdlcy4gJHtmaWxlc1VwZGF0ZWR9IGZpbGVzIHVwZGF0ZWRgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoXCJFdmVyeXRoaW5nIGlzIHVwLXRvLWRhdGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5naXRNYW5hZ2VyIGluc3RhbmNlb2YgU2ltcGxlR2l0KSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuc3RhdHVzKCk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBZb3UgaGF2ZSAke3N0YXR1cy5jb25mbGljdGVkLmxlbmd0aH0gY29uZmxpY3QgZmlsZXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlQmFja3VwKGZyb21BdXRvQmFja3VwOiBib29sZWFuLCBjb21taXRNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghYXdhaXQgdGhpcy5pc0FsbEluaXRpYWxpemVkKCkpIHJldHVybjtcblxuXG4gICAgICAgIGlmICghZnJvbUF1dG9CYWNrdXApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGhpcy5jb25mbGljdE91dHB1dEZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdpdE1hbmFnZXIgaW5zdGFuY2VvZiBTaW1wbGVHaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zdGF0dXMoKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNvbmZsaWN0IGZpbGVzIG9uIGF1dG8gYmFja3VwXG4gICAgICAgICAgICBpZiAoZnJvbUF1dG9CYWNrdXAgJiYgc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYERpZCBub3QgY29tbWl0LCBiZWNhdXNlIHlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlcy4gUGxlYXNlIHJlc29sdmUgdGhlbSBhbmQgY29tbWl0IHBlciBjb21tYW5kLmApO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdE1hbmFnZXIuc3RhdHVzKCkpLmNoYW5nZWQ7XG5cbiAgICAgICAgaWYgKGNoYW5nZWRGaWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdGVkRmlsZXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuY29tbWl0QWxsKGNvbW1pdE1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgQ29tbWl0dGVkICR7Y29tbWl0ZWRGaWxlc30gZmlsZXNgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoXCJObyBjaGFuZ2VzIHRvIGNvbW1pdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5kaXNhYmxlUHVzaCkge1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmJyYW5jaEluZm8oKSkudHJhY2tpbmcpIHtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiTm8gdXBzdHJlYW0gYnJhbmNoIGlzIHNldC4gUGxlYXNlIHNlbGVjdCBvbmUuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZUJyYW5jaCA9IGF3YWl0IHRoaXMuc2VsZWN0UmVtb3RlQnJhbmNoKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlQnJhbmNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihcIkRpZCBub3QgcHVzaC4gTm8gdXBzdHJlYW0tYnJhbmNoIGlzIHNldCFcIiwgMTAwMDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5naXRNYW5hZ2VyLnVwZGF0ZVVwc3RyZWFtQnJhbmNoKHJlbW90ZUJyYW5jaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgcGx1Z2luIHRvIHB1bGwvcHVzaCBhdCBldmVyeSBjYWxsIG9mIGNyZWF0ZUJhY2t1cC4gT25seSBpZiB1bnB1c2hlZCBjb21taXRzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmNhblB1c2goKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnB1bGxCZWZvcmVQdXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1bGxlZEZpbGVzTGVuZ3RoID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLnB1bGwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1bGxlZEZpbGVzTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVsbGVkICR7cHVsbGVkRmlsZXNMZW5ndGh9IGZpbGVzIGZyb20gcmVtb3RlYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGJlY2F1c2Ugb2YgcHVsbFxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXM6IGFueTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5naXRNYW5hZ2VyIGluc3RhbmNlb2YgU2ltcGxlR2l0ICYmIChzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuc3RhdHVzKCkpLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgQ2Fubm90IHB1c2guIFlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlc2ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbmZsaWN0KHN0YXR1cy5jb25mbGljdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hlZEZpbGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVzaGVkICR7cHVzaGVkRmlsZXN9IGZpbGVzIHRvIHJlbW90ZWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIk5vIGNoYW5nZXMgdG8gcHVzaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgIH1cblxuICAgIHN0YXJ0QXV0b0JhY2t1cChtaW51dGVzPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGltZW91dElEQmFja3VwID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLmNyZWF0ZUJhY2t1cCh0cnVlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlTGFzdEF1dG8obmV3IERhdGUoKSwgXCJiYWNrdXBcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChtaW51dGVzID8/IHRoaXMuc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCkgKiA2MDAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXJ0QXV0b1B1bGwobWludXRlcz86IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbWVvdXRJRFB1bGwgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucHVsbENoYW5nZXNGcm9tUmVtb3RlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUxhc3RBdXRvKG5ldyBEYXRlKCksIFwicHVsbFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUHVsbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChtaW51dGVzID8/IHRoaXMuc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCkgKiA2MDAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsZWFyQXV0b0JhY2t1cCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElEQmFja3VwKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEQmFja3VwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhckF1dG9QdWxsKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SURQdWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEUHVsbCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQ29uZmxpY3QoY29uZmxpY3RlZDogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb25mbGljdGVkKTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXG4gICAgICAgICAgICBcIiMgQ29uZmxpY3QgZmlsZXNcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIHJlc29sdmUgdGhlbSBhbmQgY29tbWl0IHBlciBjb21tYW5kIChUaGlzIGZpbGUgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB0aGUgY29tbWl0KS5cIixcbiAgICAgICAgICAgIC4uLmNvbmZsaWN0ZWQubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5maWxlVG9MaW5rdGV4dChmaWxlLCBcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLSBbWyR7bGlua31dXWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAtIE5vdCBhIGZpbGU6ICR7ZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMud3JpdGVBbmRPcGVuRmlsZShsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgICB9XG5cbiAgICBhc3luYyBlZGl0UmVtb3RlcygpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBpZiAoIWF3YWl0IHRoaXMuaXNBbGxJbml0aWFsaXplZCgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVtb3RlcyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5nZXRSZW1vdGVzKCk7XG5cbiAgICAgICAgY29uc3QgbmFtZU1vZGFsID0gbmV3IEdlbmVyYWxNb2RhbCh0aGlzLmFwcCwgcmVtb3RlcywgXCJTZWxlY3Qgb3IgY3JlYXRlIGEgbmV3IHJlbW90ZSBieSB0eXBpbmcgaXRzIG5hbWUgYW5kIHNlbGVjdGluZyBpdFwiKTtcbiAgICAgICAgY29uc3QgcmVtb3RlTmFtZSA9IGF3YWl0IG5hbWVNb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgaWYgKHJlbW90ZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybE1vZGFsID0gbmV3IEdlbmVyYWxNb2RhbCh0aGlzLmFwcCwgW10sIFwiRW50ZXIgdGhlIHJlbW90ZSBVUkxcIik7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVVUkwgPSBhd2FpdCB1cmxNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuc2V0UmVtb3RlKHJlbW90ZU5hbWUsIHJlbW90ZVVSTCk7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3RlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgc2VsZWN0UmVtb3RlQnJhbmNoKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGxldCByZW1vdGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmdldFJlbW90ZXMoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkUmVtb3RlOiBzdHJpbmc7XG4gICAgICAgIGlmIChyZW1vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRSZW1vdGUgPSBhd2FpdCB0aGlzLmVkaXRSZW1vdGVzKCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRSZW1vdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlcyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5nZXRSZW1vdGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lTW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCByZW1vdGVzLCBcIlNlbGVjdCBvciBjcmVhdGUgYSBuZXcgcmVtb3RlIGJ5IHR5cGluZyBpdHMgbmFtZSBhbmQgc2VsZWN0aW5nIGl0XCIpO1xuICAgICAgICBjb25zdCByZW1vdGVOYW1lID0gc2VsZWN0ZWRSZW1vdGUgPz8gYXdhaXQgbmFtZU1vZGFsLm9wZW4oKTtcblxuICAgICAgICBpZiAocmVtb3RlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIkZldGNoaW5nIHJlbW90ZSBicmFuY2hlc1wiKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5mZXRjaChyZW1vdGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmdldFJlbW90ZUJyYW5jaGVzKHJlbW90ZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYnJhbmNoTW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCBicmFuY2hlcywgXCJTZWxlY3Qgb3IgY3JlYXRlIGEgbmV3IHJlbW90ZSBicmFuY2ggYnkgdHlwaW5nIGl0cyBuYW1lIGFuZCBzZWxlY3RpbmcgaXRcIik7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYnJhbmNoTW9kYWwub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlUmVtb3RlKCkge1xuICAgICAgICBpZiAoIWF3YWl0IHRoaXMuaXNBbGxJbml0aWFsaXplZCgpKSByZXR1cm47XG5cblxuICAgICAgICBjb25zdCByZW1vdGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmdldFJlbW90ZXMoKTtcblxuICAgICAgICBjb25zdCBuYW1lTW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCByZW1vdGVzLCBcIlNlbGVjdCBhIHJlbW90ZVwiKTtcbiAgICAgICAgY29uc3QgcmVtb3RlTmFtZSA9IGF3YWl0IG5hbWVNb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgaWYgKHJlbW90ZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2l0TWFuYWdlci5yZW1vdmVSZW1vdGUocmVtb3RlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB3cml0ZUFuZE9wZW5GaWxlKHRleHQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLndyaXRlKHRoaXMuY29uZmxpY3RPdXRwdXRGaWxlLCB0ZXh0KTtcblxuICAgICAgICBsZXQgZmlsZUlzQWxyZWFkeU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUFsbExlYXZlcyhsZWFmID0+IHtcbiAgICAgICAgICAgIGlmIChsZWFmLmdldERpc3BsYXlUZXh0KCkgIT0gXCJcIiAmJiB0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZS5zdGFydHNXaXRoKGxlYWYuZ2V0RGlzcGxheVRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICBmaWxlSXNBbHJlYWR5T3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZmlsZUlzQWxyZWFkeU9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSwgXCIvXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVnaW9uOiBkaXNwbGF5aW5nIC8gZm9ybWF0dGluZyBtZXNzYWdlc1xuICAgIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gNCAqIDEwMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXI/LmRpc3BsYXlNZXNzYWdlKG1lc3NhZ2UudG9Mb3dlckNhc2UoKSwgdGltZW91dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRpc2FibGVQb3B1cHMpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgZ2l0IG9ic2lkaWFuIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcbiAgICB9XG4gICAgZGlzcGxheUVycm9yKG1lc3NhZ2U6IGFueSwgdGltZW91dDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICAvLyBTb21lIGVycm9ycyBtaWdodCBub3QgYmUgb2YgdHlwZSBzdHJpbmdcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coYGdpdCBvYnNpZGlhbiBlcnJvcjogJHttZXNzYWdlfWApO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhcj8uZGlzcGxheU1lc3NhZ2UobWVzc2FnZS50b0xvd2VyQ2FzZSgpLCB0aW1lb3V0KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkZ1enp5U3VnZ2VzdE1vZGFsIiwiU3VnZ2VzdE1vZGFsIiwiU2V0dGluZyIsIk5vdGljZSIsIlBsdWdpblNldHRpbmdUYWIiLCJnaXRfZXJyb3JfMSIsInJlcXVpcmUkJDAiLCJvcyIsInR0eSIsInV0aWwiLCJyZXF1aXJlJCQxIiwidGhpcyIsImZzXzEiLCJmaWxlX2V4aXN0c18xIiwidXRpbF8xIiwiYXJndW1lbnRfZmlsdGVyc18xIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwidXRpbHNfMSIsInRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xIiwidGFza18xIiwiQ2xlYW5TdW1tYXJ5XzEiLCJjaGVja19pc19yZXBvXzEiLCJjbGVhbl8xIiwiY29uZmlnXzEiLCJnaXRfY29uc3RydWN0X2Vycm9yXzEiLCJnaXRfcGx1Z2luX2Vycm9yXzEiLCJnaXRfcmVzcG9uc2VfZXJyb3JfMSIsInJlc2V0XzEiLCJwcm9taXNlX2RlZmVycmVkXzEiLCJkZWJ1Z18xIiwiZ2l0X2xvZ2dlcl8xIiwidGFza3NfcGVuZGluZ19xdWV1ZV8xIiwidGFzayIsImdpdEVycm9yIiwiY2hpbGRfcHJvY2Vzc18xIiwiZ2l0X2V4ZWN1dG9yX2NoYWluXzEiLCJwYXJzZV9kaWZmX3N1bW1hcnlfMSIsInBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMSIsInBhcnNlX3JlbW90ZV9vYmplY3RzXzEiLCJwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSIsIk1lcmdlU3VtbWFyeV8xIiwicGFyc2VfcHVsbF8xIiwicGFyc2VfbWVyZ2VfMSIsInBhcnNlX3B1c2hfMSIsInRhc2tfY2FsbGJhY2tfMSIsImNoYW5nZV93b3JraW5nX2RpcmVjdG9yeV8xIiwiaGFzaF9vYmplY3RfMSIsImluaXRfMSIsIm1lcmdlXzEiLCJwdXNoXzEiLCJzdGF0dXNfMSIsImxvZ18xIiwiQnJhbmNoRGVsZXRlU3VtbWFyeV8xIiwiQnJhbmNoU3VtbWFyeV8xIiwicGFyc2VfYnJhbmNoX2RlbGV0ZV8xIiwicGFyc2VfYnJhbmNoXzEiLCJDaGVja0lnbm9yZV8xIiwicGFyc2VfY29tbWl0XzEiLCJwYXJzZV9mZXRjaF8xIiwicGFyc2VfbW92ZV8xIiwiR2V0UmVtb3RlU3VtbWFyeV8xIiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwicmVxdWlyZSQkMjEiLCJyZXF1aXJlJCQyMiIsInBsdWdpbnMiLCJwbHVnaW5zXzEiLCJHaXQiLCJnaXRfZmFjdG9yeV8xIiwic2ltcGxlR2l0IiwicGF0aCIsInNwYXduU3luYyIsIlRGaWxlIiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFDRDtBQUNPLElBQUksUUFBUSxHQUFHLFdBQVc7QUFDakMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckQsUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3RCxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsWUFBWSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RixTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUNqQixNQUFLO0FBQ0wsSUFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLEVBQUM7QUE0QkQ7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFB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LEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFD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SUFBSSxLQUFLLE1BQU0sQ0FBQztBQUNoQixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZixJQUFJO0FBQ0osTUFBTSxPQUFPLFNBQVMsQ0FBQztBQUN2QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLEVBQUUsRUFBRTtBQUN0QixFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNyQixFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxHQUFHO0FBQ0gsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7QUFDcEMsRUFBRSxJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNsQyxFQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ3BCLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7QUFDakMsQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDL0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQy9CLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBR0MsRUFBYSxDQUFDO0FBQ3RDLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDL0I7QUFDQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSTtBQUNqQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUNqQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNmO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFDYixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEUsRUFBRTtBQUNGLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFO0FBQ2pDLEVBQUUsSUFBSSxRQUFRLENBQUM7QUFDZixFQUFFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztBQUM1QixFQUFFLElBQUksZUFBZSxDQUFDO0FBQ3RCLEVBQUUsSUFBSSxZQUFZLENBQUM7QUFDbkI7QUFDQSxFQUFFLFNBQVMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQzFCO0FBQ0EsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUN2QixJQUFJLE9BQU87QUFDWCxJQUFJO0FBQ0o7QUFDQSxHQUFHLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN0QjtBQUNBO0FBQ0EsR0FBRyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUN4QyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDeEIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDbkI7QUFDQSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0EsR0FBRyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtBQUNwQztBQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sS0FBSztBQUNqRTtBQUNBLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3hCLEtBQUssT0FBTyxHQUFHLENBQUM7QUFDaEIsS0FBSztBQUNMLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckQsSUFBSSxJQUFJLE9BQU8sU0FBUyxLQUFLLFVBQVUsRUFBRTtBQUN6QyxLQUFLLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixLQUFLLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QztBQUNBO0FBQ0EsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQixLQUFLLEtBQUssRUFBRSxDQUFDO0FBQ2IsS0FBSztBQUNMLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsSUFBSSxDQUFDLENBQUM7QUFDTjtBQUNBO0FBQ0EsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0M7QUFDQSxHQUFHLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM3QyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNCLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDOUIsRUFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM1QyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO0FBQ3RDO0FBQ0EsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDMUMsR0FBRyxVQUFVLEVBQUUsSUFBSTtBQUNuQixHQUFHLFlBQVksRUFBRSxLQUFLO0FBQ3RCLEdBQUcsR0FBRyxFQUFFLE1BQU07QUFDZCxJQUFJLElBQUksY0FBYyxLQUFLLElBQUksRUFBRTtBQUNqQyxLQUFLLE9BQU8sY0FBYyxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLElBQUksZUFBZSxLQUFLLFdBQVcsQ0FBQyxVQUFVLEVBQUU7QUFDcEQsS0FBSyxlQUFlLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztBQUM5QyxLQUFLLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxZQUFZLENBQUM7QUFDeEIsSUFBSTtBQUNKLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSTtBQUNiLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFJO0FBQ0osR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBO0FBQ0EsRUFBRSxJQUFJLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDOUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDZixFQUFFO0FBQ0Y7QUFDQSxDQUFDLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDdkMsRUFBRSxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ2xILEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzFCLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUM3QixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0IsRUFBRSxXQUFXLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUN0QztBQUNBLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDekIsRUFBRSxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN6QjtBQUNBLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDUixFQUFFLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLEVBQUUsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUMzQjtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2xCO0FBQ0EsSUFBSSxTQUFTO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0M7QUFDQSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUM5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekUsSUFBSSxNQUFNO0FBQ1YsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0QsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsT0FBTyxHQUFHO0FBQ3BCLEVBQUUsTUFBTSxVQUFVLEdBQUc7QUFDckIsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQUN4QyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsRUFBRSxPQUFPLFVBQVUsQ0FBQztBQUNwQixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDckMsR0FBRyxPQUFPLElBQUksQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDUixFQUFFLElBQUksR0FBRyxDQUFDO0FBQ1Y7QUFDQSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1RCxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEMsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hDLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDZixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQzlCLEVBQUUsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQzFCLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM5QyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUIsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUN0QixFQUFFLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtBQUM1QixHQUFHLE9BQU8sR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsT0FBTyxHQUFHO0FBQ3BCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyx1SUFBdUksQ0FBQyxDQUFDO0FBQ3hKLEVBQUU7QUFDRjtBQUNBLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QztBQUNBLENBQUMsT0FBTyxXQUFXLENBQUM7QUFDcEIsQ0FBQztBQUNEO0FBQ0EsVUFBYyxHQUFHLEtBQUs7OztBQ2pSdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNwQixpQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsZUFBZSxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQ2pDLGVBQWUsR0FBRyxDQUFDLE1BQU07QUFDekIsQ0FBQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEI7QUFDQSxDQUFDLE9BQU8sTUFBTTtBQUNkLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNqQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUlBQXVJLENBQUMsQ0FBQztBQUN6SixHQUFHO0FBQ0gsRUFBRSxDQUFDO0FBQ0gsQ0FBQyxHQUFHLENBQUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxHQUFHO0FBQ2pCLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztBQUNWLENBQUMsU0FBUztB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LEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkgsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6SCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNILElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5SixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzTSxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEssSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xLLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0SyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSztBQUNwRixRQUFRQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUQsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDeEYsUUFBUSxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsUUFBUUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELFFBQVFBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEQsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsSSxJQUFJLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxDQUFDO0FBQ3BHLElBQUksR0FBRyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7QUFDeEcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7QUFDcEksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDN0IsWUFBWSxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUM7QUFDM0MsWUFBWSxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDN0MsWUFBWSxNQUFNLFVBQVUsR0FBRywwQkFBMEIsQ0FBQztBQUMxRCxZQUFZLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQztBQUM3QyxZQUFZLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDdEQsWUFBWSxJQUFJLFdBQVcsQ0FBQztBQUM1QixZQUFZLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLFlBQVksTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9ELFlBQVksV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0MsWUFBWSxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEUsWUFBWSxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxZQUFZLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxZQUFZLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pELFlBQVksTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVELFlBQVksV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RCxZQUFZLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQzdFLFNBQVMsQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLElBQUksRUFBRTtBQUMzQyxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsSUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3ZDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsRCxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsS0FBSztBQUNMLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUM7QUFDaEQsU0FBUyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUNwQyxJQUFJLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQyxJQUFJLFFBQVEsR0FBRztBQUNmLFFBQVEsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM5QixZQUFZLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakYsUUFBUSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFlBQVksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hGLFFBQVE7QUFDUixZQUFZLE9BQU87QUFDbkIsS0FBSztBQUNMLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDM0MsUUFBUSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM1QyxRQUFRLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNyQixZQUFZLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEMsU0FBUztBQUNULFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQzFCLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEcsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7OztBQ2pKRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNrQztBQUM5RCxTQUFTLFVBQVUsQ0FBQyxVQUFVLEVBQUU7QUFDaEMsSUFBSSxPQUFPO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQztBQUN0RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDckIsWUFBWSxPQUFPLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELGtCQUFrQixHQUFHLFVBQVUsQ0FBQzs7Ozs7QUNaaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDcUI7QUFDNEI7QUFDcEM7QUFDVTtBQUNkO0FBQ0Y7QUFDSTtBQUNGO0FBQ0k7QUFDSjtBQUNKO0FBQ25DLE1BQU0sWUFBWSxDQUFDO0FBQ25CLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUMzQixRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3pCLFFBQVEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QyxRQUFRLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLElBQUksRUFBRTtBQUNsQixZQUFZMkIsY0FBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELFNBQVM7QUFDVCxRQUFRLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDbkMsWUFBWSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDdkQsWUFBWSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDekQsWUFBWSxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3ZDLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSztBQUNMLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNmLFFBQVEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDekIsSUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUdGLEtBQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNoSixLQUFLO0FBQ0wsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQ25CLFFBQVEsTUFBTSxJQUFJLEdBQUdBLEtBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRSxRQUFRLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO0FBQzNDLFlBQVksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDNEIsc0JBQTBCLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6SCxTQUFTO0FBQ1QsUUFBUSxJQUFJLFFBQVEsU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtBQUN4RyxZQUFZLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQ0Esc0JBQTBCLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0osU0FBUztBQUNULFFBQVEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDMUIsSUFBTSxDQUFDLHNCQUFzQixDQUFDLHdEQUF3RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUgsS0FBSztBQUNMLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDNUIsUUFBUSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMyQixVQUFhLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUU3QixLQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5SCxLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2YsUUFBUSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM4QixJQUFNLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU5QixLQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRUEsS0FBTyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDckssS0FBSztBQUNMLElBQUksS0FBSyxHQUFHO0FBQ1osUUFBUSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMrQixLQUFPLENBQUMsU0FBUyxDQUFDL0IsS0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUVBLEtBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3BJLEtBQUs7QUFDTCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hDLFFBQVEsSUFBSSxFQUFFQSxLQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJQSxLQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDN0UsWUFBWSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUNFLElBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHlGQUF5RixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdKLFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzZCLEtBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcvQixLQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEssS0FBSztBQUNMLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUMzQixRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUMvQyxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLEtBQUs7QUFDTCxJQUFJLElBQUksR0FBRztBQUNYLFFBQVEsTUFBTSxJQUFJLEdBQUdnQyxJQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3JDLFlBQVksTUFBTSxFQUFFaEMsS0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEtBQU8sQ0FBQyxZQUFZLENBQUM7QUFDMUUsWUFBWSxNQUFNLEVBQUVBLEtBQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFPLENBQUMsWUFBWSxDQUFDO0FBQzFFLFNBQVMsRUFBRUEsS0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsUUFBUSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFQSxLQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNoRixLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQUc7QUFDWixRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQ0UsSUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUdGLEtBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEtBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2pLLEtBQUs7QUFDTCxJQUFJLE1BQU0sR0FBRztBQUNiLFFBQVEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDaUMsTUFBUSxDQUFDLFVBQVUsQ0FBQ2pDLEtBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFQSxLQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN0SSxLQUFLO0FBQ0wsQ0FBQztBQUNELG9CQUFvQixHQUFHLFlBQVksQ0FBQztBQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUVNLE1BQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRTRCLEdBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDOzs7OztBQzVFM0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDUztBQUM0QjtBQUNsQjtBQUM5QyxNQUFNLG1CQUFtQixHQUFHLENBQUMsTUFBTTtBQUNuQyxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNmLElBQUksT0FBTyxNQUFNO0FBQ2pCLFFBQVEsRUFBRSxFQUFFLENBQUM7QUFDYixRQUFRLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUd2QixJQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RFLFFBQVEsT0FBTztBQUNmLFlBQVksT0FBTztBQUNuQixZQUFZLElBQUk7QUFDaEIsWUFBWSxFQUFFO0FBQ2QsU0FBUyxDQUFDO0FBQ1YsS0FBSyxDQUFDO0FBQ04sQ0FBQyxHQUFHLENBQUM7QUFDTCxNQUFNLFNBQVMsQ0FBQztBQUNoQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO0FBQ2pDLFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDdkMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHRSxTQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNqRSxRQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoRSxLQUFLO0FBQ0wsSUFBSSxRQUFRLEdBQUc7QUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzdFLFlBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLDhEQUE4RCxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RKLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxNQUFNLElBQUksR0FBR2IsS0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN4RSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtBQUN4QixZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkQsWUFBWUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHQSxLQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBQ3BGLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsQ0FBQztBQUNELGlCQUFpQixHQUFHLFNBQVMsQ0FBQzs7Ozs7QUM3QzlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHNCQUFzQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ0M7QUFDakMsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQUM3QyxJQUFJLE9BQU9FLElBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUNELHNCQUFzQixHQUFHLGNBQWMsQ0FBQzs7Ozs7QUNOeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsbUNBQW1DLEdBQUcsNkJBQTZCLEdBQUcsNkJBQTZCLEdBQUcsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDM0ksTUFBTSxtQkFBbUIsQ0FBQztBQUMxQixJQUFJLFdBQVcsR0FBRztBQUNsQixRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDM0IsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixLQUFLO0FBQ0wsSUFBSSxJQUFJLE9BQU8sR0FBRztBQUNsQixRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNuQyxLQUFLO0FBQ0wsQ0FBQztBQUNELDJCQUEyQixHQUFHLG1CQUFtQixDQUFDO0FBQ2xELFNBQVMscUJBQXFCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUM3QyxJQUFJLE9BQU87QUFDWCxRQUFRLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUk7QUFDbkMsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELDZCQUE2QixHQUFHLHFCQUFxQixDQUFDO0FBQ3RELFNBQVMscUJBQXFCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLElBQUksT0FBTztBQUNYLFFBQVEsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUs7QUFDMUMsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELDZCQUE2QixHQUFHLHFCQUFxQixDQUFDO0FBQ3RELFNBQVMsMkJBQTJCLENBQUMsSUFBSSxFQUFFO0FBQzNDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUM7QUFDRCxtQ0FBbUMsR0FBRywyQkFBMkIsQ0FBQzs7Ozs7QUM1QmxFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDhCQUE4QixHQUFHLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ0c7QUFDdEM7QUFDcEMsTUFBTSxrQkFBa0IsR0FBRywwQkFBMEIsQ0FBQztBQUN0RCxNQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDO0FBQ2pELE1BQU0sT0FBTyxHQUFHO0FBQ2hCLElBQUksSUFBSUYsS0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSztBQUMzRSxRQUFRLE1BQU0sUUFBUSxHQUFHbUMsbUJBQXFCLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25GLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsUUFBUSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMzQyxLQUFLLENBQUM7QUFDTixJQUFJLElBQUluQyxLQUFPLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7QUFDbkUsUUFBUSxNQUFNLFFBQVEsR0FBR21DLG1CQUFxQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdFLFFBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxRQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzNDLEtBQUssQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxLQUFLO0FBQ2pELElBQUksT0FBT25DLEtBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJbUMsbUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pILENBQUMsQ0FBQztBQUNGLDRCQUE0QixHQUFHLG9CQUFvQixDQUFDO0FBQ3BELFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtBQUN2RCxJQUFJLE9BQU8sZUFBZSxLQUFLbkMsS0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFDRCw4QkFBOEIsR0FBRyxzQkFBc0IsQ0FBQzs7Ozs7QUMxQnhELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDJCQUEyQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUIsSUFBSSxXQUFXLEdBQUc7QUFDbEIsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFBUSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUM5QixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNqRCxRQUFRLElBQUksT0FBTyxFQUFFO0FBQ3JCLFlBQVksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDckMsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNoQyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFDOUIsWUFBWSxPQUFPLEVBQUUsT0FBTztBQUM1QixZQUFZLElBQUksRUFBRSxJQUFJO0FBQ3RCLFlBQVksTUFBTSxFQUFFLE1BQU07QUFDMUIsWUFBWSxLQUFLLEVBQUUsS0FBSztBQUN4QixTQUFTLENBQUM7QUFDVixLQUFLO0FBQ0wsQ0FBQztBQUNELDJCQUEyQixHQUFHLG1CQUFtQixDQUFDOzs7OztBQ3ZCbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDMEI7QUFDMUI7QUFDcEMsTUFBTSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDaEosUUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLHFDQUFxQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDOUcsUUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0QsS0FBSyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0YsU0FBUyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxPQUFPQSxLQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSW9DLGFBQWUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRyxDQUFDO0FBQ0QsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUM7Ozs7O0FDZmhELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHdCQUF3QixHQUFHLDBCQUEwQixHQUFHLHVCQUF1QixHQUFHLGtCQUFrQixHQUFHLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9FO0FBQ0c7QUFDZDtBQUN0QjtBQUNwQyxTQUFTLDJCQUEyQixDQUFDLFFBQVEsRUFBRTtBQUMvQyxJQUFJLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwRCxJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFDRCxtQ0FBbUMsR0FBRywyQkFBMkIsQ0FBQztBQUNsRSxTQUFTLFVBQVUsQ0FBQyxVQUFVLEVBQUU7QUFDaEMsSUFBSSxNQUFNLFFBQVEsR0FBRywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RCxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDL0MsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQy9CLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsQyxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxLQUFLO0FBQ0wsSUFBSSxPQUFPO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLFFBQVE7QUFDaEIsUUFBUSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUMvQixZQUFZLElBQUksUUFBUSxFQUFFO0FBQzFCLGdCQUFnQixPQUFPQyxpQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLGFBQWE7QUFDYixZQUFZLE9BQU9DLFdBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELGtCQUFrQixHQUFHLFVBQVUsQ0FBQztBQUNoQyxTQUFTLGVBQWUsR0FBRztBQUMzQixJQUFJLE1BQU0sTUFBTSxHQUFHQSxXQUFjLENBQUMsa0JBQWtCLENBQUM7QUFDckQsSUFBSSxPQUFPO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7QUFDbEMsUUFBUSxNQUFNO0FBQ2QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELHVCQUF1QixHQUFHLGVBQWUsQ0FBQztBQUMxQyxTQUFTLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxXQUFXLEdBQUcsS0FBSyxFQUFFO0FBQzNELElBQUksT0FBTztBQUNYLFFBQVEsTUFBTSxFQUFFLE9BQU87QUFDdkIsUUFBUSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQzFFLFFBQVEsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0IsWUFBWSxPQUFPRCxpQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUUsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3pELFlBQVksSUFBSSxDQUFDQSxpQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUU7QUFDeEYsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGFBQWE7QUFDYixZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELDBCQUEwQixHQUFHLGtCQUFrQixDQUFDO0FBQ2hELFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUU7QUFDdkQsSUFBSSxNQUFNLElBQUksR0FBRztBQUNqQixRQUFRLE1BQU0sRUFBRSxPQUFPO0FBQ3ZCLFFBQVEsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLENBQUM7QUFDckUsUUFBUSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUMvQixZQUFZLE9BQU9BLGlCQUFxQixDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0YsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtBQUM5RCxZQUFZLElBQUksQ0FBQ0EsaUJBQXFCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQ3hGLGdCQUFnQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxhQUFhO0FBQ2IsWUFBWSxNQUFNLElBQUk1QixnQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDVCxLQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFQSxLQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEosU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUNELHdCQUF3QixHQUFHLGdCQUFnQixDQUFDOzs7OztBQ3pFNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksS0FBSztBQUNuQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDNUIsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqQyxTQUFTLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUNGLHdCQUF3QixHQUFHLGdCQUFnQixDQUFDOzs7OztBQ1Y1QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN5QjtBQUMxRCxTQUFTLGVBQWUsQ0FBQyxLQUFLLEVBQUU7QUFDaEMsSUFBSSxPQUFPO0FBQ1gsUUFBUSxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDNUMsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLE1BQU0sRUFBRXVDLFdBQWEsQ0FBQyxnQkFBZ0I7QUFDOUMsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELHVCQUF1QixHQUFHLGVBQWUsQ0FBQzs7Ozs7QUNWMUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsdUJBQXVCLEdBQUcsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDcEI7QUFDRztBQUNwQyxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUNoRCxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDOUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUNsQyxRQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7QUFDdkMsUUFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLEtBQUs7QUFDTCxJQUFJLE9BQU9yQyxJQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUNELGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixTQUFTLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN0RCxJQUFJRixLQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNELHVCQUF1QixHQUFHLGVBQWUsQ0FBQzs7Ozs7QUNuQjFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHlCQUF5QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ0M7QUFDcEMsTUFBTSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLG1DQUFtQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSztBQUNwRyxRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQy9CLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDL0IsUUFBUSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDN0IsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7QUFDdEUsUUFBUSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDNUMsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUc7QUFDeEIsWUFBWSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDcEQsWUFBWSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDeEMsU0FBUyxDQUFDO0FBQ1YsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSztBQUN2SCxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVELFFBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEUsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRSxLQUFLLENBQUM7QUFDTixJQUFJLElBQUlBLEtBQU8sQ0FBQyxVQUFVLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO0FBQzlHLFFBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUQsUUFBUSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxRQUFRLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRTtBQUMvQixZQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUM3QyxTQUFTO0FBQ1QsYUFBYSxJQUFJLFNBQVMsS0FBSyxHQUFHLEVBQUU7QUFDcEMsWUFBWSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUMsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO0FBQ25DLElBQUksTUFBTSxNQUFNLEdBQUc7QUFDbkIsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLE1BQU0sRUFBRSxFQUFFO0FBQ2xCLFFBQVEsTUFBTSxFQUFFLEVBQUU7QUFDbEIsUUFBUSxJQUFJLEVBQUUsS0FBSztBQUNuQixRQUFRLE9BQU8sRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFlBQVksVUFBVSxFQUFFLENBQUM7QUFDekIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxPQUFPQSxLQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBQ0QseUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Ozs7O0FDbEQ5QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM4QjtBQUMxRCxTQUFTLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNoRCxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDM0MsSUFBSSxPQUFPO0FBQ1gsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsTUFBTSxFQUFFLE9BQU87QUFDdkIsUUFBUSxNQUFNLEVBQUV3QyxXQUFjLENBQUMsaUJBQWlCO0FBQ2hELEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxrQkFBa0IsR0FBRyxVQUFVLENBQUM7Ozs7O0FDYmhDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3FDO0FBQ3RFLFNBQVMsZUFBZSxDQUFDLFVBQVUsRUFBRTtBQUNyQyxJQUFJLE9BQU87QUFDWCxRQUFRLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxVQUFVLENBQUM7QUFDeEQsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdkIsWUFBWSxPQUFPckIsZ0JBQW9CLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hFLFNBQVM7QUFDVCxLQUFLLENBQUM7QUFDTixDQUFDO0FBQ0QsdUJBQXVCLEdBQUcsZUFBZSxDQUFDOzs7OztBQ1oxQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNFO0FBQ3BDLE1BQU0sT0FBTyxHQUFHO0FBQ2hCLElBQUksSUFBSW5CLEtBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7QUFDL0QsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMvQixLQUFLLENBQUM7QUFDTixJQUFJLElBQUlBLEtBQU8sQ0FBQyxVQUFVLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7QUFDaEcsUUFBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QixZQUFZLElBQUk7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJQSxLQUFPLENBQUMsVUFBVSxDQUFDLGtDQUFrQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLO0FBQzdGLFFBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsWUFBWSxJQUFJO0FBQ2hCLFlBQVksUUFBUTtBQUNwQixTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUssQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUMxQyxJQUFJLE1BQU0sTUFBTSxHQUFHO0FBQ25CLFFBQVEsR0FBRyxFQUFFLE1BQU07QUFDbkIsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLFFBQVEsRUFBRSxFQUFFO0FBQ3BCLFFBQVEsSUFBSSxFQUFFLEVBQUU7QUFDaEIsS0FBSyxDQUFDO0FBQ04sSUFBSSxPQUFPQSxLQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUNELHdCQUF3QixHQUFHLGdCQUFnQixDQUFDOzs7OztBQzdCNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNkI7QUFDeEQsU0FBUyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDL0MsSUFBSSxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLElBQUksSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO0FBQzFCLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsS0FBSztBQUNMLElBQUksT0FBTztBQUNYLFFBQVEsUUFBUTtBQUNoQixRQUFRLE1BQU0sRUFBRSxPQUFPO0FBQ3ZCLFFBQVEsTUFBTSxFQUFFeUMsVUFBYSxDQUFDLGdCQUFnQjtBQUM5QyxLQUFLLENBQUM7QUFDTixDQUFDO0FBQ0QsaUJBQWlCLEdBQUcsU0FBUyxDQUFDOzs7OztBQ2Q5QixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNHO0FBQ3BDLE1BQU0sT0FBTyxHQUFHO0FBQ2hCLElBQUksSUFBSXpDLEtBQU8sQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7QUFDOUUsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLEtBQUssQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRTtBQUNqQyxJQUFJLE9BQU9BLEtBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUNELHVCQUF1QixHQUFHLGVBQWUsQ0FBQzs7Ozs7QUNYMUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNEI7QUFDbEI7QUFDcEMsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUM1QixJQUFJLE9BQU87QUFDWCxRQUFRLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBR0EsS0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDNUQsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLE1BQU0sRUFBRTBDLFNBQVksQ0FBQyxlQUFlO0FBQzVDLEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Ozs7O0FDWDVCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzRCO0FBQ3RELFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQzlDLElBQUksTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtBQUMxQixRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsS0FBSztBQUNMLElBQUksT0FBTztBQUNYLFFBQVEsUUFBUTtBQUNoQixRQUFRLE1BQU0sRUFBRSxPQUFPO0FBQ3ZCLFFBQVEsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0IsWUFBWSxPQUFPbEIsU0FBWSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEUsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Ozs7O0FDaEI1QixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCw4QkFBOEIsR0FBRyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM5QjtBQUNwQyxTQUFTLGVBQWUsQ0FBQyxJQUFJLEVBQUU7QUFDL0IsSUFBSSxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFDRCx1QkFBdUIsR0FBRyxlQUFlLENBQUM7QUFDMUMsU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUU7QUFDdEMsSUFBSSxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0FBQzVDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDM0MsWUFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFDNUIsZ0JBQWdCLElBQUksRUFBRSxJQUFJO0FBQzFCLGdCQUFnQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDN0MsYUFBYSxDQUFDO0FBQ2QsU0FBUztBQUNULFFBQVEsSUFBSSxPQUFPLElBQUksR0FBRyxFQUFFO0FBQzVCLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNyRSxTQUFTO0FBQ1QsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBQ0QsOEJBQThCLEdBQUcsc0JBQXNCLENBQUM7QUFDeEQsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNoQyxJQUFJeEIsS0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQzs7Ozs7QUMzQkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsd0JBQXdCLEdBQUcsa0JBQWtCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDOUQ7QUFDbkM7QUFDakMsU0FBUyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFO0FBQ2hFLElBQUksT0FBT0UsSUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN0RyxDQUFDO0FBQ0QscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxJQUFJLE9BQU8sRUFBRTtBQUNqQixRQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsS0FBSztBQUNMLElBQUksT0FBTztBQUNYLFFBQVEsUUFBUTtBQUNoQixRQUFRLE1BQU0sRUFBRSxPQUFPO0FBQ3ZCLFFBQVEsTUFBTSxFQUFFLE9BQU8sR0FBR3lDLGdCQUFrQixDQUFDLHNCQUFzQixHQUFHQSxnQkFBa0IsQ0FBQyxlQUFlO0FBQ3hHLEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDeEMsU0FBUyxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRTtBQUMxQyxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUNyQyxRQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsS0FBSztBQUNMLElBQUksT0FBT3pDLElBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsdUJBQXVCLEdBQUcsZUFBZSxDQUFDO0FBQzFDLFNBQVMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7QUFDckMsSUFBSSxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDckMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7QUFDbEMsUUFBUSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLE9BQU9BLElBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0Qsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLFNBQVMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO0FBQ3RDLElBQUksT0FBT0EsSUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFDRCx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7QUN2QzVDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQytDO0FBQy9DO0FBQy9CLFNBQVMsYUFBYSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFO0FBQzdDLElBQUksTUFBTSxPQUFPLEdBQUdnQyxHQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLElBQUksTUFBTSxNQUFNLEdBQUdkLG1CQUF3QixDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pHLElBQUksT0FBTztBQUNYLFFBQVEsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxVQUFVLENBQUM7QUFDdkUsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLE1BQU07QUFDZCxLQUFLLENBQUM7QUFDTixDQUFDO0FBQ0QscUJBQXFCLEdBQUcsYUFBYSxDQUFDOzs7OztBQ2J0QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCwyQkFBMkIsR0FBRyxxQkFBcUIsR0FBRyx5QkFBeUIsR0FBRyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNuRjtBQUNqQyxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDdEMsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBQ0Qsd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDNUMsU0FBUyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7QUFDdkMsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNELHlCQUF5QixHQUFHLGlCQUFpQixDQUFDO0FBQzlDLFNBQVMsYUFBYSxDQUFDLFVBQVUsRUFBRTtBQUNuQyxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUNyQyxRQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsS0FBSztBQUNMLElBQUksT0FBT2xCLElBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLFNBQVMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO0FBQ3pDLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFDRCwyQkFBMkIsR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7QUN0QmxELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELG9CQUFvQixHQUFHLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNoRCxNQUFNLE9BQU8sQ0FBQztBQUNkLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDN0IsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUMxQixNQUFNLFlBQVksR0FBRyxVQUFVLElBQUksRUFBRSxVQUFVLEdBQUcsS0FBSyxFQUFFO0FBQ3pELElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSTtBQUNyQixTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDcEIsU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ3JCLFNBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3hDLFlBQVksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQyxZQUFZLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsWUFBWSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVELGdCQUFnQixPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsYUFBYTtBQUNiLFlBQVksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwRixnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7QUFDMUIsb0JBQW9CLE9BQU8sSUFBSSxDQUFDO0FBQ2hDLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxPQUFPLENBQUMsQ0FBQztBQUNyQixTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUs7QUFDTCxJQUFJLE1BQU0sTUFBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25HLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBQ0Ysb0JBQW9CLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLFNBQVMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDNUIsSUFBSSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsSUFBSSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7QUFDM0IsUUFBUSxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsS0FBSztBQUNMLElBQUksT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUNELFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFDRCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBQ0QsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3pCLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDbkMsUUFBUSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0QsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDOzs7OztBQ3JERCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCwyQkFBMkIsR0FBRyxrQkFBa0IsR0FBRyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFO0FBQ3RDLElBQUksTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDL0UsSUFBSSxPQUFPO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUM7QUFDOUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3JCLFlBQVksT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMvRCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELG1CQUFtQixHQUFHLFdBQVcsQ0FBQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDMUIsSUFBSSxPQUFPO0FBQ1gsUUFBUSxNQUFNLEVBQUUsT0FBTztBQUN2QixRQUFRLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7QUFDL0IsUUFBUSxNQUFNLEdBQUc7QUFDakIsWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxrQkFBa0IsR0FBRyxVQUFVLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQy9DLElBQUksT0FBTztBQUNYLFFBQVEsTUFBTSxFQUFFLE9BQU87QUFDdkIsUUFBUSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDO0FBQ3ZELFFBQVEsTUFBTSxHQUFHO0FBQ2pCLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzVCLFNBQVM7QUFDVCxLQUFLLENBQUM7QUFDTixDQUFDO0FBQ0QsMkJBQTJCLEdBQUcsbUJBQW1CLENBQUM7Ozs7QUMzQ2xELE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBR2xCLFdBQXFDLENBQUM7QUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHSSxZQUErQixDQUFDO0FBQ3ZEO0FBQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHTSxTQUFrQyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBR0MsU0FBMkIsQ0FBQztBQUNoRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBR0MsSUFBMkIsQ0FBQztBQUM3RCxNQUFNO0FBQ04sR0FBRyxPQUFPO0FBQ1YsR0FBRyxXQUFXO0FBQ2QsR0FBRyxnQkFBZ0I7QUFDbkIsR0FBRyxZQUFZO0FBQ2YsR0FBRyx5QkFBeUI7QUFDNUIsR0FBRyxVQUFVO0FBQ2IsR0FBRyxrQkFBa0I7QUFDckIsR0FBRyx3QkFBd0I7QUFDM0IsR0FBRyx1QkFBdUI7QUFDMUIsQ0FBQyxHQUFHQyxLQUFzQixDQUFDO0FBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBR0MsV0FBa0M7QUFDM0QsTUFBTSxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsR0FBR0MsTUFBNkIsQ0FBQztBQUMxRyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUc2QyxXQUFtQyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBR0MsV0FBb0MsQ0FBQztBQUMvRCxNQUFNLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxHQUFHQyxLQUE0QixDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHQyxLQUE0QixDQUFDO0FBQ2pGLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBR0MsTUFBNkIsQ0FBQztBQUNuRCxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUdDLElBQTJCLENBQUM7QUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHQyxLQUE0QixDQUFDO0FBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBR0MsSUFBMkIsQ0FBQztBQUMvQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUdDLElBQTJCLENBQUM7QUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHQyxJQUEyQixDQUFDO0FBQ25ELE1BQU0sQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsR0FBR0MsTUFBNkIsQ0FBQztBQUNySCxNQUFNLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHQyxLQUE0QixDQUFDO0FBQy9ELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBR0MsU0FBaUMsQ0FBQztBQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDLEdBQUdDLFNBQWlDLENBQUM7QUFDcEgsTUFBTSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBR0MsR0FBMEIsQ0FBQztBQUNsRixNQUFNLENBQUMseUJBQXlCLEVBQUUseUJBQXlCLENBQUMsR0FBRzlELElBQTJCLENBQUM7QUFDM0Y7QUFDQSxTQUFTLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2hDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVc7QUFDbkMsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPO0FBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsT0FBTztBQUM1RCxJQUFJLENBQUM7QUFDTCxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBQ0Q7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQ2hELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ25DLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFDZixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDM0MsR0FBRyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUMzRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNoQyxJQUFJLE1BQU07QUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNwRSxJQUFJO0FBQ0o7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUM3QyxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxhQUFhO0FBQ25CLFNBQVMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUNqRCxTQUFTLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLElBQUksRUFBRTtBQUM5QyxPQUFPO0FBQ1AsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxTQUFTLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7QUFDMUQsR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNyQyxNQUFNLE9BQU8sc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNuRixJQUFJO0FBQ0o7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZO0FBQ2xDLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQ3ZELE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUNuQyxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxlQUFlLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLFNBQVMsQ0FBQztBQUM5RCxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxVQUFVLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDdkMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxJQUFJLEVBQUU7QUFDbEQsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDbEIsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUNoQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLFNBQVMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsSUFBSSxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hFLEdBQUcsTUFBTSxJQUFJLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsR0FBRyxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkI7QUFDQSxHQUFHLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDM0MsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekMsSUFBSSxNQUFNO0FBQ1YsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLGdKQUFnSixDQUFDLENBQUM7QUFDckssSUFBSTtBQUNKO0FBQ0EsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sVUFBVTtBQUNoQixTQUFTLFFBQVE7QUFDakIsU0FBUyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRSxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0YsT0FBTztBQUNQLE1BQU0sSUFBSTtBQUNWLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDOUQsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqSCxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hELEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEgsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQzFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxzS0FBc0ssQ0FBQyxDQUFDO0FBQ3hMLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFDZixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUM5QyxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxXQUFXLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDbkMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUFJLEVBQUU7QUFDdEMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsRSxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQ3pDLEdBQUcsTUFBTSxJQUFJLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQ7QUFDQSxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQ25DLE1BQU0sT0FBTyxJQUFJLENBQUMsUUFBUTtBQUMxQixTQUFTLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDO0FBQzFELFNBQVMsSUFBSTtBQUNiLE9BQU8sQ0FBQztBQUNSLElBQUk7QUFDSjtBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLHlCQUF5QixDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RixNQUFNLElBQUk7QUFDVixJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxFQUFFO0FBQ3ZDLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRO0FBQ3pDLFFBQVEsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN4QixRQUFRLHNCQUFzQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDakU7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQUMvRCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0FBQzlDLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxZQUFZO0FBQ3JDLEdBQUcsTUFBTSxRQUFRLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSx5QkFBeUIsQ0FBQyxRQUFRLENBQUM7QUFDekMsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQVUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDdkUsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDN0YsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUNoRSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQzNFLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLFdBQVcsS0FBSyxTQUFTLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMxRixNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxXQUFXLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUM5RSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxXQUFXLEtBQUssU0FBUyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDN0YsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDaEQsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sVUFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSxFQUFFO0FBQzVDLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGVBQWUsRUFBRTtBQUN2QixNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ3hDLEdBQUcsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkQsR0FBRyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9FO0FBQ0EsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsRSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN6QyxTQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsU0FBUyxNQUFNO0FBQ2YsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBLEdBQUcsT0FBTyxDQUFDLElBQUk7QUFDZixNQUFNLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDL0MsSUFBSSxDQUFDO0FBQ0w7QUFDQSxHQUFHLElBQUksSUFBSSxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xEO0FBQ0EsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDMUIsU0FBUyxzQkFBc0IsQ0FBQyxpREFBaUQsQ0FBQztBQUNsRixTQUFTLElBQUk7QUFDYixPQUFPLENBQUM7QUFDUixJQUFJO0FBQ0o7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDekQsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztBQUNsQyxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN0RCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDcEQsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0saUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVELE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ25ELEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsRCxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDdkMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUNsRSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRSxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUN6RCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7QUFDbEMsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNwRCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxjQUFjLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztBQUN0QyxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoRCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxVQUFVLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0MsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDN0MsR0FBRyxNQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRDtBQUNBLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQzdCLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixJQUFJO0FBQ0o7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7QUFDeEMsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLElBQUksRUFBRTtBQUNqRCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdkQsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUNqRCxHQUFHLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN4RztBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDcEMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEUsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUM3QyxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNqRCxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxZQUFZO0FBQzFDLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUNqRCxHQUFHLElBQUksT0FBTyxHQUFHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixHQUFHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QjtBQUNBLEdBQUcsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDcEMsTUFBTSxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQzFCLFNBQVMsc0JBQXNCLENBQUMsOERBQThELENBQUM7QUFDL0YsU0FBUyxPQUFPO0FBQ2hCLE9BQU8sQ0FBQztBQUNSLElBQUk7QUFDSjtBQUNBLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQy9CLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLElBQUk7QUFDSjtBQUNBLEdBQUcsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLFFBQVE7QUFDbkMsUUFBUSx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7QUFDMUMsUUFBUSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQztBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUM5QyxHQUFHLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5RDtBQUNBLEdBQUcsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDcEMsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDO0FBQzNILElBQUk7QUFDSjtBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLHlCQUF5QixDQUFDLE9BQU8sQ0FBQztBQUN4QyxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDeEMsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0sZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RCxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQzlDLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7QUFDbkQsUUFBUSxzQkFBc0IsQ0FBQyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7QUFDMUcsUUFBUSxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUY7QUFDQSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSxJQUFJO0FBQ1YsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsRUFBQztBQUNEO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsWUFBWTtBQUNyQyxHQUFHLE1BQU0sUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUUsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLE1BQU0seUJBQXlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztBQUMvQyxNQUFNLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUM5QyxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkIsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDckQsR0FBRyxNQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVELEdBQUcsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyRyxHQUFHLE1BQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRztBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDakQsTUFBTSx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFDekMsSUFBSSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksRUFBRTtBQUNyQyxHQUFHLE1BQU0sSUFBSSxHQUFHO0FBQ2hCLE1BQU0sUUFBUSxFQUFFLEVBQUU7QUFDbEIsTUFBTSxNQUFNLEVBQUUsT0FBTztBQUNyQixNQUFNLE1BQU0sQ0FBQyxHQUFHO0FBQ2hCLFNBQVMsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDekMsWUFBWSxJQUFJLEVBQUUsQ0FBQztBQUNuQixVQUFVO0FBQ1YsT0FBTztBQUNQLElBQUksQ0FBQztBQUNMO0FBQ0EsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUN2QztBQUNBO0FBQ0EsR0FBRyxPQUFPLElBQUksQ0FBQztBQUNmLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxTQUFTLEVBQUUsSUFBSSxFQUFFO0FBQ3ZELEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGVBQWUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RGLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0EsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxTQUFTLEVBQUUsSUFBSSxFQUFFO0FBQ3ZELEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUTtBQUN2QixNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzFELE1BQU0sd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQ3pDLElBQUksQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGO0FBQ0EsT0FBYyxHQUFHLEdBQUc7OztBQzFyQnBCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDBCQUEwQixHQUFHLHdCQUF3QixHQUFHLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFEO0FBQ1E7QUFDSjtBQUNMO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxDQUFDLGFBQWEsRUFBRTtBQUN4QyxJQUFJLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtBQUNsRCxRQUFRLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDbkMsUUFBUSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO0FBQ3pDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNELHVCQUF1QixHQUFHLGVBQWUsQ0FBQztBQUMxQyxTQUFTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDMUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRTtBQUM1QyxRQUFRLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFDRCx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUM1QyxTQUFTLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDOUMsSUFBSSxNQUFNK0QsU0FBTyxHQUFHLElBQUlDLE9BQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRCxJQUFJLE1BQU0sTUFBTSxHQUFHNUQsS0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sS0FBSyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakksSUFBSSxJQUFJLENBQUNBLEtBQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQy9DLFFBQVEsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO0FBQ3RILEtBQUs7QUFDTCxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdEMsUUFBUTJELFNBQU8sQ0FBQyxHQUFHLENBQUNDLE9BQVMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzRSxLQUFLO0FBQ0wsSUFBSUQsU0FBTyxDQUFDLEdBQUcsQ0FBQ0MsT0FBUyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSUQsU0FBTyxDQUFDLEdBQUcsQ0FBQ0MsT0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSUQsU0FBTyxDQUFDLEdBQUcsQ0FBQ0MsT0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUlELFNBQU8sQ0FBQyxHQUFHLENBQUNDLE9BQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUMxRixJQUFJRCxTQUFPLENBQUMsR0FBRyxDQUFDQyxPQUFTLENBQUMsb0JBQW9CLENBQUNBLE9BQVMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkYsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJRCxTQUFPLENBQUMsR0FBRyxDQUFDQyxPQUFTLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEYsSUFBSSxPQUFPLElBQUlDLEdBQUcsQ0FBQyxNQUFNLEVBQUVGLFNBQU8sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFDRCwwQkFBMEIsR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7QUMxQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMrQztBQUNyQjtBQUNoRCxNQUFNLHVCQUF1QixHQUFHO0FBQ2hDLElBQUksY0FBYyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUTtBQUNwRCxDQUFDLENBQUM7QUFDRixNQUFNLHVCQUF1QixHQUFHO0FBQ2hDLElBQUksS0FBSztBQUNULElBQUksaUJBQWlCO0FBQ3JCLElBQUksV0FBVztBQUNmLElBQUksV0FBVztBQUNmLElBQUksUUFBUTtBQUNaLElBQUksWUFBWTtBQUNoQixJQUFJLGVBQWU7QUFDbkIsSUFBSSxRQUFRO0FBQ1osSUFBSSxhQUFhO0FBQ2pCLElBQUksU0FBUztBQUNiLElBQUksYUFBYTtBQUNqQixJQUFJLGFBQWE7QUFDakIsSUFBSSxVQUFVO0FBQ2QsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxPQUFPO0FBQ1gsSUFBSSxPQUFPO0FBQ1gsSUFBSSxRQUFRO0FBQ1osSUFBSSxLQUFLO0FBQ1QsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxNQUFNO0FBQ1YsSUFBSSxhQUFhO0FBQ2pCLElBQUksTUFBTTtBQUNWLElBQUksT0FBTztBQUNYLElBQUksWUFBWTtBQUNoQixJQUFJLE1BQU07QUFDVixJQUFJLFlBQVk7QUFDaEIsSUFBSSxZQUFZO0FBQ2hCLElBQUksS0FBSztBQUNULElBQUksT0FBTztBQUNYLElBQUksYUFBYTtBQUNqQixJQUFJLFFBQVE7QUFDWixJQUFJLElBQUk7QUFDUixJQUFJLE1BQU07QUFDVixJQUFJLE1BQU07QUFDVixJQUFJLFVBQVU7QUFDZCxJQUFJLEtBQUs7QUFDVCxJQUFJLFFBQVE7QUFDWixJQUFJLFFBQVE7QUFDWixJQUFJLGNBQWM7QUFDbEIsSUFBSSxPQUFPO0FBQ1gsSUFBSSxRQUFRO0FBQ1osSUFBSSxVQUFVO0FBQ2QsSUFBSSxJQUFJO0FBQ1IsSUFBSSxhQUFhO0FBQ2pCLElBQUksTUFBTTtBQUNWLElBQUksT0FBTztBQUNYLElBQUksV0FBVztBQUNmLElBQUksUUFBUTtBQUNaLElBQUksV0FBVztBQUNmLElBQUksY0FBYztBQUNsQixJQUFJLGVBQWU7QUFDbkIsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxLQUFLO0FBQ1QsSUFBSSxNQUFNO0FBQ1YsSUFBSSxrQkFBa0I7QUFDdEIsQ0FBQyxDQUFDO0FBQ0YsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xDLElBQUksSUFBSTtBQUNSLFFBQVEsR0FBRyxHQUFHRyxVQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN4RCxLQUFLO0FBQ0wsSUFBSSxPQUFPLENBQUMsRUFBRTtBQUNkLFFBQVEsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsS0FBSztBQUNMLElBQUksU0FBUyxhQUFhLEdBQUc7QUFDN0IsUUFBUSxPQUFPLFVBQVUsQ0FBQztBQUMxQixLQUFLO0FBQ0wsSUFBSSxTQUFTLFdBQVcsR0FBRztBQUMzQixRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLEtBQUs7QUFDTCxJQUFJLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyx1QkFBdUIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksS0FBSztBQUN0RyxRQUFRLE1BQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvRCxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RGLFFBQVEsTUFBTSxXQUFXLEdBQUcsT0FBTyxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFDbEUsUUFBUSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDekMsWUFBWSxVQUFVLEVBQUUsS0FBSztBQUM3QixZQUFZLFlBQVksRUFBRSxLQUFLO0FBQy9CLFlBQVksS0FBSyxFQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsV0FBVztBQUM1QyxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsSUFBSSxPQUFPLFVBQVUsQ0FBQztBQUN0QixJQUFJLFNBQVMsWUFBWSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7QUFDbkMsUUFBUSxPQUFPLFVBQVUsR0FBRyxJQUFJLEVBQUU7QUFDbEMsWUFBWSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDekQsZ0JBQWdCLE1BQU0sSUFBSSxTQUFTLENBQUMsb0VBQW9FO0FBQ3hHLG9CQUFvQiwyQ0FBMkMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN0RSxhQUFhO0FBQ2IsWUFBWSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUMxQyxnQkFBZ0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDOUQsb0JBQW9CLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sS0FBSztBQUN0RCx3QkFBd0IsSUFBSSxHQUFHLEVBQUU7QUFDakMsNEJBQTRCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hELHlCQUF5QjtBQUN6Qix3QkFBd0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLHFCQUFxQixDQUFDO0FBQ3RCLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLG9CQUFvQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3QyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUyxDQUFDO0FBQ1YsS0FBSztBQUNMLElBQUksU0FBUyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDdkMsUUFBUSxPQUFPLENBQUMsR0FBRyxJQUFJLEtBQUs7QUFDNUIsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3QixZQUFZLE9BQU8sR0FBRyxDQUFDO0FBQ3ZCLFNBQVMsQ0FBQztBQUNWLEtBQUs7QUFDTCxDQUFDO0FBQ0QsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNwQixTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDeEIsSUFBSSxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7QUFDaEMsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixLQUFLO0FBQ0wsSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUNuQyxRQUFRLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJckQsZ0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQzs7OztBQ2xJRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUd6QixjQUF3QyxDQUFDO0FBQ3hELE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsR0FBR0ksVUFBNEIsQ0FBQztBQUM3RjtBQUNBLE9BQWMsR0FBRyxlQUFlO0FBQ2hDLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxDQUFDOztBQ0REO0lBR0ksb0JBQVksTUFBbUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ3pCO0lBd0NLLHdDQUFtQixHQUF6Qjs7Ozs7O3dCQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7NkJBRTlDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQWpDLHdCQUFpQzt3QkFDcEIscUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBNUIsV0FBUyxTQUFtQjt3QkFDNUIsUUFBUSxHQUFHLFFBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNyQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs2QkFHOUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBOUIsd0JBQThCO3dCQUNqQixxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE1QixXQUFTLFNBQW1CO3dCQUU1QixjQUEwQyxFQUFFLENBQUM7d0JBQ2pELFFBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7NEJBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxXQUFTLEVBQUU7Z0NBQzFCLFdBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDM0M7aUNBQU07Z0NBQ0gsV0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDekM7eUJBQ0osQ0FBQyxDQUFDO3dCQUVDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ2hCLFdBQXFELEVBQXpCLEtBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFTLENBQUMsRUFBekIsY0FBeUIsRUFBekIsSUFBeUIsRUFBRTs0QkFBOUMsV0FBZSxFQUFkLE1BQU0sUUFBQSxFQUFFLGVBQUs7NEJBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQy9DO3dCQUVHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU5QixRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozt3QkFHaEQsTUFBTSxHQUFJLE1BQWMsQ0FBQyxNQUFNLENBQUM7d0JBQ3BDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUN2QixVQUFVLEVBQ1YsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7NkJBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsNkJBQTZCLEVBQWxELHdCQUFrRDt3QkFDdkMsS0FBQSxRQUFRLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQTt3QkFBSSxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE5RSxRQUFRLEdBQUcsS0FBK0MsQ0FBQyxTQUFtQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OzRCQUV0RyxzQkFBTyxRQUFRLEVBQUM7Ozs7S0FDbkI7SUFDTCxpQkFBQztBQUFELENBQUM7O0FDcEZEO0lBQStCLDZCQUFVO0lBRXJDLG1CQUFZLE1BQW1CO1FBQS9CLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBV2hCO1FBVEcsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBNEIsQ0FBQztRQUM1RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkMsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDdkIsS0FBSSxDQUFDLEdBQUcsR0FBRzJFLEdBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxTQUFTO2FBQ3BELENBQUMsQ0FBQztTQUNOOztLQUNKO0lBRUssMEJBQU0sR0FBWjs7Ozs7Ozt3QkFLSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFoQyxNQUFNLEdBQUcsU0FBdUI7d0JBQ3RDLHNCQUFPO2dDQUNILE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7b0NBQ3hCLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ2xDLE9BQU8sQ0FBQyxDQUFDO2lDQUNaLENBQUM7Z0NBQ0YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0NBQzNDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzZCQUN0RCxFQUFDOzs7O0tBQ0w7O0lBR0QsK0JBQVcsR0FBWCxVQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFSyw2QkFBUyxHQUFmLFVBQWdCLE9BQWdCOzs7Ozs7OzZCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBckMsd0JBQXFDO3dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ25DLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQyxHQUFHLEVBQUMsU0FBUyxDQUFBOzhCQUFFLFNBQVMsRUFBRSxhQUFhOzs4QkFBZ0YsT0FBTyxhQUFQLE9BQU87d0JBQVAsS0FBQSxPQUFPLENBQUE7OzRCQUFJLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOzt3QkFBaEMsS0FBQSxTQUFnQyxDQUFBOzs0QkFBN0sscUJBQU0seUJBQThDLG9CQUFnSSxJQUFHLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxFQUFDLEVBQUE7O3dCQUF2TixTQUF1TixDQUFDOzs7d0JBRTVOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ2QsS0FBSyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUN6QyxFQUFBOzt3QkFGRCxTQUVDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUUzQixLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQTs4QkFBQyxPQUFPLGFBQVAsT0FBTzt3QkFBUCxLQUFBLE9BQU8sQ0FBQTs7NEJBQUkscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUFoQyxLQUFBLFNBQWdDLENBQUE7OzRCQUFqRSxxQkFBTSxrQkFBNEQsRUFBQTs2QkFBMUUsc0JBQU8sQ0FBQyxTQUFrRSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUM7Ozs7S0FDL0Y7SUFFSyx3QkFBSSxHQUFWOzs7Ozs7O3dCQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQXJDLHdCQUFxQzt3QkFDckMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBM0csU0FBMkcsQ0FBQzs7NEJBRTdGLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQ2xELFVBQU8sR0FBaUI7Ozs7OzZDQUNoQixHQUFHLEVBQUgsd0JBQUc7d0NBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWUsR0FBRyxDQUFDLE9BQVMsQ0FBQyxDQUFDO3dDQUN4QyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3Q0FBaEMsV0FBUyxTQUF1Qjt3Q0FDdEMsSUFBSSxRQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NENBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzt5Q0FDakQ7Ozs7OzZCQUVSLENBQ0osRUFBQTs7d0JBVkssVUFBVSxHQUFHLFNBVWxCO3dCQUVELHNCQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDOzs7O0tBQ2xDO0lBRUssd0JBQUksR0FBVjs7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFoQyxNQUFNLEdBQUcsU0FBdUI7d0JBQ2hDLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUNqQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFBOzt3QkFBakYsa0JBQWtCLEdBQUcsQ0FBQyxTQUEyRCxFQUFFLE9BQU87d0JBRWhHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQXJDLHdCQUFxQzt3QkFDckMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLHVCQUFNLE9BQU8sQ0FBQyxHQUFHLEtBQUUsY0FBYyxFQUFFLENBQUMsSUFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsaUxBQTZLLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBL1MsU0FBK1MsQ0FBQzs7NEJBR3BULHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyx1QkFBTSxPQUFPLENBQUMsR0FBRyxLQUFFLGNBQWMsRUFBRSxDQUFDLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFBQTs7d0JBQS9GLFNBQStGLENBQUM7d0JBRWhHLHNCQUFPLGtCQUFrQixFQUFDOzs7O0tBQzdCO0lBR0ssMkJBQU8sR0FBYjs7Ozs7Ozs7d0JBRUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7NEJBQ2hELHNCQUFPLElBQUksRUFBQzt5QkFDZjt3QkFDYyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBL0QsTUFBTSxHQUFHLFNBQXNEO3dCQUMvRCxjQUFjLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDakMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQ1QscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBQTs7d0JBQWpGLGtCQUFrQixHQUFHLENBQUMsU0FBMkQsRUFBRSxPQUFPO3dCQUVoRyxzQkFBTyxrQkFBa0IsS0FBSyxDQUFDLEVBQUM7Ozs7S0FDbkM7SUFFSyxxQ0FBaUIsR0FBdkI7Ozs7O3dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7NEJBQ3hCLHNCQUFPLGFBQWEsRUFBQzt5QkFDeEI7d0JBQ0sscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQWxDLElBQUksRUFBRSxTQUE0QixDQUFDLEVBQUU7NEJBQ2pDLHNCQUFPLGNBQWMsRUFBQzt5QkFDekI7d0JBQ0Qsc0JBQU8sT0FBTyxFQUFDOzs7O0tBQ2xCO0lBRUssOEJBQVUsR0FBaEI7Ozs7Ozs0QkFDbUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFBQTs7d0JBQS9ELE1BQU0sR0FBRyxTQUFzRDt3QkFDcEQscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBakYsUUFBUSxHQUFHLFNBQXNFO3dCQUV2RixzQkFBTztnQ0FDSCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0NBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQ0FDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHOzZCQUN6QixFQUFDOzs7O0tBQ0w7SUFFSyw0QkFBUSxHQUFkLFVBQWUsTUFBYzs7Ozs7NEJBQ3pCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBaEUsU0FBZ0UsQ0FBQzs7Ozs7S0FDcEU7SUFFSyx3QkFBSSxHQUFWOzs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFBQTs7d0JBQTNELFNBQTJELENBQUM7Ozs7O0tBQy9EO0lBRUsseUJBQUssR0FBWCxVQUFZLEdBQVcsRUFBRSxHQUFXOzs7Ozs0QkFDaEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFQyxlQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQTZCLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUEzSSxTQUEySSxDQUFDOzs7OztLQUMvSTtJQUVLLDZCQUFTLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEtBQVU7Ozs7OzRCQUNwQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUF0RSxTQUFzRSxDQUFDOzs7OztLQUMxRTtJQUVLLDZCQUFTLEdBQWYsVUFBZ0IsSUFBWTs7Ozs7OzRCQUNULHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUFuRSxNQUFNLEdBQUcsU0FBMEQ7d0JBQ3pFLHNCQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Ozs7S0FDM0I7SUFFSyx5QkFBSyxHQUFYLFVBQVksTUFBZTs7Ozs7NEJBQ3ZCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFBQTs7d0JBQTFGLFNBQTBGLENBQUM7Ozs7O0tBQzlGO0lBRUssNkJBQVMsR0FBZixVQUFnQixJQUFZLEVBQUUsR0FBVzs7Ozs7NEJBQ2hDLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7NkJBQXhCLENBQUMsU0FBdUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQXhDLHdCQUF3Qzt3QkFDeEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUE5RSxTQUE4RSxDQUFDOzs0QkFHL0UscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUExRSxTQUEwRSxDQUFDOzs7Ozs7S0FFbEY7SUFFSyxxQ0FBaUIsR0FBdkIsVUFBd0IsTUFBYzs7Ozs7OzRCQUN0QixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUssTUFBTSxNQUFHLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBNUYsR0FBRyxHQUFHLFNBQXNGO3dCQUM1RixJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNoQixLQUFTLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFOzRCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3RDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRUssOEJBQVUsR0FBaEI7Ozs7Ozs0QkFDZ0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQUE7O3dCQUFoRSxHQUFHLEdBQUcsU0FBMEQ7d0JBQ3RFLElBQUksR0FBRyxFQUFFOzRCQUNMLHNCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUM7eUJBQ2pDOzZCQUFNOzRCQUNILHNCQUFPLEVBQUUsRUFBQzt5QkFDYjs7OztLQUNKO0lBRUssZ0NBQVksR0FBbEIsVUFBbUIsVUFBa0I7Ozs7NEJBQ2pDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzs7Ozs7S0FDM0M7SUFFSyx3Q0FBb0IsR0FBMUIsVUFBMkIsWUFBb0I7Ozs7OzRCQUMzQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQUUsZ0JBQWdCLEdBQUssWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFBOzt3QkFBcEcsU0FBb0csQ0FBQzs7Ozs7S0FFeEc7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsT0FBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDO0lBRU8sa0NBQWMsR0FBdEI7O1FBRUksSUFBTSxPQUFPLEdBQUdDLHlCQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDNUMsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBRU8sMkJBQU8sR0FBZixVQUFnQixLQUFtQjtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztLQUNKO0lBQ0wsZ0JBQUM7QUFBRCxDQWpOQSxDQUErQixVQUFVOztBQ2tCekMsSUFBTSxnQkFBZ0IsR0FBd0I7SUFDMUMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxnQkFBZ0IsRUFBRSxxQkFBcUI7SUFDdkMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLDZCQUE2QixFQUFFLEtBQUs7SUFDcEMsYUFBYSxFQUFFLElBQUk7SUFDbkIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixPQUFPLEVBQUUsRUFBRTtDQUNkLENBQUM7O0lBRXVDLCtCQUFNO0lBQS9DO1FBQUEscUVBdWFDO1FBL1pHLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCx3QkFBa0IsR0FBRyxnQ0FBZ0MsQ0FBQzs7S0E2WnpEO0lBM1pHLDhCQUFRLEdBQVIsVUFBUyxLQUFrQjs7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsTUFBQSxJQUFJLENBQUMsU0FBUywwQ0FBRSxPQUFPLEVBQUUsQ0FBQztLQUM3QjtJQUVLLDRCQUFNLEdBQVo7Ozs7Ozs7d0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7d0JBQ3pELHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBRTFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRS9ELElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ1osRUFBRSxFQUFFLE1BQU07NEJBQ1YsSUFBSSxFQUFFLDZCQUE2Qjs0QkFDbkMsUUFBUSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUEsQ0FBQyxHQUFBO3lCQUNoRixDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixFQUFFLEVBQUUsTUFBTTs0QkFDVixJQUFJLEVBQUUsZUFBZTs0QkFDckIsUUFBUSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLEdBQUE7eUJBQzVFLENBQUMsQ0FBQzt3QkFFSCxJQUFJLENBQUMsVUFBVSxDQUFDOzRCQUNaLEVBQUUsRUFBRSxjQUFjOzRCQUNsQixJQUFJLEVBQUUsY0FBYzs0QkFDcEIsUUFBUSxFQUFFO2dDQUFZLHNCQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTtxQ0FBQTt5QkFDM0MsQ0FBQyxDQUFDO3dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ1osRUFBRSxFQUFFLGVBQWU7NEJBQ25CLElBQUksRUFBRSxlQUFlOzRCQUNyQixRQUFRLEVBQUU7Z0NBQVksc0JBQUEsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBO3FDQUFBO3lCQUM1QyxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixFQUFFLEVBQUUsV0FBVzs0QkFDZixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QixRQUFRLEVBQUU7Z0NBQVksc0JBQUEsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFBO3FDQUFBO3lCQUM3QyxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixFQUFFLEVBQUUsWUFBWTs0QkFDaEIsSUFBSSxFQUFFLCtCQUErQjs0QkFDckMsUUFBUSxFQUFFO2dDQUFZLHNCQUFBLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTtxQ0FBQTt5QkFDNUMsQ0FBQyxDQUFDO3dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ1osRUFBRSxFQUFFLCtCQUErQjs0QkFDbkMsSUFBSSxFQUFFLHNDQUFzQzs0QkFDNUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxJQUFJLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFBO3lCQUN0RCxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixFQUFFLEVBQUUsb0JBQW9COzRCQUN4QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixRQUFRLEVBQUU7Ozs7Z0RBQ1MscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7NENBQXZDLE1BQU0sR0FBRyxTQUE4Qjs0Q0FDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7NENBRWhDLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztpQ0FDdEQ7eUJBQ0osQ0FBQyxDQUFDO3dCQUNILElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7NEJBRXpCLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBQSxFQUFFLElBQUksQ0FBQyxDQUMzRCxDQUFDO3lCQUNMO3dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQzs7Ozs7S0FFdkQ7SUFFSyw4QkFBUSxHQUFkOzs7Z0JBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQzs7OztLQUM5RDtJQUNLLGtDQUFZLEdBQWxCOzs7Ozs7d0JBQ0ksS0FBQSxJQUFJLENBQUE7d0JBQVksS0FBQSxDQUFBLEtBQUEsTUFBTSxFQUFDLE1BQU0sQ0FBQTs4QkFBQyxFQUFFLEVBQUUsZ0JBQWdCO3dCQUFFLHFCQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXpFLEdBQUssUUFBUSxHQUFHLHdCQUFvQyxTQUFxQixHQUFDLENBQUM7Ozs7O0tBQzlFO0lBQ0ssa0NBQVksR0FBbEI7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFDOzs7OztLQUN0QztJQUVLLGtDQUFZLEdBQWxCLFVBQW1CLElBQVUsRUFBRSxJQUF1Qjs7O2dCQUNsRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ25CLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RjtxQkFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDcEY7Ozs7S0FDSjtJQUVLLGtDQUFZLEdBQWxCOzs7O2dCQUNJLHNCQUFPO3dCQUNILFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFBLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDLG1DQUFJLEVBQUUsQ0FBQzt3QkFDM0YsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQUEsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDLG1DQUFJLEVBQUUsQ0FBQztxQkFDMUYsRUFBQzs7O0tBQ0w7SUFFSywwQkFBSSxHQUFWOzs7Ozs7Ozt3QkFFUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV2QixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsRCxNQUFNLEdBQUcsU0FBeUM7d0JBQ2hELEtBQUEsTUFBTSxDQUFBOztpQ0FDTCxhQUFhLEVBQWIsd0JBQWE7aUNBR2IsY0FBYyxFQUFkLHdCQUFjO2lDQUdkLE9BQU8sRUFBUCx3QkFBTzs7Ozt3QkFMUixJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQzVDLHdCQUFNOzt3QkFFTixJQUFJcEYsZUFBTSxDQUFDLDZFQUE2RSxDQUFDLENBQUM7d0JBQzFGLHdCQUFNOzt3QkFFTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWhDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7NEJBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBQSxDQUFDLENBQUM7eUJBQ2pFO3dCQUNpQixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUFyQyxTQUFTLEdBQUcsU0FBeUI7d0JBRTNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7NEJBQzlCLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzRCQUVqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDdkgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzt5QkFDOUM7d0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLENBQUMsRUFBRTs0QkFDOUIsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7NEJBRWpCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNySCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO3lCQUM1Qzt3QkFDRCx3QkFBTTs7d0JBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsR0FBRyxNQUFNLENBQUMsQ0FBQzs7Ozs7d0JBSTdGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBSyxDQUFDLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7OztLQUU1QjtJQUVLLG1DQUFhLEdBQW5COzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixTQUE0QixDQUFDO3dCQUM3QixJQUFJQSxlQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7Ozs7S0FDdEM7SUFFSyxrQ0FBWSxHQUFsQjs7Ozs7O3dCQUNVLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNyRCxxQkFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixHQUFHLEdBQUcsU0FBa0I7NkJBQzFCLEdBQUcsRUFBSCx3QkFBRzt3QkFDTyxxQkFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxrRUFBa0UsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBckgsR0FBRyxHQUFHLFNBQStHOzZCQUNySCxHQUFHLEVBQUgsd0JBQUc7d0JBQ0gsR0FBRyxHQUFHbUYsZUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsSUFBSW5GLGVBQU0sQ0FBQyw2QkFBMEIsR0FBRyxPQUFHLENBQUMsQ0FBQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFBOzt3QkFBckMsU0FBcUMsQ0FBQzt3QkFDdEMsSUFBSUEsZUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7OztLQUd6Qzs7Ozs7SUFNSyxzQ0FBZ0IsR0FBdEI7Ozs7OzZCQUNRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBZCx3QkFBYzt3QkFDZCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFqQixTQUFpQixDQUFDOzs0QkFFdEIsc0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQzs7OztLQUN4QjtJQUVLLDJDQUFxQixHQUEzQjs7Ozs7NEJBRVMscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFsQyxJQUFJLEVBQUMsU0FBNkIsQ0FBQTs0QkFBRSxzQkFBTzt3QkFFdEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQTNDLFlBQVksR0FBRyxTQUE0Qjt3QkFDakQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLHlCQUF1QixZQUFZLG1CQUFnQixDQUFDLENBQUM7eUJBQzVFOzZCQUFNOzRCQUNILElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt5QkFDbkQ7OEJBRUcsSUFBSSxDQUFDLFVBQVUsWUFBWSxTQUFTLENBQUEsRUFBcEMsd0JBQW9DO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBdkMsV0FBUyxTQUE4Qjt3QkFDN0MsSUFBSSxRQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBWSxRQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sb0JBQWlCLENBQUMsQ0FBQzt5QkFDNUU7Ozt3QkFHTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ25DO0lBRUssa0NBQVksR0FBbEIsVUFBbUIsY0FBdUIsRUFBRSxhQUFzQjs7Ozs7NEJBQ3pELHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBbEMsSUFBSSxFQUFDLFNBQTZCLENBQUE7NEJBQUUsc0JBQU87NkJBR3ZDLENBQUMsY0FBYyxFQUFmLHdCQUFlO3dCQUNULElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDM0UscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBakMsU0FBaUMsQ0FBQzs7OzhCQUVsQyxJQUFJLENBQUMsVUFBVSxZQUFZLFNBQVMsQ0FBQSxFQUFwQyx3QkFBb0M7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUF2QyxXQUFTLFNBQThCOzt3QkFHN0MsSUFBSSxjQUFjLElBQUksUUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQ0FBb0MsUUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLGlFQUE4RCxDQUFDLENBQUM7NEJBQzlJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN2QyxzQkFBTzt5QkFDVjs7NEJBR2lCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE5QyxZQUFZLEdBQUcsQ0FBQyxTQUE4QixFQUFFLE9BQU87OEJBRXpELFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFBLEVBQXpCLHdCQUF5Qjt3QkFDSCxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBQTs7d0JBQTlELGFBQWEsR0FBRyxTQUE4Qzt3QkFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFhLGFBQWEsV0FBUSxDQUFDLENBQUM7Ozt3QkFFeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzs7NkJBRzVDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQTFCLHlCQUEwQjt3QkFDcEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7NkJBQXBDLENBQUMsQ0FBQyxTQUFrQyxFQUFFLFFBQVEsRUFBOUMseUJBQThDO3dCQUM5QyxJQUFJQSxlQUFNLENBQUMsK0NBQStDLENBQUMsQ0FBQzt3QkFDdkMscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUE7O3dCQUE5QyxZQUFZLEdBQUcsU0FBK0I7OEJBRWhELFlBQVksSUFBSSxTQUFTLENBQUEsRUFBekIseUJBQXlCO3dCQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsc0JBQU87NkJBRVAscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQXhELFNBQXdELENBQUM7OzZCQU03RCxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFBOzs2QkFBL0IsU0FBK0IsRUFBL0IseUJBQStCOzZCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBNUIseUJBQTRCO3dCQUNGLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFoRCxpQkFBaUIsR0FBRyxTQUE0Qjt3QkFDdEQsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBVSxpQkFBaUIsdUJBQW9CLENBQUMsQ0FBQzt5QkFDeEU7Ozt3QkFLRCxLQUFBLElBQUksQ0FBQyxVQUFVLFlBQVksU0FBUyxDQUFBO2lDQUFwQyx5QkFBb0M7d0JBQWMscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQXhDLEtBQUEsQ0FBQyxRQUFNLEdBQUcsU0FBOEIsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTs7O2lDQUF2Ryx5QkFBdUc7d0JBQ3ZHLElBQUksQ0FBQyxZQUFZLENBQUMsMkJBQXlCLFFBQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxvQkFBaUIsQ0FBQyxDQUFDO3dCQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDdkMsc0JBQU87NkJBRWEscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQTFDLFdBQVcsR0FBRyxTQUE0Qjt3QkFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBVSxXQUFXLHFCQUFrQixDQUFDLENBQUM7Ozs7d0JBR2pFLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7O3dCQUdsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7S0FDbkM7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLE9BQWdCO1FBQWhDLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUNwQztZQUNJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQixFQUNELENBQUMsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQ3RELENBQUM7S0FDTDtJQUVELG1DQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUE5QixpQkFVQztRQVRHLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FDbEM7WUFDSSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUEsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCLEVBQ0QsQ0FBQyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FDdEQsQ0FBQztLQUNMO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVLLG9DQUFjLEdBQXBCLFVBQXFCLFVBQW9COzs7OztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hDLEtBQUs7b0JBQ1Asa0JBQWtCO29CQUNsQiwyRkFBMkY7bUJBQ3hGLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO29CQUNmLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLElBQUksWUFBWXFGLGNBQUssRUFBRTt3QkFDdkIsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDOUQsT0FBTyxTQUFPLElBQUksT0FBSSxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDSCxPQUFPLG1CQUFpQixDQUFHLENBQUM7cUJBQy9CO2lCQUNKLENBQUMsQ0FDTCxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7S0FDM0M7SUFFSyxpQ0FBVyxHQUFqQjs7Ozs7NEJBQ1MscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFsQyxJQUFJLEVBQUMsU0FBNkIsQ0FBQTs0QkFBRSxzQkFBTzt3QkFFM0IscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQTVDLE9BQU8sR0FBRyxTQUFrQzt3QkFFNUMsU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLG1FQUFtRSxDQUFDLENBQUM7d0JBQ3hHLHFCQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQW5DLFVBQVUsR0FBRyxTQUFzQjs2QkFFckMsVUFBVSxFQUFWLHdCQUFVO3dCQUNKLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO3dCQUN0RCxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFqQyxTQUFTLEdBQUcsU0FBcUI7d0JBQ3ZDLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBQTs7d0JBQXRELFNBQXNELENBQUM7d0JBQ3ZELHNCQUFPLFVBQVUsRUFBQzs7Ozs7S0FHekI7SUFFSyx3Q0FBa0IsR0FBeEI7Ozs7OzRCQUNrQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBNUMsT0FBTyxHQUFHLFNBQWtDOzhCQUU1QyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQSxFQUFwQix3QkFBb0I7d0JBQ0gscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBekMsY0FBYyxHQUFHLFNBQXdCLENBQUM7OEJBQ3RDLGNBQWMsSUFBSSxTQUFTLENBQUEsRUFBM0Isd0JBQTJCO3dCQUNqQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBNUMsT0FBTyxHQUFHLFNBQWtDLENBQUM7Ozt3QkFJL0MsU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLG1FQUFtRSxDQUFDLENBQUM7OEJBQ3hHLGNBQWMsYUFBZCxjQUFjO3dCQUFkLEtBQUEsY0FBYyxDQUFBOzs0QkFBSSxxQkFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF0QixLQUFBLFNBQXNCLENBQUE7Ozt3QkFBckQsVUFBVSxLQUEyQzs2QkFFdkQsVUFBVSxFQUFWLHlCQUFVO3dCQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDaEQscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFDO3dCQUN2QixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBOUQsUUFBUSxHQUFHLFNBQW1EO3dCQUM5RCxXQUFXLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsMEVBQTBFLENBQUMsQ0FBQzt3QkFDOUgscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxFQUFBOzZCQUEvQixzQkFBTyxTQUF3QixFQUFDOzs7OztLQUV2QztJQUVLLGtDQUFZLEdBQWxCOzs7Ozs0QkFDUyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQWxDLElBQUksRUFBQyxTQUE2QixDQUFBOzRCQUFFLHNCQUFPO3dCQUczQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBNUMsT0FBTyxHQUFHLFNBQWtDO3dCQUU1QyxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzt3QkFDdEQscUJBQU0sU0FBUyxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBbkMsVUFBVSxHQUFHLFNBQXNCO3dCQUV6QyxJQUFJLFVBQVUsRUFBRTs0QkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDNUM7Ozs7O0tBQ0o7SUFFSyxzQ0FBZ0IsR0FBdEIsVUFBdUIsSUFBWTs7Ozs7OzRCQUMvQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQWpFLFNBQWlFLENBQUM7d0JBRTlELG1CQUFtQixHQUFHLEtBQUssQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBQSxJQUFJOzRCQUNwQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRTtnQ0FDMUYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDOzZCQUM5Qjt5QkFDSixDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFOzRCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDdkU7Ozs7O0tBQ0o7O0lBR0Qsb0NBQWMsR0FBZCxVQUFlLE9BQWUsRUFBRSxPQUEwQjs7UUFBMUIsd0JBQUEsRUFBQSxVQUFrQixDQUFDLEdBQUcsSUFBSTtRQUN0RCxNQUFBLElBQUksQ0FBQyxTQUFTLDBDQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQzlCLElBQUlyRixlQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixPQUFTLENBQUMsQ0FBQztLQUNuRDtJQUNELGtDQUFZLEdBQVosVUFBYSxPQUFZLEVBQUUsT0FBbUI7O1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7O1FBRTFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSUEsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXVCLE9BQVMsQ0FBQyxDQUFDO1FBQzlDLE1BQUEsSUFBSSxDQUFDLFNBQVMsMENBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsRTtJQUNMLGtCQUFDO0FBQUQsQ0F2YUEsQ0FBeUNzRixlQUFNOzs7OyJ9
