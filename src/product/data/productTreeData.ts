import productCategoryFactory from '../factories/productCategoryFactory';
import productBrandFactory from '../factories/productBrandFactory';
import productModelFactory from '../factories/productModelFactory';
import productVariantFactory from '../factories/prodcutVariantFactory';

const productTreeData = {
  categories: [
    productCategoryFactory({
      id: 'phone_category_id',
      label: 'Phones',
      brands: [
        productBrandFactory({
          id: 'apple_brand_id',
          label: 'Apple',
          models: [
            productModelFactory({
              id: 'iphone_13_model_id',
              label: 'iPhone 13',
              variants: [
                productVariantFactory({
                  id: '128_gb_variant_id',
                  label: '128GB',
                }),
                productVariantFactory({
                  id: '256_gb_variant_id',
                  label: '256GB',
                }),
              ],
            }),
            productModelFactory({
              id: 'iphone_13_pro_model_id',
              label: 'iPhone 13 Pro',
              variants: [
                productVariantFactory({
                  id: '256_gb_variant_id',
                  label: '256GB',
                }),
                productVariantFactory({
                  id: '512_gb_variant_id',
                  label: '512GB',
                }),
              ],
            }),
          ],
        }),
        productBrandFactory({
          id: 'samsung_brand_id',
          label: 'Samsung',
          models: [
            productModelFactory({
              id: 'galaxy_s22_model_id',
              label: 'Galaxy S22',
              variants: [
                productVariantFactory({
                  id: '256_gb_variant_id',
                  label: '256GB',
                }),
                productVariantFactory({
                  id: '512_gb_variant_id',
                  label: '512GB',
                }),
              ],
            }),
            productModelFactory({
              id: 'galaxy_s22_ultra_model_id',
              label: 'Galaxy S22 Ultra',
              variants: [
                productVariantFactory({
                  id: '256_gb_variant_id',
                  label: '256GB',
                }),
                productVariantFactory({
                  id: '512_gb_variant_id',
                  label: '512GB',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    productCategoryFactory({
      id: 'computer_category_id',
      label: 'Computers',
      brands: [
        productBrandFactory({
          id: 'apple_brand_id',
          label: 'Apple',
          models: [
            productModelFactory({
              id: 'macbook_pro_model_id',
              label: 'Macbook Pro',
              variants: [
                productVariantFactory({
                  id: '14_inch_variant_id',
                  label: '14 inch',
                }),
                productVariantFactory({
                  id: '16_inch_variant_id',
                  label: '16 inch',
                }),
              ],
            }),
            productModelFactory({
              id: 'macbook_air_model_id',
              label: 'Macbook Air',
              variants: [
                productVariantFactory({
                  id: '13_inch_variant_id',
                  label: '13 inch',
                }),
              ],
            }),
          ],
        }),
        productBrandFactory({
          id: 'microsoft_brand_id',
          label: 'Microsoft',
          models: [
            productModelFactory({
              id: 'surface_book_3_model_id',
              label: 'Surface Book 3',
              variants: [
                productVariantFactory({
                  id: '13_inch_variant_id',
                  label: '13 inch',
                }),
                productVariantFactory({
                  id: '15_inch_variant_id',
                  label: '15 inch',
                }),
              ],
            }),
            productModelFactory({
              id: 'surface_laptop_go_model_id',
              label: 'Surface Laptop Go',
              variants: [
                productVariantFactory({
                  id: '128_gb_variant_id',
                  label: '128GB',
                }),
                productVariantFactory({
                  id: '256_gb_variant_id',
                  label: '256GB',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    productCategoryFactory({
      id: 'watch_category_id',
      label: 'Watches',
      brands: [
        productBrandFactory({
          id: 'apple_brand_id',
          label: 'Apple',
          models: [],
        }),
        productBrandFactory({
          id: 'samsung_brand_id',
          label: 'Samsung',
          models: [],
        }),
      ],
    }),
    productCategoryFactory({
      id: 'tv_category_id',
      label: 'TVs',
      brands: [
        productBrandFactory({
          id: 'lg_brand_id',
          label: 'LG',
          models: [],
        }),
        productBrandFactory({
          id: 'samsung_brand_id',
          label: 'Samsung',
          models: [],
        }),
      ],
    }),
  ],
};

export default productTreeData;
