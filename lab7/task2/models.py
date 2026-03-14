class Animal: 
    def __init__(self, name, age, color):
        self.name = name 
        self.age = age 
        self.color = color
    
    def eat(self):
        print( "Animal eat")

    def makeSound(self):
        print("Animal make sound")
        
    def __str__(self):
        return f"Name: {self.name}, age: {self.age}, color: {self.color}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed 
    
    def eat(self):
        print("Dog eat meat")
    
    def makeSound(self):
        print("Gav Gav")

    def run(self):
        print("Dog run fast")


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor 
    
    def eat(self):
        print("Cat eat fish")
    
    def makeSound(self):
        print("Meow Meow")
    
    def sleep(self):
        print("Cat id sleeping")
