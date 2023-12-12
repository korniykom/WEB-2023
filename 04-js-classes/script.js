// Крок1 створення об'єкту
let TravelFirm = {
  name: "Турфірма",
  address: "High-Street",
  phone: "123",
};
// Крок2 створення об'єкту
let Ticket = {
  city: "City",
  price: 100,
  dayAmount: 5,

  calculateTravelCost: function () {
    return this.price * this.dayAmount;
  },
  changePrice: function (newPrice) {
    this.price = newPrice;
    return newPrice;
  },
  show: function () {
    console.log(
      `Місто:${this.city} Ціна:${this.price} Кількість днів ${this.dayAmount}`
    );
  },
};
// Крок3 об'єднання властивостей і методів об'єктів TravelFirm i Ticket
let TravelFirm_Ticket = Object.assign({}, TravelFirm, Ticket);
// Крок4 додавання методу show в прототип об'єкту- TravelFirm
TravelFirm.__proto__.show = function () {
  console.log(`Ім'я:${this.name} Адрес:${this.address} Телефон ${this.phone}`);
};
//Крок 5 Створення об'єкту відділ
let Department = Object.create(TravelFirm);
Department.address = "адрес";
Department.show = function () {
  console.log(
    `Ім'я:${this.name} Адрес відділу:${this.address} Телефон ${this.phone}`
  );
};
//Крок6 Реалізація класів TravelFirmClass та DepartmentClass з використанням getter і setter
class TravelFirmClass {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }
  get phone() {
    return this._phone;
  }
  set phone(value) {
    this._phone = value;
  }
  show() {
    console.log(
      `Ім'я:${this.name} Адрес:${this.address} Телефон ${this.phone}`
    );
  }
}
class DepartmentClass extends TravelFirmClass {
  constructor(name, address, phone, departmentAddress) {
    super(name, address, phone);
    this.departmentAddress = departmentAddress;
  }
  get departmentAddress() {
    return this._departmentAddress;
  }
  set departmentAddress(value) {
    this._departmentAddress = value;
  }
  show() {
    console.log(
      `Ім'я:${this.name} Адрес:${this.address} Телефон ${this.phone} адреса відділу ${this.departmentAddress}`
    );
  }
}
const DemonstrateButton = () => {
  console.log("Крок 1");
  console.log(TravelFirm);

  console.log("Крок 2");
  console.log(Ticket);
  console.log("Вартість путівки " + Ticket.calculateTravelCost());
  console.log("Нова ціна: " + Ticket.changePrice(50));
  Ticket.show();

  console.log("Крок 3");
  console.log(TravelFirm_Ticket);

  console.log("Крок 4");
  TravelFirm.show();

  console.log("Крок 5");
  Department.show();

  console.log("Крок 6");
  let firm = new TravelFirmClass("SuperFirm", "вулиця", 123456);
  firm.show();

  let department = new DepartmentClass(
    "Відділ",
    "адрес",
    1234896575,
    "адрес відділу"
  );
  department.show();
};
const clickableButton = document
  .getElementById("demonstrate-button")
  .addEventListener("click", DemonstrateButton);
