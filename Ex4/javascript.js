function ElectricalDevice (power) {
  this.isPlugged = false
  this.power = power
  this.plugIn = () => {
    this.isPlugged = true
  }
  this.plugOut = () => {
    this.isPlugged = false
  }
}

function Computer (type, power) {
  ElectricalDevice.call(this, power)
  this.type = type
}
Computer.prototype = new ElectricalDevice()

function Lamp (power) {
  ElectricalDevice.call(this, power)
  this.lightColour = 'white'
  this.ligthDimmer = 0
}
Lamp.prototype = new ElectricalDevice()
Lamp.prototype.setColour = function (colour) {
  this.lightColour = colour
}
Lamp.prototype.setDim = function (dim) {
  this.ligthDimmer = dim
}

function Iron (power) {
  ElectricalDevice.call(this, power)
}
Iron.prototype = new ElectricalDevice()
Iron.prototype.setPower = function (power) {
  this.power = power
}

const computerLaptop = new Computer('laptop', 300)
const computerDesktop = new Computer('desktop', 800)
const lamp = new Lamp(100)
const iron = new Iron(1000)

const allDevices = [computerDesktop, computerLaptop, lamp, iron]

iron.plugIn()
iron.setPower(1500)
computerDesktop.plugIn()
lamp.setDim(5)

let powerSum = 0
for (const device of allDevices) {
  console.log(device)
  if (device.isPlugged) {
    powerSum += device.power
  }
}
console.log(powerSum)
