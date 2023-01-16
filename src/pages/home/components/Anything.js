class Human extends React{Component}

class Human{
    constructor(name, email, legs , eyes){
    this.name = name,
    this.email = email,
    this.legs = legs,
    this.eyes = eyes
    }


}


class Timothy extends Human{
    constructor(name, email, legs , eyes, address, hands){
        super(name, email, legs , eyes)
        this.address = address
        this.hands = hands
    }
}