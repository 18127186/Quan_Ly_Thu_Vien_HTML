'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [{
      hoten: 'Trần văn A',//1
      ngaysinh: '04/12/2000',
      cmnd: '123456789',
      gioitinh: 'Nam',
      dantoc: 'Kinh',
      ngaylap: '13/12/2000',
      sdt: '0987654321',
      email: 'tranvana@gmail.com',
      diachi: '1, đường 1, phường 1, quận 1, thành phố Hồ Chí Minh',
      sotiendatcoc: '500.000',
      nguoilap: '987654321',
      image: '/img/black Hole-600x780.jpg',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn B', //2
        ngaysinh: '05/12/2000',
        cmnd: '123456790',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654322',
        email: 'tranvanb@gmail.com',
        diachi: '2, đường 1, phường 1, quận 1, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654321',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
        },
      {
          hoten: 'Trần văn C',
          ngaysinh: '06/12/2000',
          cmnd: '123456791',
          gioitinh: 'Nam',
          dantoc: 'Kinh',
          ngaylap: '13/12/2000',
          sdt: '0987654323',
          email: 'tranvanc@gmail.com',
          diachi: '3, đường 1, phường 1, quận 1, thành phố Hồ Chí Minh',
          sotiendatcoc: '500.000',
          nguoilap: '987654321',
          image: '/img/black Hole-600x780.jpg',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
      {
            hoten: 'Trần văn D', //4
            ngaysinh: '07/12/2000',
            cmnd: '123456792',
            gioitinh: 'Nam',
            dantoc: 'Kinh',
            ngaylap: '13/12/2000',
            sdt: '0987654324',
            email: 'tranvana@gmail.com',
            diachi: '4, đường 1, phường 1, quận 1, thành phố Hồ Chí Minh',
            sotiendatcoc: '500.000',
            nguoilap: '987654321',
            image: '/img/black Hole-600x780.jpg',
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn E', //5
        ngaysinh: '08/12/2000',
        cmnd: '123456793',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654325',
        email: 'tranvana@gmail.com',
        diachi: '5, đường 1, phường 1, quận 1, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654321',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn F', //6
        ngaysinh: '07/12/2000',
        cmnd: '123456798',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654330',
        email: 'tranvana@gmail.com',
        diachi: '6, đường 2, phường 2, quận 1, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654322',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn G', //7
        ngaysinh: '10/12/2000',
        cmnd: '123456794',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654326',
        email: 'tranvana@gmail.com',
        diachi: '11, đường 10, phường 10, quận 10, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654322',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn H', //8
        ngaysinh: '17/12/2000',
        cmnd: '123456795',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654327',
        email: 'tranvana@gmail.com',
        diachi: '11, đường 11, phường 11, quận 11, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654322',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn I', //9
        ngaysinh: '07/12/2000',
        cmnd: '123456796',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654328',
        email: 'tranvana@gmail.com',
        diachi: '5, đường 5, phường 5, quận 5, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654322',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Trần văn J', //10
        ngaysinh: '07/1/2000',
        cmnd: '123456797',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '13/12/2000',
        sdt: '0987654329',
        email: 'tranvana@gmail.com',
        diachi: '10, đường 10, phường 1, quận 1, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: '987654322',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
