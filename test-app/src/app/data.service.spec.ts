import { DataService } from "./data.service"

describe("Data Service :", () => {

  let dataService: DataService;
  beforeEach(() => {
    dataService = new DataService();
  })
  it("Should have person name 'Person Name'", () => {
    expect(dataService.person.name).toEqual("Person Name");
  })

  it("Should return the value Person Object Name", () => {
    const person = dataService.getName();
    expect(person.name).toEqual("Person Name");
  })

})
