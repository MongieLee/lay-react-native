import {observable, action, makeAutoObservable} from 'mobx';

class RootStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  name = 'Lemon';

  @action
  changeName(name) {
    this.name = name;
  }
}

export default new RootStore();
