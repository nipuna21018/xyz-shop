import StorageService from '../../services/storage.service'; 

describe('StorageService', () => {
    beforeEach(() => {
        localStorage.clear(); // Clear localStorage before each test
    });

    it('should set an item in local storage', () => {
        const key = 'testKey';
        const value = { data: 'testData' };

        StorageService.setItem(key, value);

        // Assertions
        expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
    });

    it('should get an item from local storage', () => {
        const key = 'testKey';
        const value = { data: 'testData' };

        localStorage.setItem(key, JSON.stringify(value));

        const result = StorageService.getItem<typeof value>(key);

        // Assertions
        expect(result).toEqual(value);
    });

    it('should return null when getting an item with a non-existing key', () => {
        const key = 'nonExistingKey';

        const result = StorageService.getItem<string>(key);

        // Assertions
        expect(result).toBeNull();
    });

    it('should remove an item from local storage', () => {
        const key = 'testKey';
        const value = { data: 'testData' };

        localStorage.setItem(key, JSON.stringify(value));

        StorageService.removeItem(key);

        // Assertions
        expect(localStorage.getItem(key)).toBeNull();
    });
});
