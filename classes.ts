// ❌ Sin Principio de Responsabilidad Única
// type Gender = 'M' | 'F'

// class Person {
//   constructor(public name: string, public gender: Gender, public birthdate: Date) {}
// }

// class User extends Person {
//   public lastAccess: Date
//   constructor(public email: string, public role: string, name: string, gender: Gender, birthdate: Date) {
//     super(name, gender, birthdate)
//     this.lastAccess = new Date()
//   }

//   checkCredentials() {
//     return true
//   }
// }

// class UserSettings extends User {
//   constructor(
//     public workingDirectory: string,
//     public lastOpenFolder: string,
//     email: string,
//     role: string,
//     name: string,
//     gender: Gender,
//     birthdate: Date
//   ) {
//     super(email, role, name, gender, birthdate)
//   }
// }

// const userSettings = new UserSettings(
//   '/usr/home',
//   '/home',
//   'belu@google.com',
//   'admin',
//   'Belu',
//   'F',
//   new Date('1984-12-07')
// )

// ✅ Con Principio de Responsabilidad Única
// Priorizando la composición frente a la herencia (evitar los extends)
type Gender = 'M' | 'F'

interface PersonProps {
  name: string
  gender: Gender
  birthdate: Date
}

class Person {
  public name: string
  public gender: Gender
  public birthdate: Date

  constructor({ name, gender, birthdate }: PersonProps) {
    this.name = name
    this.gender = gender
    this.birthdate = birthdate
  }
}

interface UserProps {
  email: string
  role: string
}

class User {
  public lastAccess: Date
  public email: string
  public role: string

  constructor({ email, role }: UserProps) {
    this.lastAccess = new Date()
    this.email = email
    this.role = role
  }

  checkCredentials() {
    return true
  }
}

interface SettingsProps {
  workingDirectory: string
  lastOpenFolder: string
}

class Settings {
  public workingDirectory: string
  public lastOpenFolder: string

  constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
    this.workingDirectory = workingDirectory
    this.lastOpenFolder = lastOpenFolder
  }
}

interface UserSettingsProps {
  name: string
  gender: Gender
  birthdate: Date
  email: string
  role: string
  workingDirectory: string
  lastOpenFolder: string
}

// Composición de otras clases
class UserSettings {
  public person: Person
  public user: User
  public settings: Settings

  constructor({ name, birthdate, gender, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps) {
    this.person = new Person({ name, gender, birthdate })
    this.user = new User({ email, role })
    this.settings = new Settings({ lastOpenFolder, workingDirectory })
  }
}

const userSettings = new UserSettings({
  workingDirectory: '/usr/home',
  lastOpenFolder: '/home',
  email: 'belu@google.com',
  role: 'admin',
  name: 'Belu',
  gender: 'F',
  birthdate: new Date('1984-12-07')
})
