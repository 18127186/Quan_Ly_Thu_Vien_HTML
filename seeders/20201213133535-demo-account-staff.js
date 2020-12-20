'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Account_staffs', [{
      hoten: 'Nguyễn Văn Nhân',
      ngaysinh: '05/12/1999',
      cmnd: '987654321',
      gioitinh: 'Nam',
      dantoc: 'Kinh',
      ngaylap: '04/12/2010',
      sdt: '0352687544',
      email: 'nguyenvannhan@gmail.com',
      diachi: '5, đường 10, phường 1, quận thủ đức, thành phố Hồ Chí Minh',
      sotiendatcoc: '500.000',
      nguoilap: 'Admin',
      image: '/img/black Hole-600x780.jpg',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Nguyễn Văn Viên',
        ngaysinh: '05/12/1989',
        cmnd: '987654322',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '04/12/2010',
        sdt: '0365248566',
        email: 'nguyenvanvien@gmail.com',
        diachi: '50, đường 10, phường 5, quận thủ đức, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: 'Admin',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        hoten: 'Nguyễn Văn Nhân Viên',
        ngaysinh: '05/12/1990',
        cmnd: '987654323',
        gioitinh: 'Nam',
        dantoc: 'Kinh',
        ngaylap: '04/12/2010',
        sdt: '0345687455',
        email: 'nguyenvannhan@gmail.com',
        diachi: '20, đường 10, phường 2, quận thủ đức, thành phố Hồ Chí Minh',
        sotiendatcoc: '500.000',
        nguoilap: 'Admin',
        image: '/img/black Hole-600x780.jpg',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Account_staffs', null, {});
  }
};
