{
    "name": "Product Class",
    "version": "20.0.1.0.0",
    "summary": "Product classification and attribute constraints",
    "author": "Camptocamp, Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/product-attribute",
    "license": "AGPL-3",
    "category": "Product",
    "depends": ["product", "stock", "sale"],
    "data": [
        "views/product_class_views.xml",
        "views/product_attribute_views.xml",
        "views/product_template_views.xml",
        "security/ir.access.csv",
    ],
    "installable": True,
    "maintainers": ["Ricardoalso", "ivantodorovich"],
}
