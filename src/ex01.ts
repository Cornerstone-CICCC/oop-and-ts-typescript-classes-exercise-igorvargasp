/**
 * Exercise 1: Access Modifiers
 *
 * Instructions:
 * - Create a class `Smartphone` with:
 *   - public property: `brand` (string)
 *   - private property: `batteryLevel` (number, 0-100)
 *   - protected property: `os` (string)
 * - Methods:
 *   - `charge(amount: number)` increases batteryLevel but max 100
 *   - `showInfo()` logs brand, batteryLevel, and os
  * - Create a subclass `AndroidPhone` with a method of upgradeOS that accepts a string parameter and updates the `os` property with that parameter.
 */

class Smartphone {
  public brand: string;
  private batteryLevel: number;
  protected os: string;

  constructor(brand: string, batteryLevel: number, os: string) {
    this.brand = brand;
    this.batteryLevel = batteryLevel;
    this.os = os;
  }

  charge(amount: number): void {
    this.batteryLevel = Math.min(this.batteryLevel + amount, 100);
  }

  showInfo(): void {
    console.log(`${this.brand}, Battery: ${this.batteryLevel}%, OS: ${this.os}`);
  }
}

class AndroidPhone extends Smartphone {
  upgradeOS(os: string): void {
    this.os = os;
  }
}

// Driver code
const phone = new AndroidPhone("Samsung", 50, "Android 12");
phone.charge(30);
phone.upgradeOS("Android 13");
phone.showInfo(); // Samsung, Battery: 80%, OS: Android 13