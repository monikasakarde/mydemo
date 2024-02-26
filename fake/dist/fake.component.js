"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
exports.FakeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require("ng2-file-upload");
var URL = 'https://serverengg.oceansofttech.net/api/zion/UPLOAD';
var FakeComponent = /** @class */ (function () {
    function FakeComponent(mainService, fb) {
        this.mainService = mainService;
        this.fb = fb;
        this.MoObj = {};
        this.ApiResult = {};
        this.dataSource = [];
        this.row = [];
        this.isLoading = false;
        this.listOpen = false;
        this.Token = localStorage.getItem("auth_token");
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: URL,
            itemAlias: "photo",
            authToken: "Bearer " + this.Token,
            additionalParameter: {
                PkSystemUploadDocSetting: '{"IsCipher":"1","ApplicationId":"1010","PkSystemUploadDocSetting":1}'
            }
        });
        this.config = {
            uiColor: "#F08FF4"
        };
    }
    FakeComponent.prototype.toggleList = function () {
        this.listOpen = !this.listOpen;
    };
    //  public async addItem():Promise<void>{
    //   this.dataSource.push(this.loginForm.value);
    //   this.loginForm.reset();
    // }
    FakeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(""),
            name: new forms_1.FormControl(""),
            address: new forms_1.FormControl(""),
            email: new forms_1.FormControl(""),
            date: new forms_1.FormControl(""),
            Photoctr: new forms_1.FormControl(""),
            description: new forms_1.FormControl("")
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            debugger;
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.str = response;
            _this.ImageResult1 = _this.str.replace("\"", "");
            _this.str = response;
            _this.ImageResult1 = _this.str.replace("\"", "");
            _this.ImageResult1 = _this.ImageResult1.replace("{'Result': '1','FileName':'", "");
            _this.ImageResult1 = _this.ImageResult1.replace(",'}", "");
            _this.loginForm.controls['Photoctr'].setValue(_this.ImageResult1);
            alert("Image Uploded Successfully!");
        };
    };
    FakeComponent.prototype.Test_Insert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handlePromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        this.data1 = this.uploader.uploadAll();
                        handlePromise = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve(_this.data1);
                            }, 2000);
                        });
                        return [4 /*yield*/, handlePromise];
                    case 1:
                        _a.sent();
                        this.isLoading = true;
                        this.uploader.uploadAll();
                        this.MoObj.Pid = "e37cc0de-9189-4e1e-bcae-132ad349dee4"; //insert
                        this.MoObj.Name = this.loginForm.value.name;
                        this.MoObj.Address = this.loginForm.value.address;
                        this.MoObj.Email = this.loginForm.value.email;
                        this.MoObj.DOB = this.loginForm.value.date;
                        this.MoObj.PhotoPath = this.ImageResult1;
                        this.MoObj.Info = this.loginForm.value.description;
                        this.mainService.TwoMethod(this.MoObj).then(function (value) {
                            _this.ApiResult = value;
                            console.log(_this.ApiResult);
                            _this.dataSource = _this.ApiResult.table;
                            _this.isLoading = false;
                            alert(JSON.stringify(_this.dataSource));
                        });
                        this.uploader.uploadAll();
                        this.Test_Select_List_PK();
                        this.reset();
                        return [2 /*return*/];
                }
            });
        });
    };
    FakeComponent.prototype.reset = function () {
        this.loginForm.reset();
    };
    FakeComponent.prototype.Test_Select_List_PK = function () {
        var _this = this;
        debugger;
        this.isLoading = true;
        this.MoObj.PkTest = 0; //expenses form li select ki pid hai.
        this.MoObj.Pid = "047063bf-7e9b-4300-8db1-c6ec330fe9b1";
        this.mainService.TwoMethod(this.MoObj).then(function (value) {
            _this.ApiResult = value;
            _this.dataSource = _this.ApiResult.table;
            _this.isLoading = false;
            console.log(_this.ApiResult);
        });
    };
    FakeComponent.prototype.RowSelected = function (u) {
        //alert(JSON.stringify(u));
        this.loginForm.controls["id"].setValue(u.pkTest); // [controlname](u.consolename)
        this.loginForm.controls["name"].setValue(u.name);
        this.loginForm.controls["address"].setValue(u.address);
        this.loginForm.controls["email"].setValue(u.email);
        this.loginForm.controls["date"].setValue(u.dob);
        this.loginForm.controls["description"].setValue(u.info);
        // window.scroll({
        //this.scrollToTop();
    };
    FakeComponent.prototype.Test_Update = function () {
        var _this = this;
        this.MoObj.Pid = "4c076f75-9452-4e5f-ab8a-cb752070c60b";
        this.MoObj.PkTest = this.loginForm.value.id;
        this.MoObj.Name = this.loginForm.value.name;
        this.MoObj.Address = this.loginForm.value.address;
        this.MoObj.Email = this.loginForm.value.email;
        this.MoObj.DOB = this.loginForm.value.date;
        this.MoObj.PhotoPath = this.loginForm.value.Photoctr;
        this.MoObj.Info = this.loginForm.value.description;
        this.mainService.TwoMethod(this.MoObj).then(function (value) {
            var _a;
            _this.ApiResult = value;
            console.log(_this.ApiResult);
            var spResultValue = (_a = _this.ApiResult.table[0]) === null || _a === void 0 ? void 0 : _a.spResult;
            alert(spResultValue || 'Record update was successful');
        });
        this.Test_Select_List_PK();
        this.reset();
    };
    FakeComponent.prototype["delete"] = function (id) {
        var _this = this;
        console.log(JSON.stringify(id));
        if (confirm("Are you sure to delete")) {
            this.isLoading = true;
            this.MoObj.Pid = "d788e591-d39a-465d-86c2-9b549c1229d5 ";
            this.MoObj.PkTest = this.loginForm.value.id; // controlpk = console or database or post man pk
            this.mainService.TwoMethod(this.MoObj).then(function (value) {
                _this.ApiResult = value;
                alert("Record Deleted Successfully");
                _this.dataSource = _this.ApiResult.table;
                _this.isLoading = false;
                console.log(_this.ApiResult);
            });
            this.Test_Select_List_PK();
            this.reset();
        }
    };
    __decorate([
        core_1.ViewChild("fileInput")
    ], FakeComponent.prototype, "fileInput");
    FakeComponent = __decorate([
        core_1.Component({
            selector: 'app-fake',
            templateUrl: './fake.component.html',
            styleUrls: ['./fake.component.css']
        })
    ], FakeComponent);
    return FakeComponent;
}());
exports.FakeComponent = FakeComponent;
