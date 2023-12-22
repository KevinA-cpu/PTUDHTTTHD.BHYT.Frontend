class StorageUtil {
  getFromLocalStorage(variable: string): any {
    const refreshToken = JSON.parse(localStorage.getItem(variable) ?? "{}");
    return refreshToken;
  }

  setToLocalStorage(variable: string, data: any): void {
    localStorage.setItem(variable, JSON.stringify(data));
  }
}
export default new StorageUtil();
