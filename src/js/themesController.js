class ThemesController {
  constructor(themes, localStorageKey) {
    this.currentThemeIndex = Number(localStorage.getItem(localStorageKey));
    this.themes = themes;
    this.localStorageKey = localStorageKey;
  }

  setTheme(index) {
    const selectedTheme = this.themes[index];

    for (let prop in selectedTheme) {
      document.documentElement.style.setProperty(prop, selectedTheme[prop]);
    }
  }

  setCurrentTheme() {
    this.setTheme(this.currentThemeIndex);
  }

  switchToNextTheme() {
    const maxThemeIndex = this.themes.length - 1;

    if (this.currentThemeIndex === maxThemeIndex) {
      this.currentThemeIndex = 0;
    } else {
      this.currentThemeIndex++;
    }

    this.setTheme(this.currentThemeIndex);
  }

  saveLastTheme() {
    localStorage.setItem(this.localStorageKey, this.currentThemeIndex);
  }
}

export default ThemesController;
