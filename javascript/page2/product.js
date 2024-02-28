const data = [
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

data.forEach((product, i) => {
    const productBox = $("#products");
    const template = `
    <div class="col-lg-4 col-md-6">
        <div class="card my-2">
            <img src="${product.image}" class="card-img-top img-fluid" alt="تضویر محصول شماره : ${i + 1}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        </div>
    </div>
    `;
    $(productBox).append(template);
});