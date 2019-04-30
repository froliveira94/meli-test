import { observable, action } from "mobx";

class SearchStore {
  @observable searchTerm;

  constructor(props) {
    this.searchTerm = "";
  }

  @action
  setSearchTerm = term => {
    this.searchTerm = term;
  };

  @action
  getSearchTerm = () => {
    return this.searchTerm;
  };
}

const searchStore = new SearchStore();

export default searchStore;
export { SearchStore };
