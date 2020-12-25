'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
      tensach: 'Tử vi trọn đời', //1
      tentacgia: 'Triệu Vĩ An',
      theloai: 'Tử vi - Phong Thủy',
      soluong: 50,
      ngaynhap: '13/12/2020',
      image: '/TuViPhongThuy/TuViDauSoToanThu6.jpg',
      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi mệnh thư', //2
        tentacgia: 'Hà Hữu Minh',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 50,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu7.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi luận giải', //3
        tentacgia: 'Lê Quốc Khánh',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 40,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu8.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi đầu số', //4
        tentacgia: 'Nguyễn Dương',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu1.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi hàm số', //5
        tentacgia: 'Nguyễn Phát Lộc',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu2.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi hàm số', //6
        tentacgia: 'Võ Văn Linh',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu3.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tứ trụ chu dịch', //7
        tentacgia: 'Triệu Vĩ Hòa',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu4.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi toàn thư', //8
        tentacgia: 'Di Trần Đoàn',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu5.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi trọn đời', //9
        tentacgia: 'Nguyễn Dương',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu10.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Tử vi trọn đời', //10
        tentacgia: 'Nguyễn Dương',
        theloai: 'Tử vi - Phong Thủy',
        soluong: 100,
        ngaynhap: '13/12/2020',
        image: '/TuViPhongThuy/TuViDauSoToanThu9.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        tensach: 'Phù dung ơi', //1
        tentacgia: 'Vũ Bằng',
        theloai: 'Văn Học',
        soluong: 50,
        ngaynhap: '13/12/2020',
        image: '/VanHoc/VanHoc1.jpg',
        mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
        Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
        Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
        Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
        Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Tác phẩm - lời bình', //2
          tentacgia: 'Vũ Trọng Phụng',
          theloai: 'Văn Học',
          soluong: 50,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc2.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Sống mòn', //3
          tentacgia: 'Nam Cao',
          theloai: 'Văn Học',
          soluong: 40,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc3.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Thơ và đời', //4
          tentacgia: 'Xuân Quỳnh',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc4.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Sổ tay viết tay', //5
          tentacgia: 'Tô Hoài',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc5.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Cốt cách phụ nữ', //6
          tentacgia: 'Trịnh Huyền Trang',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc6.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Giông tố', //7
          tentacgia: 'Vũ Trọng Phụng',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc7.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Bến không chồng', //8
          tentacgia: 'Dương Hương',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc8.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Bến không chồng', //9
          tentacgia: 'Dương Hương',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc9.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Bến không chồng', //10
          tentacgia: 'Dương Hương',
          theloai: 'Văn Học',
          soluong: 100,
          ngaynhap: '13/12/2020',
          image: '/VanHoc/VanHoc10.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          tensach: 'Tiếng gọi nơi hoang dã', //1
          tentacgia: 'Jack London',
          theloai: 'Tiểu Thuyết',
          soluong: 50,
          ngaynhap: '13/12/2020',
          image: '/TieuThuyet/TieuThuyet1.jpg',
          mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
          Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
          Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
          Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
          Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Kiếp nào ta cũng tìm thấy nhau', //2
            tentacgia: 'Brian Weis',
            theloai: 'Tiểu Thuyết',
            soluong: 50,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet2.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Hệ thống tư cữu hoa', //3
            tentacgia: 'Thiên Minh Lý',
            theloai: 'Tiểu Thuyết',
            soluong: 40,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet3.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Con chim xanh biết bay về', //4
            tentacgia: 'Nguyễn Nhật Ánh',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet5.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Trường tồn như ý', //5
            tentacgia: 'Đại Minh Kha',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet4.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Hai số phận', //6
            tentacgia: 'Jetfrey archer',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet6.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Số đỏ', //7
            tentacgia: 'vũ Trọng Phụng',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet7.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Người gác đêm', //8
            tentacgia: 'Trương Minh Hoàng',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet8.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Người gác đêm', //9
            tentacgia: 'Trương Minh Hoàng',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet9.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Người gác đêm', //10
            tentacgia: 'Trương Minh Hoàng',
            theloai: 'Tiểu Thuyết',
            soluong: 100,
            ngaynhap: '13/12/2020',
            image: '/TieuThuyet/TieuThuyet10.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
          },
          {
            tensach: 'Đừng bao giờ từ bỏ giấc mơ', //1
            tentacgia: 'Nguyễn Công Hoan',
            theloai: 'Kinh Tế',
            soluong: 50,
            ngaynhap: '13/12/2020',
            image: '/KinhTe/KinhTe1.jpg',
            mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
            Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
            Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
            Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
            Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Các nền kinh tế việt nam', //2
              tentacgia: 'Hoàng Minh Trị',
              theloai: 'Kinh Tế',
              soluong: 50,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe2.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Các nền kinh tế vận hành', //3
              tentacgia: 'Beger Farmer',
              theloai: 'Kinh Tế',
              soluong: 40,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe3.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Lời thú tội mới từ sát thủ', //4
              tentacgia: 'John Perkins',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe4.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Kinh tế học  hài hước', //5
              tentacgia: 'Steven Levit',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe5.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Lược sử về kinh tế học', //6
              tentacgia: 'Niall kishtainy',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe6.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Em phải đến Harvard', //7
              tentacgia: 'Lưu Nhất Hoa',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe7.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Đừng bao giờ đi ăn một mình', //8
              tentacgia: 'Keith ferrazzi',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe8.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Đừng bao giờ đi ăn một mình', //9
              tentacgia: 'Keith ferrazzi',
              theloai: 'Kinh tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe9.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Đừng bao giờ đi ăn một mình', //10
              tentacgia: 'Keith ferrazzi',
              theloai: 'Kinh Tế',
              soluong: 100,
              ngaynhap: '13/12/2020',
              image: '/KinhTe/KinhTe10.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
            },
            {
              tensach: 'Xã hội học văn học cơ bản', //1
              tentacgia: 'Phạm Văn Quang',
              theloai: 'Xã Hội',
              soluong: 50,
              ngaynhap: '13/12/2020',
              image: '/XaHoi/XaHoi1.jpg',
              mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
              Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
              Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
              Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
              Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Xã hội học tội phạm', //2
                tentacgia: 'Trần Đức Chân',
                theloai: 'Xã Hội',
                soluong: 50,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi2.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Xã hội học đại cương', //3
                tentacgia: 'Trương Thị Hiền',
                theloai: 'Xã Hội',
                soluong: 40,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi3.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Tuổi trẻ đáng giá bao nhiêu', //4
                tentacgia: 'Nguyễn Dương',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi4.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Dược xã hội sử dụng thuốc', //5
                tentacgia: 'Hoàng Nhạc Vũ',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi5.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Hỏi đáp về mọi chuyện xã hội', //6
                tentacgia: 'Nguyễn Lân Dũng',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi6.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Marketing mạng xã hội', //7
                tentacgia: 'Linda Coles',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi7.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Phật giáo và xã hội đại sư tinh vân', //8
                tentacgia: 'Trần Thanh Vân',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi8.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Phật giáo và xã hội đại sư tinh vân', //9
                tentacgia: 'Trần Thanh Vân',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi9.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              },
              {
                tensach: 'Phật giáo và xã hội đại sư tinh vân', //10
                tentacgia: 'Trần Thanh Vân',
                theloai: 'Xã Hội',
                soluong: 100,
                ngaynhap: '13/12/2020',
                image: '/XaHoi/XaHoi10.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
              }, 
              {
                tensach: 'Tương lai của quyền lực', //1
                tentacgia: 'Josephs kye',
                theloai: 'Chính Trị',
                soluong: 50,
                ngaynhap: '13/12/2020',
                image: '/ChinhTri/HienPhap1.jpg',
                mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Quân vương thuật cai trị', //2
                  tentacgia: 'Vũ Hữu Tuấn',
                  theloai: 'Chính Trị',
                  soluong: 50,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap2.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Lãnh đạo vạn người mê', //3
                  tentacgia: 'Tô Minh Hoài',
                  theloai: 'Chính Trị',
                  soluong: 40,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap8.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Tinh hoa quản trị dự án', //4
                  tentacgia: 'Thái Minh Hoàng',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap4.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Địa chính trị', //5
                  tentacgia: 'Klaus dodds',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap5.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Quản trị nhân sự', //6
                  tentacgia: 'Trần Việt Anh',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap6.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Chính trị luận', //7
                  tentacgia: 'Nguyễn Văn An',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap7.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Bất trị', //8
                  tentacgia: 'Howard',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap3.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Bất trị', //9
                  tentacgia: 'Howard',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap9.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },
                {
                  tensach: 'Bất trị', //10
                  tentacgia: 'Howard',
                  theloai: 'Chính Trị',
                  soluong: 100,
                  ngaynhap: '13/12/2020',
                  image: '/ChinhTri/HienPhap10.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                },    
                {
                  tensach: 'Lịch sử do thái', //1
                  tentacgia: 'Paul Johnson',
                  theloai: 'Lịch Sử',
                  soluong: 50,
                  ngaynhap: '13/12/2020',
                  image: '/LichSu/LichSu1.jpg',
                  mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                  Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                  Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                  Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                  Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                  createdAt: Sequelize.literal('NOW()'),
                  updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Điểm tựa đều mất', //2
                    tentacgia: 'Trần Văn Tiến',
                    theloai: 'Lịch Sử',
                    soluong: 50,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu2.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Vua Gia Long', //3
                    tentacgia: 'Hoàng Văn An',
                    theloai: 'Lịch Sử',
                    soluong: 40,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu3.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Lịch sử thượng đế', //4
                    tentacgia: 'Karen armstrong',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu4.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Tư trị thông giám', //5
                    tentacgia: 'Tư Mã Quang',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu5.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Thành cát tư hãn', //6
                    tentacgia: 'Ngô Minh An',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu6.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Đảng phái', //7
                    tentacgia: 'Trần Thanh An',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu7.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Nội chiến việt nam', //8
                    tentacgia: 'Tạ Chí Hòa',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu8.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Nội chiến việt nam', //9
                    tentacgia: 'Tạ Chí Hòa',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu9.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Nội chiến việt nam', //10
                    tentacgia: 'Tạ Chí Hòa',
                    theloai: 'Lịch Sử',
                    soluong: 100,
                    ngaynhap: '13/12/2020',
                    image: '/LichSu/LichSu10.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                  },
                  {
                    tensach: 'Khoa học thưởng thức', //1
                    tentacgia: 'Mã Minh Sinh',
                    theloai: 'Khoa Học',
                    soluong: 50,
                    ngaynhap: '13/12/2020',
                    image: '/KhoaHoc/KhoaHoc1.jpg',
                    mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                    Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                    Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                    Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                    Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khám phá khoa học về ô tô', //2
                      tentacgia: 'Võ Quy',
                      theloai: 'Khoa Học',
                      soluong: 50,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc2.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Muôn kiếp nhân sinh', //3
                      tentacgia: 'Nguyễn Phong',
                      theloai: 'Khoa Học',
                      soluong: 40,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc3.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Nhà khoa học trẻ tuổi', //4
                      tentacgia: 'Lê Minh',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc4.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Chó và Mèo', //5
                      tentacgia: 'Ngô Phúc',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc5.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khoa học trẻ', //6
                      tentacgia: 'Ricky Star',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc6.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khoa học song ngữ', //7
                      tentacgia: 'Trần An Vy',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc7.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khoa học kỹ thuật', //8
                      tentacgia: 'Triệu Kim Cường',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc8.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khoa học song ngữ', //9
                      tentacgia: 'Trần An Vy',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc9.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    },
                    {
                      tensach: 'Khoa học song ngữ', //10
                      tentacgia: 'Trần An Vy',
                      theloai: 'Khoa Học',
                      soluong: 100,
                      ngaynhap: '13/12/2020',
                      image: '/KhoaHoc/KhoaHoc10.jpg',
                      mota: `Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
                      Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
                      Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
                      Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
                      Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.`,
                      createdAt: Sequelize.literal('NOW()'),
                      updatedAt: Sequelize.literal('NOW()')
                    }  
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
