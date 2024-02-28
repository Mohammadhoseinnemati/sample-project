const products = [
    {
        name: "محصول 1",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 2",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 3",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 4",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 5",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 6",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 7",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 8",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 9",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 10",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 11",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 12",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 13",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    },
    {
        name: "محصول 14",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product1.jpg"
    },
    {
        name: "محصول 15",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه",
        image: "../content/product2.jpg"
    }
];


const renderData = (data) => {
    data.forEach((product, i) => {
        const productBox = $("#products");
        const template = `
                <div class="col-lg-4 col-md-6 py-2">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="تضویر محصول شماره : ${i + 1}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <div class="mt-2">
                                <ul class="react-box d-flex justify-content-end mb-0">
                                    <li class="me-3 order-2" onclick="like(this)">
                                        <i class="fa-regular fa-heart"></i>
                                    </li>
                                    <li class="me-3 order-1">
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        $(productBox).append(template);
    });
}


$(document).ready(() => {
    renderData(products);
});

const like = (element) => {
    const isLiked = $(element).hasClass("liked");
    if (!isLiked) {
        $(element).addClass("liked");
    } else {
        $(element).removeClass("liked");
    }
}

const renderFilteredData = (filter) => {
    const filteredData = products.filter((product) => product.name.includes(filter) && product);
    const productBox = $("#products");
    $(productBox).html(null);
    renderData(filteredData);
}

var timeOut;
const changeFilterInput = (element) => {
    if (timeOut) {
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => renderFilteredData(element.value), 3000)
}