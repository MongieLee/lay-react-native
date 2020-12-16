import {observable, action, makeAutoObservable} from 'mobx';

class RootStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  userInfo = {
    name: '????',
    number: '',
    city: '',
    headerImg: '',
  };

  @action
  changeName(options) {
    const {name, number, city, headerImg} = options;
    this.userInfo.name = name;
    this.userInfo.number = number;
    this.userInfo.city = city;
    this.userInfo.headerImg = headerImg;
    console.log(`observable`);
    console.log(this.userInfo);
  }
}

export default new RootStore();
