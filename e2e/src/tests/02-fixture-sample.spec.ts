import { test, expect } from '@playwright/test';
import { webTableExample } from '../fixtures/web-table-example-fixture';


webTableExample('@fixtures Test fixture', async ({ pm }) => {

   const count = await pm.fromWebTableExamplePage().webTableFeature('35');
   expect(count).toEqual(1);
});
