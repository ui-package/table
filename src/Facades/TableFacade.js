import TableFacadeAbstract from './TableFacadeAbstract';
export default class TableFacade extends TableFacadeAbstract {
  constructor() {
    super()
    this._sortManager = null
    this._chooseManager = null
    this._columnManager = null
    this._paginationManager = null
    this._densityManager = null
    this._resetManager = null
    this._renderManager = null
  }
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    return this._columnManager
  }
  /**
   * @return {RenderInterface}
   */
  getRenderManager () {
    return this._renderManager
  }
  /**
   * @return {PaginationInterface}
   */
  getPaginationManager() {
    return this._paginationManager
  }
  /**
   * @return {DensityInterface}
   */
  getDensityManager() {
    return this._densityManager
  }
  /**
   * @return {ResetInterface}
   */
  getResetManager() {
    return this._resetManager
  }
  /**
   * @return {SortInterface}
   */
  getSortManager () {
    return this._sortManager
  }
  /**
   * @return {ChosenInterface}
   */
  getChooseManager () {
    return this._chooseManager
  }

  /**
   * @param manager {ColumnManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setColumnManager (manager) {
    this._columnManager = manager
    return this
  }
  /**
   * @param manager {RenderInterface}
   * @return {TableFacadeAbstract}
   */
  setRenderManager (manager) {
    this._renderManager = manager
    return this
  }
  /**
   * @param manager {PaginationInterface}
   * @return {TableFacadeAbstract}
   */
  setPagination(manager) {
    this._paginationManager = manager
    return this
  }
  /**
   * @param manager {DensityInterface}
   * @return {TableFacadeAbstract}
   */
  setDensity(manager) {
    this._densityManager = manager
    return this
  }
  /**
   * @param manager {ResetInterface}
   * @return {TableFacadeAbstract}
   */
  setReset(manager) {
    this._resetManager = manager
    return this
  }
  /**
   * @param manager {SortInterface}
   * @return {TableFacadeAbstract}
   */
  setSortManager (manager) {
    this._sortManager = manager
    return this
  }
  /**
   * @param manager {ChosenInterface}
   * @return {TableFacadeAbstract}
   */
  setChooseManager (manager) {
    this._chooseManager = manager
    return this
  }
}