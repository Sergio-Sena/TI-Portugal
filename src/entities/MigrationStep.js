/**
 * MigrationStep entity
 */

// Simulated database using localStorage
const STORAGE_KEY = "migration_steps";

/**
 * MigrationStep class for managing migration steps
 */
export class MigrationStep {
  /**
   * Creates a new migration step
   * @param {Object} step - The step data
   * @returns {Promise<Object>} - The created step
   */
  static async create(step) {
    const steps = await this.list();
    const newStep = {
      ...step,
      id: Date.now().toString()
    };
    
    steps.push(newStep);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
    
    return newStep;
  }
  
  /**
   * Lists all migration steps
   * @param {string} sortBy - The field to sort by
   * @returns {Promise<Array>} - The list of steps
   */
  static async list(sortBy = null) {
    const stepsJson = localStorage.getItem(STORAGE_KEY);
    const steps = stepsJson ? JSON.parse(stepsJson) : [];
    
    if (sortBy) {
      steps.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });
    }
    
    return steps;
  }
  
  /**
   * Gets a migration step by ID
   * @param {string} id - The step ID
   * @returns {Promise<Object|null>} - The step or null if not found
   */
  static async get(id) {
    const steps = await this.list();
    return steps.find(step => step.id === id) || null;
  }
  
  /**
   * Updates a migration step
   * @param {string} id - The step ID
   * @param {Object} data - The updated data
   * @returns {Promise<Object|null>} - The updated step or null if not found
   */
  static async update(id, data) {
    const steps = await this.list();
    const index = steps.findIndex(step => step.id === id);
    
    if (index === -1) return null;
    
    steps[index] = { ...steps[index], ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
    
    return steps[index];
  }
  
  /**
   * Deletes a migration step
   * @param {string} id - The step ID
   * @returns {Promise<boolean>} - Whether the step was deleted
   */
  static async delete(id) {
    const steps = await this.list();
    const filteredSteps = steps.filter(step => step.id !== id);
    
    if (filteredSteps.length === steps.length) return false;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSteps));
    return true;
  }
}