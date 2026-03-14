from models import Dog, Cat 

a1 = Dog("Hachiko", 3, "Cream-white", "Akita Inu")
a2 = Cat("Murka", 4, "Gray", True)

animals = [a1, a2]

for animal in animals:
    print(animal)
    animal.eat()
    animal.makeSound()
