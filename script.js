const categories = [
    {
        name: "Clothing",
        description: "Find sustainable and ethically produced clothing brands.",
        hoverImage: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg", // Add your image path here
        brands: [
            { name: "Patagonia", website: "https://www.patagonia.com/", description: "Known for its commitment to environmental sustainability and high-quality outdoor clothing.", logo: "https://i.pinimg.com/originals/ef/77/41/ef7741f1117eb4a3b98d7412033a038d.jpg" },
            { name: "H&M Conscious", website: "https://www2.hm.com/en_asia2/sustainability.html", description: "A line from H&M that focuses on sustainable materials and ethical production.", logo: "https://fashionexposedonline.wordpress.com/wp-content/uploads/2016/08/hm.jpg" },
            { name: "Fabindia", website: "https://www.fabindia.com/", description: "Offers traditional Indian clothing made from natural fibers and supports local artisans.", logo: "https://images.seeklogo.com/logo-png/35/1/fabindia-logo-png_seeklogo-356118.png" },
            { name: "People Tree", website: "https://www.peopletree.co.uk/", description: "A pioneer in sustainable and fair trade fashion, offering stylish clothing made from organic cotton.", logo: "https://static.vecteezy.com/system/resources/previews/007/688/932/non_2x/people-tree-logo-free-vector.jpg" },
            { name: "Bamboo India", website: "https://www.bambooindia.com/", description: "Provides eco-friendly clothing made from bamboo fabric, promoting sustainability.", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEWC_A4pF4xpQ/company-logo_200_200/company-logo_200_200/0/1675062304113?e=2147483647&v=beta&t=0sLeZSUOUf5i9swyySSpY-lpWXeX-1vMchQRMYApUfo" },
            { name: "W for Woman", website: "https://wforwoman.com/", description: "Offers contemporary ethnic wear for women, focusing on sustainable practices.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBd8Yz1HEwIT6DgEGYqtwtJQCumMEbpEFZZQ&s" },
            { name: "Chumbak", website: "https://www.chumbak.com/", description: "Known for its vibrant and quirky designs, offering a range of clothing and accessories.", logo: "https://economictimes.indiatimes.com/thumb/msid-76857996,width-1200,height-900,resizemode-4,imgsize-49611/chumbak.jpg?from=mdr" },
            { name: "Biba", website: "https://www.biba.in/", description: "A popular brand for ethnic wear, focusing on traditional Indian styles with a modern twist.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA0Jy-nXC7emZqvwRY8KUmaXxg-lCMiZ5zg&s.png" },
            { name: "Anokhi", website: "https://www.anokhi.com/", description: "Specializes in hand-block printed textiles and sustainable fashion.", logo: "https://mir-s3-cdn-cf.behance.net/projects/404/57866e200017645.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.jpg" }
        ]
    },
    {
        name: "Beauty",
        description: "Explore cruelty-free and eco-friendly beauty products.",
        hoverImage: "https://media.istockphoto.com/id/493029628/photo/set-of-decorative-cosmetic.jpg?s=612x612&w=0&k=20&c=JYxqtgYkpBD-tITJJ60ex_04bEi52uHCEJDFuOlKaNA=", // Add your image path here
        brands: [
            { name: "The Body Shop", website: "https://www.thebodyshop.com/", description: "Offers cruelty-free and ethically sourced beauty products.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JnImiW_RgJW_YN3wD8E0ZZWJbljvArrJvQ&s" },
            { name: "Forest Essentials", website: "https://www.forestessentialsindia.com/", description: "A luxury Ayurvedic skincare brand that uses natural ingredients.", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Forest-Essentials-Logo-300x300px.png" },
            { name: "Kama Ayurveda", website: "https://www.kamaayurveda.com/", description: "Provides authentic Ayurvedic products for skincare and wellness.", logo: "https://dtbtob4osa700.cloudfront.net/BrandsImages/16012020095856646_brlo.png" },
            { name: "Juice Beauty", website: "https://www.juicebeauty.com/", description: "Focuses on organic and natural beauty products.", logo: "https://crueltyfree.peta.org/wp-content/uploads/Juice-Beauty-Cruelty-Free.png" },
            { name: "Biotique", website: "https://www.biotique.com/", description: "Offers a range of Ayurvedic beauty products made from natural ingredients.", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Biotique_Logo-1.png" },
            { name: "Plum Goodness", website: "https://plumgoodness.com/", description: "A vegan and cruelty-free brand that focuses on clean beauty.", logo: "https://plumgoodness.com/cdn/shop/files/Nerw_Plum_Logo_400x400_2736c89d-cd7d-4211-a16c-352f38d35a84_400x.progressive.webp.jpg?v=1729663731" },
            { name: "Lotus Herbals", website: "https://www.lotusherbals.com/", description: "Combines nature and science to create effective beauty products.", logo: "https://cdn.shopify.com/s/files/1/0428/8063/0937/files/Copy-of-LOTUS-HERBALS_9da8eb0e-9456-487d-8cd7-600e35066411.jpg?v=1668496681" },
            { name: "Mamaearth", website: "https://mamaearth.in/", description: "Known for its toxin-free and natural skincare products.", logo: "https://static.thearcweb.com/images/PROD/PROD-164cca1b-d99a-4b21-86ae-1296b4397fec.jpg" },
            { name: "SUGAR Cosmetics", website: "https://www.sugarcosmetics.com/", description: "Offers trendy and cruelty-free makeup products.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfeMWSchoPSQQe4r1yzD17FbBy8Rj4OmRfQ&s" }
        ]
    },
    {
        name: "Food",
        description: "Discover brands committed to sustainable food practices.",
        hoverImage: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", // Add your image path here
        brands: [
            { name: "Amul", website: "https://amul.com/", description: "A well-known dairy brand in India, committed to quality and sustainability.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/1200px-Amul_official_logo.svg.png" },
            { name: "Tata Tea", website: "https://www.tataconsumer.com/brands/tea/tata-tea", description: "Offers a range of teas with a focus on ethical sourcing and sustainability.", logo: "https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/1_Tata-Tea3.png" },
            { name: "Nature's Path", website: "https://www.naturespath.com/", description: "Provides organic and sustainable food products.", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Nature%27s_Path_logo.png" },
            { name: "Annie's Homegrown", website: "https://www.annies.com/", description: "Focuses on organic and non-GMO food products.", logo: "https://logovectorseek.com/wp-content/uploads/2020/10/annies-homegrown-logo-vector.png" },
            { name: "Patanjali", website: "https://www.patanjaliayurved.net/", description: "Offers a variety of organic and natural food products.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Patanjali_Logo.svg/2560px-Patanjali_Logo.svg.png" },
            { name: "Organic India", website: "https://www.organicindia.com/", description: "Provides organic food and wellness products, supporting sustainable farming.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OsiwTjdQTdJbTXeJXgnbGtqgOrauFcmaFw&s" },
            { name: "Sattviko", website: "https://www.sattviko.com/", description: "Offers healthy snacks and food products made from natural ingredients.", logo: "https://sattviko.com/cdn/shop/files/logo_foodyoga.png?v=1685712767&width=600" },
            { name: "Bisk Farm", website: "https://www.biskfarm.com/", description: "Known for its range of baked goods made with quality ingredients.", logo: "https://yt3.googleusercontent.com/ytc/AIdro_lCr2kn2xJifL5gHa94__OST1tmmor7RSC-_q-5HywVdA=s900-c-k-c0x00ffffff-no-rj" },
            { name: "Haldiram's", website: "https://www.haldirams.com/", description: "Offers a variety of traditional Indian snacks and sweets.", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg" }
        ]
    },
    {
        name: "Home Goods",
        description: "Shop for eco-friendly home goods and decor.",
        hoverImage: "https://www.housedigest.com/img/gallery/the-untold-truth-of-homegoods/l-intro-1660685520.jpg", // Add your image path here
        brands: [
            { name: "IKEA", website: "https://www.ikea.com/", description: "Offers a range of sustainable home goods and furniture.", logo: "https://i.pinimg.com/736x/84/e4/38/84e438b133f0ff16e839443e61e6afeb.jpg" },
            { name: "Urban Ladder", website: "https://www.urbanladder.com/", description: "Provides stylish and sustainable furniture options.", logo: "https://images.yourstory.com/cs/images/companies/urbanladder-1588234727362.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" },
            { name: "Chumbak", website: "https://www.chumbak.com/", description: "Known for its quirky home decor and accessories.", logo: "https://economictimes.indiatimes.com/thumb/msid-76857996,width-1200,height-900,resizemode-4,imgsize-49611/chumbak.jpg?from=mdr" },
            { name: "Fabindia", website: "https://www.fabindia.com/", description: "Offers a range of home textiles and decor made from natural materials.", logo: "https://images.seeklogo.com/logo-png/35/1/fabindia-logo-png_seeklogo-356118.png" },
            { name: "Home Centre", website: "https://www.homecentre.in/", description: "Provides a variety of home goods with a focus on quality and design.", logo: "https://seeklogo.com/images/H/home-centre-logo-118885EAA7-seeklogo.com.png" },
            { name: "D'Decor", website: "https://www.ddecor.com/", description: "Specializes in home textiles and furnishings with sustainable practices.", logo: "https://cdn.ddecor.com/media/wysiwyg/dummy_banner.jpg" },
            { name: "Nilkamal", website: "https://www.nilkamalfurniture.com/", description: "Offers durable plastic furniture with a focus on sustainability.", logo: "https://nilkamal.com/wp-content/uploads/2019/02/nilkamal.jpg" },
            { name: "Hometown", website: "https://www.hometown.in/", description: "Provides a variety of home decor and furniture options.", logo: "https://dcassetcdn.com/design_img/1998252/450519/450519_10661661_1998252_1e8c2009_image.jpg" },
            { name: "Pepperfry", website: "https://www.pepperfry.com/", description: "An online marketplace for furniture and home decor.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pepperfry_logo.svg/1280px-Pepperfry_logo.svg.png" }
        ]
    },
    {
        name: "Jewelry",
        description: "Browse ethical jewelry brands with sustainable practices.",
        hoverImage: "https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs=", // Add your image path here
        brands: [
            { name: "Tanishq", website: "https://www.tanishq.co.in/", description: "A well-known Indian jewelry brand offering a range of gold and diamond jewelry.", logo: "https://static.wixstatic.com/media/0f4e14_1b60b97f08c043baa2fa057e97b3eac0~mv2.jpg/v1/crop/x_389,y_0,w_2196,h_1687/fill/w_560,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tanishq.jpg" },
            { name: "Kalyan Jewellers", website: "https://www.kalyanjewellers.net/", description: "Offers traditional and contemporary jewelry designs.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kalyan_Jewellers_logo.svg/1200px-Kalyan_Jewellers_logo.svg.png" },
            { name: "PC Jeweller", website: "https://www.pcjeweller.com/", description: "Known for its exquisite gold and diamond jewelry.", logo: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/upload-1736876321238-4c8654e9819ee9c7a030ecfbcdec919a.webp" },
            { name: "Amrapali", website: "https://www.amrapalijewels.com/", description: "Specializes in traditional Indian jewelry with a modern twist.", logo: "https://mir-s3-cdn-cf.behance.net/projects/404/d1a945160325087.Y3JvcCw3NTUsNTkwLDE3NSwyMg.jpg" },
            { name: "Senco Gold", website: "https://www.sencogold.com/", description: "Offers a range of gold and diamond jewelry with a focus on craftsmanship.", logo: "https://mir-s3-cdn-cf.behance.net/projects/404/0ec7e1151650311.Y3JvcCw5MDAsNzAzLDAsOTg.jpg" },
            { name: "P.C. Chandra Jewellers", website: "https://www.pcchandra.com/", description: "Known for its intricate designs and quality.", logo: "https://pcchandraindia.com/cdn/shop/files/91_px_38_px_PC_CHANDRA.png?v=1726809911" },
            { name: "Tara Jewels", website: "http://tarajewellery.in/", description: "Offers a variety of jewelry options with a focus on sustainability.", logo: "https://gjepc.org/admin/images/news_images/1902432854_Tara-Jewels.jpg" },
            { name: "Zaveri Pearls", website: "https://zaveriandco.com/", description: "Specializes in imitation and fashion jewelry.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmK41nPWwY_opwYu4EnpvcujZBH-7IFc0hg&s" },
            { name: "Voylla", website: "https://www.voylla.com/", description: "An online brand offering trendy and affordable jewelry.", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Voylla_Website_Logo.png" }
        ]
    },
    {
        name: "Electronics",
        description: "Find electronics that prioritize sustainability.",
        hoverImage: "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg", // Add your image path here
        brands: [
            { name: "Fairphone", website: "https://www.fairphone.com/", description: "Focuses on ethical sourcing and sustainability in electronics.", logo: "https://logowik.com/content/uploads/images/fairphone7386.logowik.com.webp" },
            { name: "Apple", website: "https://www.apple.com/", description: "Known for its commitment to reducing environmental impact.", logo: "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg" },
            { name: "Samsung", website: "https://www.samsung.com/", description: "Offers a range of electronics with a focus on sustainability.", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
            { name: "Dell", website: "https://www.dell.com/", description: "Provides eco-friendly laptops and computers.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjAkiKVLFKL2WMiiSKwFT_k9c-1wI-jRAwA&s" },
            { name: "HP", website: "https://www.hp.com/", description: "Known for its sustainable printing solutions and electronics.", logo: "https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png" },
            { name: "Lenovo", website: "https://www.lenovo.com/", description: "Offers a range of laptops with a focus on sustainability.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png" },
            { name: "Asus", website: "https://www.asus.com/", description: "Provides eco-friendly electronics and laptops.", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADV1dXBwcGcnJyQkJBNTU1FRUVBQUEzMzNQUFDLy8tjY2Pv7+/r6+v09PTb29vg4OC3t7dpaWl1dXV7e3uxsbHGxsampqZdXV2tra1XV1c7OzuXl5dvb28nJycXFxcwMDCKiooQEBAfHx+EhIQpKSkOeGROAAAEd0lEQVR4nO3a6XKCSBSGYVRcUVlEwShuWe7/EsdoEruhG/q0TtXU1Pv8iyynP9BeIEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+5+Kkb/DYvjBub+6v7JZYi6XGnVKnElqr3CWznlF8T/82N29uWATnxx9Ta7ndY6fx/ZP+ZepY4mopD9i3neuWsHKvvQgmjcYbKBdsdrvAY/cSXglj67muCeOJdeurEm5E+XwS7qznioOFqLZXwlAYUJ6w5RIGgez745PQ+hOxkiZMW84lvb4+CU+yEj15wn3Luey/UDN5wu1AWKInTth2l06lsLY84XwrLNGTJkzaTnWU/Qp9Ek7kX1Jhwnd5gRaLQBm499ai9s7biSjhYlAUg9cJgqgofs8YWav2n6sSSxKWWZQuJAd0ybIoWYqa8O/66UlOk20+LO3XXOD3W3oc7z5fcb4nLbWv9+b+Yb7NL2GZFf3U514oPc3EulP2Noj8Ti+l/eJnPx8q/ed+2/vY7w6fwzIbXBMvHJrk1JcqJdb5bLW+hG+3Ai/PnBl7qJHSxnW9GzvuR/P8u0FRkhqb45RQWasdVnqB96/J7FqhKjeD53/Q+oQl/P1YSTjpnPVPr3dguIkenZU4Yefa7DjeHj7DrO/RIWrL2uPfx0rCvfOs7eMz8Uu4ap1yaE7zjeyeRtrhj45USTgNcuf6vVHqk3Aum3mvJXdSO3P++FxLGH8IyodeCYVT741zQL0TUW6/lrA2oHQofRIGje6ss4gTfd35pmzREwZxrbNr1fdJGFxkER1nJmf1GK0ttYTX5Yf7RZ54JQyitjVqw5dTwKF2TNqa8DvkZpjPpg7rkFQZzN0TXgsMR+49jssDU72LHmrbTAl/xIuk2FTrrf3ZZqk0XpLwdvZ4mURZWX2uRsfWhEPriR/0J4T6tpaEimV/UA4Ps3Ot+Kr5sNc5oS5O+8WmvOTb8bn+3ZnZjnnQH04UPgmVlmRKzKNy7c7WY5SvsjWhVqOvdXfHzgP0EWBV2ypM+K1nZp2BKPs4JQz00fu9c+9Zazs8ElqeSqwtu6tjvGtC9XfVmVBfUjQGUHlC6+w1N95FbTp/cCtRqMecRO1pPi5SEn6EDqq24XJXZUX0UGRhrvcbo2rYba133l0XXn9AmTa2j3pP2Fte01m1jwtm9Z6jRp/oGp6lPJVwLXgVdz/Ao0jYbLRKnzoYdngqYdb2FsTgI+vep6H5vVPpC77BqxPGwqe9pUdC+zj7TV/2bk27PJOwan+V1fAlfjvaM9+WB31Ba3w8/kTC2zxNcldSj4S5qdF/9CVFZdzHP+HXffhzj5jI33D3dq0B9SWF5c2Jd8K/wTt1O8VtPiBN2LGu0AdOy/+7eCacqEvvqPvfU9b3HlGW8NDx2kkfq2zzJdF6+8c2rF+ueFDNbaP59BD+XY435xqjS9b5MNHtP4tc/zPp77+azA+/7zmXSVLbufYce+FW4r/0OgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzGPxUPPl9DlEGbAAAAAElFTkSuQmCC" },
            { name: "Xiaomi", website: "https://www.mi.com/in/", description: "Offers affordable electronics with a focus on sustainability.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Pfq44CzHA3XJsgt1G1e5kuyluRVHValhMQ&s" },
            { name: "OnePlus", website: "https://www.oneplus.in/", description: "Known for its commitment to quality and sustainability in smartphones.", logo: "https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.jpg" }
        ]
    },
    {
        name: "Footwear",
        description: "Shop for shoes made from sustainable materials.",
        hoverImage: "https://img.freepik.com/free-vector/classic-woman-s-leather-black-shoes_98292-4343.jpg", // Add your image path here
        brands: [
            { name: "Bata", website: "https://www.bata.in/", description: "A well-known footwear brand in India offering a range of styles.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicGWdbm0yIHucjyLu790rY-Pb4YHQ1zP59A&s" },
            { name: "Nike", website: "https://www.nike.com/", description: "Offers sustainable footwear options.", logo: "https://e7.pngegg.com/pngimages/312/338/png-clipart-nike-air-max-air-force-1-nike-free-swoosh-nike-text-logo.png" },
            { name: "Adidas Parley", website: "https://www.adidas.com/us/parley", description: "Focuses on creating shoes from recycled ocean plastic.", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Adidas_parley_logo.png" },
            { name: "Puma", website: "https://in.puma.com/", description: "Known for its commitment to sustainability in footwear.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s" },
            { name: "Red Chief", website: "https://www.redchief.in/", description: "Offers durable and stylish leather footwear.", logo: "https://images.seeklogo.com/logo-png/30/1/red-chief-shoes-logo-png_seeklogo-304796.png" },
            { name: "Khadim's", website: "https://www.khadims.com/", description: "A popular Indian footwear brand with a variety of styles.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonfAqxWj-quDD8NvhurU6HVNippQC01MLjw&s" },
            { name: "Woodland", website: "https://www.woodlandworldwide.com/", description: "Known for its rugged outdoor footwear.", logo: "https://seeklogo.com/images/W/woodland-logo-BDCA948AA5-seeklogo.com.png" },
            { name: "Metro Shoes", website: "https://www.metroshoes.net/", description: "Offers a range of fashionable footwear options.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcrOOnHJSOXTORc1cdbM0i3NtctiOgVdfMA&s" },
        ]
    },
    {
        name: "Accessories",
        description: "Explore stylish and eco-friendly accessories.",
        hoverImage: "https://t3.ftcdn.net/jpg/01/10/24/34/360_F_110243449_7SHALLFfuzJq2j33dsfRWTElxxKOag9Y.jpg", // Add your image path here
        brands: [
            { name: "Matt & Nat", website: "https://www.mattandnat.com/", description: "Offers stylish and eco-friendly bags and accessories.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5MnLlu2Zx6l-1PtUu7XdOnTXsLQD6p1eyA&s" },
            { name: "Fossil", website: "https://www.fossil.com/", description: "Known for its sustainable watches and accessories.", logo: "https://1000logos.net/wp-content/uploads/2020/09/Fossil-Logo.jpg" },
            { name: "S'well", website: "https://www.swell.com/", description: "Provides reusable water bottles with a focus on sustainability.", logo: "https://web.buyatab.com/wp-content/uploads/2020/08/Swell-Logo.png" },
            { name: "Klean Kanteen", website: "https://www.kleankanteen.com/", description: "Offers eco-friendly drinkware and accessories.", logo: "https://images.seeklogo.com/logo-png/19/1/klean-kanteen-logo-png_seeklogo-192263.png" },
            { name: "Chumbak", website: "https://www.chumbak.com/", description: "Known for its quirky and colorful accessories.", logo: "https://economictimes.indiatimes.com/thumb/msid-76857996,width-1200,height-900,resizemode-4,imgsize-49611/chumbak.jpg?from=mdr" },
            { name: "Hidesign", website: "https://www.hidesign.com/", description: "Offers premium leather bags and accessories with a focus on sustainability.", logo: "https://vivianamalls.com/wp-content/uploads/2023/08/Hidesign_-Viviana-Mall-Thane-Mumbai.png" },
            { name: "Baggit", website: "https://www.baggit.com/", description: "A popular Indian brand for stylish and eco-friendly bags.", logo: "https://vivianamalls.com/wp-content/uploads/2023/08/Baggit-Viviana-Mall-Thane-Mumbai.png" },
            { name: "Lifefactory", website: "https://www.lifefactory.com/", description: "Provides glass bottles and accessories for a sustainable lifestyle.", logo: "https://d2eu6x79z4tb3o.cloudfront.net/products/5777/product/LifeFactory_Stacked_Logo.png?1536186558" },
            { name: "Tote & Carry", website: "https://www.totencarry.com/?srsltid=AfmBOoq-FduKN679Z03_m-bGup-0xThJSztBXVHNaOOdKm_nhzEF6tuH", description: "Offers stylish and functional bags with a focus on sustainability.", logo: "https://pbs.twimg.com/profile_images/1469794002207526914/x6Mt4hcy_400x400.jpg" }
        ]
    },
    {
        name: "Health & Wellness",
        description: "Discover wellness products that are good for you and the planet.",
        hoverImage: "https://img.freepik.com/free-vector/healthy-lifestyle-diet-fitness-vector-sign-shape-heart-with-multiple-icons-depicting-various-sports-vegetables-cereals-seafood-meat-fruit-sleep-weight-beverages_1284-44073.jpg", // Add your image path here
        brands: [
            { name: "Banyan Botanicals", website: "https://www.banyanbotanicals.com/", description: "Offers Ayurvedic products for health and wellness.", logo: "https://tukuz.com/wp-content/uploads/2021/04/banyan-botanicals-logo-vector.png" },
            { name: "Herbivore Botanicals", website: "https://www.herbivorebotanicals.com/", description: "Focuses on natural and cruelty-free wellness products.", logo: "https://crueltyfree.peta.org/wp-content/uploads/herbivore-logo.png" },
            { name: "Dr. Bronner's", website: "https://www.drbronner.com/", description: "Known for its organic and fair trade soaps and personal care products.", logo: "https://w7.pngwing.com/pngs/533/185/png-transparent-dr-bronner-s-logo-horizontal-cruelty-free-cosmetics-and-beauty-brands.png" },
            { name: "Yoga Design Lab", website: "https://www.yogadesignlab.com/", description: "Offers eco-friendly yoga mats and accessories.", logo: "https://cdn.theorg.com/b4c4bf50-d7c4-4301-86ae-bdb94928d127_medium.jpg" },
            { name: "Garden of Life", website: "https://www.gardenoflife.com/", description: "Provides organic supplements and health products.", logo: "https://cdn.dribbble.com/userupload/11290344/file/original-2d76b2ec5d336d80b55a4553a0905670.png" },
            { name: "Nature's Bounty", website: "https://www.naturesbounty.com/", description: "Offers a range of vitamins and supplements.", logo: "https://www.nestlehealthscience.us/sites/g/files/lpfasj861/files/2023-06/NaturesBounty.png" },
            { name: "Himalaya Wellness", website: "https://www.himalayawellness.com/", description: "Known for its herbal health and wellness products.", logo: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207" },
            { name: "Patanjali", website: "https://www.patanjaliayurved.net/", description: "Offers a variety of natural health products.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Patanjali_Logo.svg/2560px-Patanjali_Logo.svg.png" },
            { name: "Organic India", website: "https://www.organicindia.com/", description: "Provides organic wellness products and supplements.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OsiwTjdQTdJbTXeJXgnbGtqgOrauFcmaFw&s" }
        ]
    },
    {
        name: "Kids",
        description: "Find sustainable toys and products for children.",
        hoverImage: "https://t4.ftcdn.net/jpg/03/24/42/21/360_F_324422176_Lgn7NTeFyNaUKIDu0Ppls1u8zb8wsKS4.jpg", // Add your image path here
        brands: [
            { name: "Green Toys", website: "https://www.greentoys.com/", description: "Offers eco-friendly toys made from recycled materials.", logo: "https://amazon-omni-cdn.com/0jvbg4ib1h6/jy5i9y0d7ho683/b2bb5dd4-1cf6-49b4-b71d-1b97d931a46c.jpeg" },
            { name: "Hape", website: "https://toys.hape.com/", description: "Known for its sustainable wooden toys.", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hape_Logo.png" },
            { name: "Tata Play", website: "https://www.tataplay.com/", description: "Provides educational toys and games for children.", logo: "https://images.seeklogo.com/logo-png/44/1/tata-play-logo-png_seeklogo-440105.png" },
            { name: "Plan Toys", website: "https://www.plantoys.com/", description: "Focuses on sustainable wooden toys.", logo: "https://eu.plantoys.com/cdn/shop/files/2022_PlanToys_logo_color_1200x1200.png?v=1681232828" },
            { name: "Chicco", website: "https://www.chicco.in/", description: "Offers a range of baby products and toys with a focus on safety.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chicco_logo.svg/2560px-Chicco_logo.svg.png" },
            { name: "Funskool", website: "https://www.hamleys.in/brand/Funskool?srsltid=AfmBOorxbz9xMTCsyHEGIIofuCKY2oAfuO4mywymdlhVx6uTx6GtVDnx", description: "A popular Indian brand for toys and games.", logo: "https://rainbowtoyz.com/cdn/shop/files/3.png?v=1708595735&width=500" },
            { name: "Lego", website: "https://www.lego.com/en-in", description: "Offers sustainable building toys for children.", logo: "https://static.vecteezy.com/system/resources/thumbnails/020/190/586/small/lego-logo-lego-icon-free-free-vector.jpg" },
            { name: "Melissa & Doug", website: "https://www.melissaanddoug.com/", description: "Known for its high-quality wooden toys.", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Melissa_%26_Doug_Logo.jpg" }
        ]
    },
    {
        name: "Stationery",
        description: "Discover eco-friendly stationery and office supplies.",
        hoverImage: "https://cdn.dotpe.in/longtail/store-items/8090566/6rMa3NuB.jpeg", // Add your image path here
        brands: [
            { name: "Paper Source", website: "https://www.papersource.com/", description: "Offers eco-friendly stationery and office supplies.", logo: "https://getlasso.co/wp-content/uploads/paper-source-logo.png" },
            { name: "Ecojot", website: "https://www.ecojot.com/", description: "Known for its sustainable paper products.", logo: "https://cdn.shopify.com/s/files/1/1426/2784/files/logo.png?height=628&pad_color=ffffff&v=1613679514&width=1200" },
            { name: "Pencil Me In", website: "https://pencilmeinshop.co.uk/?srsltid=AfmBOopFXkE0ls8y5JZhYUUWkMOgVVfi2TX27fo_V79ME_n849gLVOkI", description: "Provides eco-friendly stationery options.", logo: "https://pencilforschools.org/wp-content/uploads/2020/10/pencil-2016-stacked-logo.png" },
            { name: "Rifle Paper Co.", website: "https://riflepaperco.com/", description: "Offers beautiful and sustainable stationery products.", logo: "https://goodfabric.co.uk/wp-content/uploads/2021/09/good-fabric-rifle-paper-logo.png" },
            { name: "Muji", website: "https://www.muji.com/", description: "Known for its minimalist and eco-friendly stationery.", logo: "https://logowik.com/content/uploads/images/muji5682.jpg" },
            { name: "Papier", website: "https://www.papier.com/", description: "Offers personalized and sustainable stationery products.", logo: "https://raggededge.com/wp-content/uploads/2021/09/Papier_Logo_Large_03-2.png" },
            { name: "Sakura", website: "https://www.sakuraofamerica.com/", description: "Provides high-quality art supplies and stationery.", logo: "https://media.licdn.com/dms/image/v2/C560BAQG2NBEe_IjVUw/company-logo_200_200/company-logo_200_200/0/1630626439480/sakura_finetek_usa_inc_logo?e=2147483647&v=beta&t=O91axEzoHM3GLCtFC5hr4bHmRT5cHhr8XPI-zSpmN_s" },
            { name: "Kraft Paper", website: "https://www.kraftpaper.com/", description: "Offers eco-friendly paper products.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0x4jS65T3t032bGkSveFex1vJiiN1GqREw&s" },
            { name: "The Paper Mill Store", website: "https://www.thepapermillstore.com/", description: "Provides a variety of sustainable paper products.", logo: "https://www.thepapermillstore.com/media/logo/stores/1/TPMS_logo.png" }
        ]
    },
    {
        name: "Gifts",
        description: "Shop for sustainable gifts for any occasion.",
        hoverImage: "https://www.realsimple.com/thmb/1nO0GmEuF87RSxFBmTWtfo6TZW0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-gift-giver-GettyImages-1706575747-2089a300e6594496b7f558585a4baefb.jpg", // Add your image path here
        brands: [
            { name: "Uncommon Goods", website: "https://www.uncommongoods.com/", description: "Offers a variety of sustainable gifts for any occasion.", logo: "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/Logo_green.png" },
            { name: "Etsy", website: "https://www.etsy.com/", description: "A marketplace for handmade and sustainable gifts.", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png" },
            { name: "GiftTree", website: "https://www.gifttree.com/", description: "Provides a range of sustainable gift options.", logo: "https://plant.gifttrees.com/hubfs/logo%20(3)-1.png" },
            { name: "EarthHero", website: "https://earthhero.com/", description: "Offers eco-friendly gifts and products.", logo: "https://earthhero.com/cdn/shop/files/earthhero-logomark-and-wordmark-blue_6aabe4f7-73da-44ef-9ce0-c85262d37de1.jpg?v=1662767270&width=1200" },
            { name: "The Green Gift", website: "https://giftgreen.in/", description: "Focuses on sustainable and eco-friendly gifts.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBasfQ0EzsbiAYOEn_qSghJ8qjigE5nyOpA&s" },
            { name: "Gifts for Good", website: "https://giftsforgood.com/", description: "Offers gifts that support social causes.", logo: "https://www.giftsforgood.com/cdn/shop/files/Gifts_for_Good_logo1000pixels.png?v=1702169016&width=1000" },
            { name: "Ethical Gifting", website: "https://ethicalgifting.co.uk/", description: "An online marketplace for sustainable products.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQOGTvKX-KicdMJswqwAzpYt2eIBCm_R4NQ&s" },
            { name: "The Good Trade", website: "https://www.thegoodtrade.com/", description: "Offers a variety of sustainable gift ideas.", logo: "https://images.squarespace-cdn.com/content/v1/57945597ebbd1a3518b2e481/1502742987258-TFX1OOYDD5WRGALSBT5S/Season+creates+sustainable+silk+dresses%2C+handmade+in+the+USA+for+your+eco-friendly+capsule+wardrobe." }
        ]
    },
];

// Function to generate category navigation
function generateCategoryNav() {
    const categoryList = document.getElementById("category-list");
    categories.forEach((category) => {
        const card = document.createElement("div");
        card.classList.add("category-card");
        card.innerHTML = `
            <h3>${category.name}</h3>
            <div class="description">${category.description}</div>
            <a href="#" class="view-brands-button" 
               onmouseover="this.parentElement.querySelector('.description').classList.add('fade-out'); this.parentElement.classList.add('hovered'); this.parentElement.style.backgroundImage = 'url(${category.hoverImage})';" 
               onmouseout="this.parentElement.querySelector('.description').classList.remove('fade-out'); this.parentElement.classList.remove('hovered'); this.parentElement.style.backgroundImage = '';"
               onclick="displayBrands('${category.name}')">Show Brands</a>
        `;
        categoryList.appendChild(card);
    });
}

// Function to display brands for a selected category
function displayBrands(categoryName) {
    const brandContainer = document.getElementById("brand-container");
    brandContainer.innerHTML = ""; // Clear previous content
    const selectedCategory = categories.find(cat => cat.name === categoryName);
    
    selectedCategory.brands.forEach(brand => {
        const brandCard = document.createElement("div");
        brandCard.classList.add("brand-card");
        brandCard.innerHTML = `
            <img src="${brand.logo}" alt="${brand.name} Logo" style="max-width: 100px; height: auto; margin-bottom: 10px;">
            <h3>${brand.name}</h3>
            <p>${brand.description}</p>
            <a href="${brand.website}" target="_blank" class="button">Visit Website</a>
        `;
        brandContainer.appendChild(brandCard);
    });

    // Smooth scroll to the brand container
    brandContainer.scrollIntoView({ behavior: 'smooth' });
}

// Initialize
generateCategoryNav();