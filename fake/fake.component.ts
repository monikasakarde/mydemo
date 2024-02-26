import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileUploadModule } from "ng2-file-upload";
import { Observable } from 'rxjs';

const URL = 'https://serverengg.oceansofttech.net/api/zion/UPLOAD';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
 
  MoObj: any = {};
  ApiResult: any = {};
  dataSource: any[] = [];
  Id: any;
  pkTest: any;
  Pktest: any;
  ImageResult1: any;
  row: any=[];
  data: any;
  item: any;
  scrollToTop: any;
  isLoading: boolean = false;
  id:any;
  listOpen: boolean = false;
  ImageResult: any;
  loginForm!: FormGroup;
  str: any;
  Token: any = localStorage.getItem("auth_token");
  @ViewChild("fileInput") fileInput: any;

  public uploader: FileUploader = new FileUploader({ 
    url: URL,
    itemAlias: "photo",
    authToken: `Bearer ${this.Token}`,
    additionalParameter: {
      PkSystemUploadDocSetting:
        '{"IsCipher":"1","ApplicationId":"1010","PkSystemUploadDocSetting":1}',
    },
  });
  data1: any;
 
 
  toggleList() {
    this.listOpen = !this.listOpen;
  }
 
  
constructor(private mainService: MainService, private fb: FormBuilder) { }

  //  public async addItem():Promise<void>{

  //   this.dataSource.push(this.loginForm.value);
  //   this.loginForm.reset();

  // }


  ngOnInit(): void {
  
    this.loginForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    date: new FormControl(""),
    Photoctr: new FormControl(""),
    description: new FormControl("")
  });
  this.uploader.onAfterAddingFile = (file: { withCredentials: boolean; }) => { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => { debugger
    console.log('ImageUpload:uploaded:', item, status, response);
    this.str = response;
    this.ImageResult1 = this.str.replace("\"", "");
    this.str = response;
    this.ImageResult1 = this.str.replace("\"", "");
    this.ImageResult1 = this.ImageResult1.replace("{'Result': '1','FileName':'", "");
    this.ImageResult1 = this.ImageResult1.replace(",'}", "");
    this.loginForm.controls['Photoctr'].setValue(this.ImageResult1);
    alert("Image Uploded Successfully!");

  };
}

  async Test_Insert() {
    this.isLoading = true;
    this.data1 = this.uploader.uploadAll();

    let handlePromise = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(this.data1);

      }, 2000)
    })

    
    await handlePromise
    this.isLoading = true;
    this.uploader.uploadAll();
    this.MoObj.Pid = "e37cc0de-9189-4e1e-bcae-132ad349dee4"; //insert
    this.MoObj.Name = this.loginForm.value.name;
    this.MoObj.Address = this.loginForm.value.address;
    this.MoObj.Email = this.loginForm.value.email;
    this.MoObj.DOB = this.loginForm.value.date;
    this.MoObj.PhotoPath = this.ImageResult1;
    this.MoObj.Info = this.loginForm.value.description;
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      console.log(this.ApiResult);
      this.dataSource = this.ApiResult.table;
      this.isLoading = false;
      alert(JSON.stringify(this.dataSource));
      
    });
    this.uploader.uploadAll() 
    this.Test_Select_List_PK();
    this.reset();
  }
  reset() {
    this.loginForm.reset();
  }
  Test_Select_List_PK() { debugger
    this.isLoading = true;
    this.MoObj.PkTest = 0; //expenses form li select ki pid hai.
    this.MoObj.Pid = "047063bf-7e9b-4300-8db1-c6ec330fe9b1";
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      this.dataSource = this.ApiResult.table;
      this.isLoading = false;
      console.log(this.ApiResult);
    });
  
}

RowSelected(u: any) {

  //alert(JSON.stringify(u));
  this.loginForm.controls["id"].setValue(u.pkTest); // [controlname](u.consolename)
  this.loginForm.controls["name"].setValue(u.name);
  this.loginForm.controls["address"].setValue(u.address);
  this.loginForm.controls["email"].setValue(u.email);
  this.loginForm.controls["date"].setValue(u.dob);
  this.loginForm.controls["description"].setValue(u.info);
  // window.scroll({

  //this.scrollToTop();
}
config = {
  uiColor: "#F08FF4",
};

Test_Update() {
  this.MoObj.Pid = "4c076f75-9452-4e5f-ab8a-cb752070c60b";
  this.MoObj.PkTest = this.loginForm.value.id;
  this.MoObj.Name = this.loginForm.value.name;
  this.MoObj.Address = this.loginForm.value.address;
  this.MoObj.Email = this.loginForm.value.email;
  this.MoObj.DOB = this.loginForm.value.date;
  this.MoObj.PhotoPath = this.loginForm.value.Photoctr;
  this.MoObj.Info = this.loginForm.value.description;
  this.mainService.TwoMethod(this.MoObj).then((value: any) => {
    this.ApiResult = value;
    console.log(this.ApiResult);
    const spResultValue = this.ApiResult.table[0]?.spResult;
  alert(spResultValue || 'Record update was successful');
  });
  this.Test_Select_List_PK();
  this.reset();
}

delete(id: any) {
  console.log(JSON.stringify(id));
  if (confirm("Are you sure to delete")) {
    this.isLoading = true;
    this.MoObj.Pid = "d788e591-d39a-465d-86c2-9b549c1229d5 ";
    this.MoObj.PkTest = this.loginForm.value.id; // controlpk = console or database or post man pk
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      alert("Record Deleted Successfully");
      this.dataSource = this.ApiResult.table;
      this.isLoading = false;
      console.log(this.ApiResult);
    });
    this.Test_Select_List_PK();
    this.reset();
  }
}
}







