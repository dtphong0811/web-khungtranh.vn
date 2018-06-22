'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var items = [{
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "F5D x 3cm",
      itemImg: '/img/F5D x 3cm.jpg',
      itemImgDemo: '/img/demo_F5D x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng -màu đen",
      itemPrice: 120000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite trắng trơn",
      itemId: "F5T x 3cm",
      itemImg: '/img/F5T x 3cm.jpg',
      itemImgDemo: '/img/demo_F5T x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu trắng",
      itemPrice: 230000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite xanh chuối",
      itemId: "202X x 3cm",
      itemImg: '/img/202X x 3cm.jpg',
      itemImgDemo: '/img/demo_202X x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu xanh chuối",
      itemPrice: 80000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite hồng phấn",
      itemId: "202H x 3cm",
      itemImg: '/img/202H x 3cm.jpg',
      itemImgDemo: '/img/demo_202H x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu hồng",
      itemPrice: 130000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "F5D x 3cm",
      itemImg: '/img/F5D x 3cm.jpg',
      itemImgDemo: '/img/demo_F5D x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng -màu đen",
      itemPrice: 120000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite trắng trơn",
      itemId: "F5T x 3cm",
      itemImg: '/img/F5T x 3cm.jpg',
      itemImgDemo: '/img/demo_F5T x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu trắng",
      itemPrice: 230000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite xanh chuối",
      itemId: "202X x 3cm",
      itemImg: '/img/202X x 3cm.jpg',
      itemImgDemo: '/img/demo_202X x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu xanh chuối",
      itemPrice: 80000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "202H x 3cm",
      itemImg: '/img/202H x 3cm.jpg',
      itemImgDemo: '/img/demo_202H x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu hồng",
      itemPrice: 130000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "F5D x 3cm",
      itemImg: '/img/F5D x 3cm.jpg',
      itemImgDemo: '/img/demo_F5D x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng -màu đen",
      itemPrice: 120000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "F5T x 3cm",
      itemImg: '/img/F5T x 3cm.jpg',
      itemImgDemo: '/img/demo_F5T x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu trắng",
      itemPrice: 230000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite đen trơn",
      itemId: "202X x 3cm",
      itemImg: '/img/202X x 3cm.jpg',
      itemImgDemo: '/img/demo_202X x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu xanh chuối",
      itemPrice: 80000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      CatalogId: 4,
      itemName:"Khung tranh Composite hồng phấn",
      itemId: "202H x 3cm",
      itemImg: '/img/202H x 3cm.jpg',
      itemImgDemo: '/img/demo_202H x 3cm.png',
      itemInfo: "Phong cách sang trọng phù hợp cho mọi không gian trang trí",
      itemMaterial: "Composite trơn bóng - màu hồng",
      itemPrice: 130000,
      itemStars: 4,
      itemCountVotes: 20,
      itemWidthSize: 240,
      itemHeightSize: 120,
      itemType: "Khung đặt làm",
      itemStatus:1,
      itemSizeInfo: "Không được đặt khung có kích thước quá kích thước tối đa",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    ];
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      // 
    */
  }
};
