// ✅ Bajo acoplamiento
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
  public email: string
  public role: string
  private lastAccess: Date

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
  lastFolderOpen: string
  workingDirectory: string
}

class Settings {
  public workingDirectory: string
  public lastFolderOpen: string

  constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
    this.workingDirectory = workingDirectory
    this.lastFolderOpen = lastFolderOpen
  }
}

interface UserSettingsProps {
  birthdate: Date
  email: string
  gender: Gender
  lastFolderOpen: string
  name: string
  role: string
  workingDirectory: string
}

class UserSettings {
  public person: Person
  public user: User
  public settings: Settings

  constructor({ name, gender, birthdate, email, role, workingDirectory, lastFolderOpen }: UserSettingsProps) {
    this.person = new Person({ name, gender, birthdate })
    this.user = new User({ email, role })
    this.settings = new Settings({ workingDirectory, lastFolderOpen })
  }
}

const userSettings = new UserSettings({
  birthdate: new Date('1983-06-28'),
  email: 'sebas@google.com',
  gender: 'M',
  lastFolderOpen: '/home',
  name: 'Sebas',
  role: 'admin',
  workingDirectory: '/usr/home'
})

console.log({ userSettings, credentials: userSettings.user.checkCredentials() })
