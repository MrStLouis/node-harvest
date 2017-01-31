'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});

describe('The InvoiceCategories API', function() {
  describe('Show all recorded categories for an invoice', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.invoiceCategories.list, 'function');
    });
  });
  describe('Update a particular category', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.invoiceCategories.update, 'function');
    });
  });
  describe('Create a new category', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.invoiceCategories.create, 'function');
    });
  });
  describe('Delete an existing category', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.invoiceCategories.delete, 'function');
    });
  });
});
