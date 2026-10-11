/* Copyright 2024 Tecnativa - David Vidal
 * License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl.html). */

import {
  SaleLabelTextField,
  listSaleOrderLineLabelText,
} from "@sale/js/sale_label_text/sale_label_text";
import {
  SaleOrderLineProductField,
  saleOrderLineProductField,
} from "@sale/js/sale_product_field/sale_product_field";
import {patch} from "@web/core/utils/patch";

const forceConfiguratorMixin = () => ({
  /**
   * @override
   * Whenever the secondary units differ for the same template, the matrix can't
   * represent them, so we'll force the regular configurator.
   */
  async _openGridConfigurator(edit = false) {
    if (this.props.record.data.force_product_configurator) {
      // `edit` isn't forwarded on purpose: `sale_product_matrix` redirects the
      // product configurator back to the matrix when editing a matrix line.
      const data = await this._getProductConfiguratorData();
      return this._openProductConfigurator({data});
    }
    return super._openGridConfigurator(edit);
  },
});

patch(SaleOrderLineProductField.prototype, forceConfiguratorMixin());
patch(SaleLabelTextField.prototype, forceConfiguratorMixin());

for (const fieldDescr of [saleOrderLineProductField, listSaleOrderLineLabelText]) {
  Object.assign(fieldDescr, {
    fieldDependencies: [
      ...fieldDescr.fieldDependencies,
      {name: "force_product_configurator", type: "boolean"},
    ],
  });
}
