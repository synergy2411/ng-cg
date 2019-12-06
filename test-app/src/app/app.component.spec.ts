import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe("App Component :", () => {

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations :      [AppComponent]
    }).compileComponents();
  })

  let fixture;
  let app;

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
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
