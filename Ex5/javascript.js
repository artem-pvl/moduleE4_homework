class ElectricalDevice {
  constructor (power) {
    this.isPlugged = false
    this.power = power
  }

  plugIn () {
    this.isPlugged = true
  }

  plugOut () {
    this.isPlugged = false
  }
}

class Computer extends ElectricalDevice {
  constructor (type, power) {
    super(power)
    this.type = type
  }
}

class Lamp extends ElectricalDevice {
  constructor (power) {
    super(power)
    this.lightColour = 'white'
    this.ligthDimmer = 0
  }

  setColour (colour) {
    this.lightColour = colour
  }

  setDim (dim) {
    this.ligthDimmer = dim
  }
}

class Iron extends ElectricalDevice {
  constructor (power) {
    super(power)
  }

  setPower (power) {
    super.power = power
  }
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
