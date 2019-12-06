import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe("App Component :", () => {

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations :      [AppComponent],
      providers :         [DataService]
    }).compileComponents();
  })

  let fixture;
  let app;
  let dataService : DataService;
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    dataService = new DataService();
    fixture.detectChanges();
  })

  it("Should populate person from dataService", () => {
    const person = dataService.getName();
    expect(app.person.name).toEqual(person.name);
  })

  it("Should create the component", () =>{
    expect(app).toBeTruthy();
  })

  it("Should have user name 'Foo'", () => {
    expect(app.user.name).toEqual("Foo");
  })

  it("Should render username on template", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain("Hello Foo!");
  })

  it("Should be truthy", () => {
    expect(true).toBeTruthy();
  })

  it("one should be one", () => {
    expect(1).toEqual(1);
  })
})
