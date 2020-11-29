function takeAttribute(ele) {
    let nameImage = ele.children[0].children[0].getAttribute('src');
    let nameTitle = ele.children[0].children[1].children[0].textContent;
    let nameAuthor = ele.children[0].children[1].children[1].textContent;
    let nameType = ele.children[0].children[1].children[2].textContent;
    let nameDesc=ele.children[0].children[1].children[3].textContent;
    localStorage.setItem("image", nameImage);
    localStorage.setItem("title", nameTitle);
    localStorage.setItem("author", nameAuthor);
    localStorage.setItem("type", nameType);
    localStorage.setItem("des",nameDesc);
}

function Loai(Type) {
    let x=document.querySelector('.tLoaiCungLoai');
    let y=document.querySelector('.xemthem');

    if(Type==="Tử vi - Phong Thủy"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)" > 
            <div class="card">
                <img class="img-thumbnail" src="./img/TuViPhongThuy/TuViDauSoToanThu5.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                <div class="card-body">
                    <p class="card-title" id="tenSach">Tử vi đầu số</p>
                    <p class="card-text" id="tenTg">Nguyễn Dương</p>
                    <p class="loai" style="display: none;">Tử vi - Phong Thủy</p>
                    <p class="mota" style="display: none;">
                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                    </p>
                </div>
            </div>
        </a>
            `;
            x.appendChild(child);
        }
        y.href='tuViPhongThuy.html';

    }
    else if(Type==="Văn Học"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/VanHoc/VanHoc1.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Phù dung ơi</p>
                                    <p class="card-text" id="tenTg">Vũ Bằng</p>
                                    <p class="loai" style="display: none;">Văn Học</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='vanHoc.html';
    }
    else if(Type==="Tiểu Thuyết"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
            <div class="card">
                <img class="img-thumbnail" src="./img/TieuThuyet/TieuThuyet1.jpg" alt=""  style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                <div class="card-body">
                    <p class="card-title" id="tenSach">Tiếng gọi nơi hoang dã</p>
                    <p class="card-text" id="tenTg">Jack London</p>
                    <p class="loai" style="display: none;">Tiểu Thuyết</p>
                    <p class="mota" style="display: none;">
                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                    </p>
                </div>
            </div>
        </a>
            `;
            x.appendChild(child);
        }
        y.href='tieuThuyet.html';
    }
    else if(Type==="Kinh Tế"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/KinhTe/KinhTe1.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Đừng bao giờ từ bỏ giấc mơ</p>
                                    <p class="card-text" id="tenTg">Nguyễn Công Hoan</p>
                                    <p class="loai" style="display: none;">Kinh Tế</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='kinhTe.html';
    }
    else if(Type==="Xã Hội"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/XaHoi/XaHoi1.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Xã hội học văn học cơ bản</p>
                                    <p class="card-text" id="tenTg">Phạm Văn Quang</p>
                                    <p class="loai" style="display: none;">Xã Hội</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='xaHoi.html';
    }
    else if(Type==="Chính Trị"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/ChinhTri/HienPhap1.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Tương lai của quyền lực</p>
                                    <p class="card-text" id="tenTg">Josephs kye</p>
                                    <p class="loai" style="display: none;">Chính Trị</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='chinhTri.html';
    }
    else if(Type==="Lịch Sử"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/LichSu/LichSu1.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Lịch sử do thái</p>
                                    <p class="card-text" id="tenTg">Paul Johnson</p>
                                    <p class="loai" style="display: none;">Lịch Sử</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='lichSu.html';
    }
    else if(Type==="Khoa Học"){
        for(let i=1;i<=4;i++){
            let child=document.createElement('div');
            child.className='col-6 my-3 col-sm-6 col-md-3 col-lg-3 col-xl-3';
            child.innerHTML=`
            <a href="moTaSach.html" class="boGachChan" onclick="takeAttribute(this)">
                            <div class="card">
                                <img class="img-thumbnail" src="./img/KhoaHoc/KhoaHoc2.jpg" alt="" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto;">
                                <div class="card-body">
                                    <p class="card-title" id="tenSach">Khám phá khoa học về ô tô</p>
                                    <p class="card-text" id="tenTg">Võ Quy</p>
                                    <p class="loai" style="display: none;">Khoa Học</p>
                                    <p class="mota" style="display: none;">
                                        Cuốn sách này là cái khẽ rùng mình của dĩ vãng đó, khi ghi lại một năm sau khi chia tay người cũ, người đã trao cho nhau nhẫn đính hôn và dự định chuyện tương lai lâu dài.
Nhiều người hỏi có tiếc nuối không, còn nhớ không và có muốn quay lại không, đều lắc đầu từ chối. Vì cái nhớ bây giờ là những hồi ức, là khoảnh khắc, là thời gian từng bên nhau, chứ còn người đó, bản thân đã lãng quên ít nhiều. Người đã xưa, chuyện đã cũ, muốn quay lại là điều không thể được. “Thiên kim nan mãi nhất hồi đầu”, ngàn lượng vàng không thể mua được một lần quay đầu nhìn lại, cũng là ý chỉ việc này.
Rồi nhiều năm sau đó, mới hiểu ra rằng khi chia tay, chúng ta từ bỏ một người tình và giữ lại một chuyện tình, người tình có thể qua đời, nhưng chuyện tình thì bất tử với thời gian.
Suốt những năm dài sống một mình, tôi nhận ra nỗi cô đơn cũng có vẻ đẹp của riêng nó và từ bỏ việc chối bỏ nỗi cô đơn trong lòng. Làm bạn với chính sự trống trải đó lại càng gíup tôi trân trọng hơn khoảng khắc hạnh phúc mình có thể đón nhận đến.
Rồi cứ vậy, tôi ghi lại năm cô đơn nhất trong đời từng trải qua, đặt tên cho cuốn sách này là “Biên Niên Cô Đơn”, hi vọng rằng mọi người sẽ cảm thấy có một chút gì đó của bản thân khi đọc được.
                                    </p>
                                </div>
                            </div>
                        </a>
            `;
            x.appendChild(child);
        }
        y.href='khoaHoc.html';
    }
}

function addSameType(){
    let changeContent=document.querySelector('.changeContent');


    let parentContent=changeContent.children[1];
    let theLoai=parentContent.children[0].children[2].children[0].textContent;
    Loai(theLoai);
////


    


    
}
function changeContent(){
    let changeContent=document.querySelector('.changeContent');
    let parentImg=changeContent.children[0];

    let img=document.createElement('img');
    img.src=localStorage.getItem('image');
    img.style.width='444px';
    img.style.height='444px';
    img.style.display='block';
    parentImg.appendChild(img);

    let parentContent=changeContent.children[1];
    let ttSach=parentContent.children[0];
    let gtSach=parentContent.children[1];

////
    let titleSach=document.createElement('span');
    titleSach.classList.add('test1');
    titleSach.textContent=localStorage.getItem('title');

    let authorSach=document.createElement('span');
    authorSach.classList.add('test1');
    authorSach.textContent=localStorage.getItem('author');

    let typeSach=document.createElement('span');
    typeSach.classList.add('test1');
    typeSach.textContent=localStorage.getItem('type');

    let motaSach=document.createElement('p');
    motaSach.classList.add('test1');
    motaSach.textContent=localStorage.getItem('des');

    ttSach.children[0].appendChild(titleSach);
    ttSach.children[1].appendChild(authorSach);
    ttSach.children[2].appendChild(typeSach);

    gtSach.appendChild(motaSach);
}
changeContent();
addSameType();