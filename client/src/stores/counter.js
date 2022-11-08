import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const urlServer = "http://localhost:3000/"

export const useCounterStore = defineStore("counter", {
  state:()=>{
    return {
      books: [
        {
          kind: "books#volume",
          id: "8JTTDwAAQBAJ",
          etag: "8VUMDRYrFA0",
          selfLink: "https://www.googleapis.com/books/v1/volumes/8JTTDwAAQBAJ",
          volumeInfo: {
            title: "Andrea Hirata, Laskar Pelangi - dalam Novel dan Film",
            authors: ["TEMPO Publishing"],
            publisher: "Tempo Publishing",
            publishedDate: "2020-01-01",
            description:
              "Setelah novel Andrea Hirata meledak, kini sutradara Riri Riza mencoba melukiskan Laskar Pelangi di atas layar perak. Setelah enam kali mondar-mandir ke Belitung untuk mengadakan riset selama setahun dan mencari pemain asli penduduk Belitung, duo Mira Lesmana dan Riri Riza menampilkan kisah 10 anak Syuting Laskar Pelangi. Belitung dan dua orang guru yang penuh semangat yang inspiratif dan menyentuh.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786232621121",
              },
              {
                type: "ISBN_10",
                identifier: "6232621123",
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 90,
            printType: "BOOK",
            categories: ["Biography & Autobiography"],
            maturityRating: "MATURE",
            allowAnonLogging: true,
            contentVersion: "0.0.1.0.preview.1",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=8JTTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=8JTTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=8JTTDwAAQBAJ&printsec=frontcover&dq=andrea+hirata&hl=&cd=1&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=8JTTDwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=8JTTDwAAQBAJ",
          },
          saleInfo: {
            country: "ID",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 88800,
              currencyCode: "IDR",
            },
            retailPrice: {
              amount: 66600,
              currencyCode: "IDR",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=8JTTDwAAQBAJ&rdid=book-8JTTDwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 88800000000,
                  currencyCode: "IDR",
                },
                retailPrice: {
                  amountInMicros: 66600000000,
                  currencyCode: "IDR",
                },
              },
            ],
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.co.id/books/download/Andrea_Hirata_Laskar_Pelangi_dalam_Novel-sample-pdf.acsm?id=8JTTDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=8JTTDwAAQBAJ&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Setelah novel Andrea Hirata meledak, kini sutradara Riri Riza mencoba melukiskan Laskar Pelangi di atas layar perak.",
          },
        },
        {
          kind: "books#volume",
          id: "FQ_xml4y71EC",
          etag: "FwGkFd5PtBI",
          selfLink: "https://www.googleapis.com/books/v1/volumes/FQ_xml4y71EC",
          volumeInfo: {
            title: "Sang Pemimpi",
            authors: ["Andrea Hirata"],
            publisher: "Bentang Pustaka",
            publishedDate: "2006",
            description:
              "Sang Pemimpi adalah sebuah lantunan kisah kehidupan yang memesona dan akan membuat Anda percaya akan tenaga cinta, percaya pada kekuatan mimpi dan pengorbanan, lebih dari itu, akan membuat Anda percaya kepada Tuhan. Andrea akan membawa Anda berkelana menerobos sudut-sudut pemikiran di mana Anda akan menemukan pandangan yang berbeda tentang nasib, tantangan intelektualitas, dan kegembiraan yang meluap-luap, sekaligus kesedihan yang mengharu biru. Tampak komikal pada awalnya, selayaknya kenakalan remaja biasa, tapi kemudian tanpa Anda sadari, kisah dan karakter-karakter dalam buku ini lambat laun menguasai Anda. Karena potret-potret kecil yang menawan akan menghentakkan Anda pada rasa humor yang halus namun memiliki efek filosofis yang meresonansi. Karena arti perjuangan hidup dalam kemiskinan yang membelit dan cita-cita yang gagah berani dalam kisah dua orang tokoh utama buku ini: Arai dan Ikal akan menuntun Anda dengan semacam keanggunan dan daya tarik agar Anda dapat melihat ke dalam diri sendiri dengan penuh pengharapan, agar Anda menolak semua keputusasaan dan ketakberdayaan Anda sendiri. “Kita tak kan pernah mendahului nasib!” teriak Arai. “Kita akan sekolah ke Prancis, menjelajahi Eropa sampai ke Afrika! Apa pun yang terjadi!” [Bentang, Novel, Inspirasi, Motivasi, Indonesia]",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9793062924",
              },
              {
                type: "ISBN_13",
                identifier: "9789793062921",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 320,
            printType: "BOOK",
            categories: ["Billiton Island (Indonesia)"],
            averageRating: 4,
            ratingsCount: 85,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "4.3.4.0.preview.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=FQ_xml4y71EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=FQ_xml4y71EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=FQ_xml4y71EC&pg=PP1&dq=andrea+hirata&hl=&cd=2&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=FQ_xml4y71EC&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Sang_Pemimpi.html?hl=&id=FQ_xml4y71EC",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=FQ_xml4y71EC&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Sang Pemimpi adalah sebuah lantunan kisah kehidupan yang memesona dan akan membuat Anda percaya akan tenaga cinta, percaya pada kekuatan mimpi dan pengorbanan, lebih dari itu, akan membuat Anda percaya kepada Tuhan.",
          },
        },
        {
          kind: "books#volume",
          id: "DrNREAAAQBAJ",
          etag: "KuKlVu1J1v0",
          selfLink: "https://www.googleapis.com/books/v1/volumes/DrNREAAAQBAJ",
          volumeInfo: {
            title:
              "KESEPADANAN GRAMATIKAL TERJEMAHAN NOVEL ‘LASKAR PELANGI’ OLEH ANDREA HIRATA KE DALAM BAHASA INGGRIS MELALUI GOOGLE TRANSLATE",
            authors: ["MAGDAD HATIM"],
            publisher: "Penerbit Lakeisha",
            publishedDate: "2021-11-01",
            description:
              "Buku ini berguna bagi para peneliti dan pemerhati kajian penerjemahan, khususnya yang barkaitan dengan kesepadanan gramatikal terjemahan novel sebagai bagian dari kajian penerjemahan, sehingga buku dapat dijadikan salah satu rujukan atau referensi pendukung.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786235536729",
              },
              {
                type: "ISBN_10",
                identifier: "6235536720",
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 265,
            printType: "BOOK",
            categories: ["Education"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=DrNREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=DrNREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=DrNREAAAQBAJ&pg=PA5&dq=andrea+hirata&hl=&cd=3&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=DrNREAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=DrNREAAAQBAJ",
          },
          saleInfo: {
            country: "ID",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 74925,
              currencyCode: "IDR",
            },
            retailPrice: {
              amount: 56194,
              currencyCode: "IDR",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=DrNREAAAQBAJ&rdid=book-DrNREAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 74925000000,
                  currencyCode: "IDR",
                },
                retailPrice: {
                  amountInMicros: 56194000000,
                  currencyCode: "IDR",
                },
              },
            ],
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.co.id/books/download/KESEPADANAN_GRAMATIKAL_TERJEMAHAN_NOVEL-sample-pdf.acsm?id=DrNREAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=DrNREAAAQBAJ&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Andrea menulis sebuah novel yang akan mengobarkan semangat mereka yang selalu dirundung kesulitan dalam menempuh pendidikan. ... --Garin Nugroho, Sineas “<b>Andrea Hirata</b> memberi kita syair indah tentang keragaman dan kekayaan tanah air,&nbsp;...",
          },
        },
        {
          kind: "books#volume",
          id: "tBqoCQAAQBAJ",
          etag: "6EdUK82SSlk",
          selfLink: "https://www.googleapis.com/books/v1/volumes/tBqoCQAAQBAJ",
          volumeInfo: {
            title: "Ayah",
            authors: ["Andrea Hirata"],
            publisher: "Bentang Pustaka",
            publishedDate: "2015-05-29",
            description:
              "Betapa Sabari menyayangi Zorro. Ingin dia memeluknya sepanjang waktu. Dia terpesona melihat makhluk kecil yang sangat indah dan seluruh kebaikan yang terpancar darinya. Diciuminya anak itu dari kepala sampai ke jari-jemari kakinya yang mungil. Kalau malam Sabari susah susah tidur lantaran membayangkan bermacam rencana yang akan dia lalui dengan anaknya jika besar nanti. Dia ingin mengajaknya melihat pawai 17 Agustus, mengunjungi pasar malam, membelikannya mainan, menggandengnya ke masjid, mengajarinya berpuasa dan mengaji, dan memboncengnya naik sepeda saban sore ke taman kota. [Mizan, Bentang Pustaka, Andrea Hirata, Ayah, Laskar Pelangi, Rainbow Troops, Internasional, Novel, Indonesia]",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786022911029",
              },
              {
                type: "ISBN_10",
                identifier: "6022911028",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 432,
            printType: "BOOK",
            categories: ["Fiction"],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "2.3.4.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=tBqoCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=tBqoCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=tBqoCQAAQBAJ&printsec=frontcover&dq=andrea+hirata&hl=&cd=4&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=tBqoCQAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=tBqoCQAAQBAJ",
          },
          saleInfo: {
            country: "ID",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 74000,
              currencyCode: "IDR",
            },
            retailPrice: {
              amount: 55500,
              currencyCode: "IDR",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=tBqoCQAAQBAJ&rdid=book-tBqoCQAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 74000000000,
                  currencyCode: "IDR",
                },
                retailPrice: {
                  amountInMicros: 55500000000,
                  currencyCode: "IDR",
                },
              },
            ],
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.co.id/books/download/Ayah-sample-epub.acsm?id=tBqoCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=tBqoCQAAQBAJ&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Dia ingin mengajaknya melihat pawai 17 Agustus, mengunjungi pasar malam, membelikannya mainan, menggandengnya ke masjid, mengajarinya berpuasa dan mengaji, dan memboncengnya naik sepeda saban sore ke taman kota. [Mizan, Bentang Pustaka, ...",
          },
        },
        {
          kind: "books#volume",
          id: "FV18DLfHz0MC",
          etag: "vQp+QqR3WQc",
          selfLink: "https://www.googleapis.com/books/v1/volumes/FV18DLfHz0MC",
          volumeInfo: {
            title: "Edensor",
            subtitle: "Tetralogi Laskar Pelangi",
            authors: ["Andrea Hirata"],
            publisher: "Bentang Pustaka",
            publishedDate: "2007-01-01",
            description:
              "Novel ketiga dari tetralogi Laskar Pelangi ini bercerita tentang petualangan Ikal dan Arai di Eropa. Setelah berhasil memperoleh beasiswa ke Prancis, Ikal dan Arai, mengalami banyak kejadian yang orang biasa sebut sebagai kejutan budaya. Banyak kebiasaan dan peradaban Eropa yang berlainan sama sekali dengan peradaban yang selama ini mereka pahami sebagai orang Indonesia,khususnya Melayu. Di dalam buku ini juga Ikal dan Arai kembali menuai karma akibat kenakalan-kenalan yang pernah mereka lakukan semasa kecil dan remaja dulu. Pembaca akan dibawa ke dalam petualangan mereka menyusuri Eropa dengan berbagai pengalaman yang mencengangkan, mencekam, membuat terbahak, sekaligus berurai air mata. Aku ingin mendaki puncak tantangan, menerjang batu granit kesulitan, menggoda mara bahaya, dan memecahkan misteri dengan sains. Aku ingin menghirup berupa-rupa pengalaman lalu terjun bebas menyelami labirin lika-liku hidup yang ujungnya tak dapat disangka. Aku mendamba kehidupan dengan kemungkinan-kemungkinan yang bereaksi satu sama lain seperti benturan molekul uranium: meletup tak terduga-duga, menyerap, mengikat, mengganda, berkembang, terurai, dan berpencar ke arah yang mengejutkan. Aku ingin ke tempat-tempat yang jauh, menjumpai beragam bahasa dan orang-orang asing. Aku ingin berkelana, menemukan arahku dengan membaca bintang gemintang. Aku ingin mengarungi padang dan gurun-gurun, ingin melepuh terbakar matahari, limbung dihantam angin, dan menciut dicengkeram dingin. Aku ingin kehidupan yang menggetarkan, penuh dengan penaklukan. Aku ingin hidup! Ingin merasakan sari pati hidup! Novel ini kian meneguhkan kehadiran tetralogi Laskar Pelangi sebagai karya unggul yang pasti disukai pembaca. —Ahmad Tohari, sastrawan Andrea Hirata membuatku mabuk kepayang!—Linda Christanty, cerpenis Berpotensi memberikan letupan inspirasi bagi pembacanya.—Tabloid Wanita Indonesia [Bentang, Motivasi, Inspirasi, Novel, Indonesia]",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9791227020",
              },
              {
                type: "ISBN_13",
                identifier: "9789791227025",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 312,
            printType: "BOOK",
            categories: ["Indonesian fiction"],
            averageRating: 4,
            ratingsCount: 75,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.2.3.0.preview.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=FV18DLfHz0MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=FV18DLfHz0MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=FV18DLfHz0MC&printsec=frontcover&dq=andrea+hirata&hl=&cd=5&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=FV18DLfHz0MC&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Edensor.html?hl=&id=FV18DLfHz0MC",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=FV18DLfHz0MC&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Novel ini kian meneguhkan kehadiran tetralogi Laskar Pelangi sebagai karya unggul yang pasti disukai pembaca. —Ahmad Tohari, sastrawan Andrea Hirata membuatku mabuk kepayang!—Linda Christanty, cerpenis Berpotensi memberikan letupan ...",
          },
        },
        {
          kind: "books#volume",
          id: "ZPi96HIG76AC",
          etag: "iwHjaqrNlxQ",
          selfLink: "https://www.googleapis.com/books/v1/volumes/ZPi96HIG76AC",
          volumeInfo: {
            title: "The Rainbow Troops",
            authors: ["Andrea Hirata", "Angie Kilbane"],
            publisher: "Bentang Pustaka",
            publishedDate: "2009-12-01",
            description:
              "Andrea Hirata is an Indonesian novelist. His debut novel The Rainbow Troops (known as Laskar Pelangi in Indonesia) shattered national sales records, making him the best selling author in Indonesia to date, reached over 5 millions readers, and contributed significantly to the development of modern Indonesian literature. The Rainbow Troops, set on Belitong Island, Indonesia, tells the story of a tight-knit group of students and their teachers fighting for education and dignity, even as they face continual hardship. Fabulously rich in natural resources, Belitong is also home to chronic poverty and educational discrimination. This amazing story tells of a persistent young teacher and her tireless efforts to fight for her ten students' right to an education. Together, they take the reader on a journey through the beauty of childhood friendship, the inspiration of love, and the power of education. The students' magnetic personalities and unflagging determination are sure to inspire. This inspirational novel is the first book in The Rainbow Troops Quartet. Sang Pemimpi (The Dreamer), Edensor, and Maryamah Karpov are the other three books in the series. The Rainbow Troops was adapted for the big screen. It has found success not only in Indonesia, but also worldwide, it received awards and recognition including: * Berlin International Film Festival (screened in Panorama), 2009 * Golden Butterfly Award, 23rd International Children & Young Adults Film Festival, Iran, 2009 * 3rd Place Audience Award, 11th Udine Far East International Film, 2009 * SIGNIS Award, Hong Kong International Film Festival, 2009 * Best Film, Bandung Film Festival, 2009 * Best Film, Indonesian Film Festival, 2009 , Nomination for Best Film, Asian Film Awards, 2009 * Best Film, CINEPANZ Award, 20th Children Film Festival Cologne, Germany [Mizan, Bentang, Novel, Inspirasi, Indonesia]",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9791227845",
              },
              {
                type: "ISBN_13",
                identifier: "9789791227841",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 484,
            printType: "BOOK",
            categories: ["Billiton Island (Indonesia)"],
            averageRating: 4,
            ratingsCount: 7,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.6.3.0.preview.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=ZPi96HIG76AC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=ZPi96HIG76AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=ZPi96HIG76AC&printsec=frontcover&dq=andrea+hirata&hl=&cd=6&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=ZPi96HIG76AC&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/The_Rainbow_Troops.html?hl=&id=ZPi96HIG76AC",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=ZPi96HIG76AC&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "This inspirational novel is the first book in The Rainbow Troops Quartet. Sang Pemimpi (The Dreamer), Edensor, and Maryamah Karpov are the other three books in the series. The Rainbow Troops was adapted for the big screen.",
          },
        },
        {
          kind: "books#volume",
          id: "FuKKRQAACAAJ",
          etag: "n60DXHN5icU",
          selfLink: "https://www.googleapis.com/books/v1/volumes/FuKKRQAACAAJ",
          volumeInfo: {
            title: "Laskar pemimpi",
            subtitle: "Andrea Hirata, pembacanya, dan modernisasi Indonesia",
            authors: ["Nurhady Sirimorok"],
            publishedDate: "2008",
            description:
              "Literary criticism on Andrea Hirata, an Indonesian writer.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9793457953",
              },
              {
                type: "ISBN_13",
                identifier: "9789793457956",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 191,
            printType: "BOOK",
            categories: ["Short stories, Indonesian"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=FuKKRQAACAAJ&dq=andrea+hirata&hl=&cd=7&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=FuKKRQAACAAJ&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Laskar_pemimpi.html?hl=&id=FuKKRQAACAAJ",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=FuKKRQAACAAJ&hl=&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Literary criticism on Andrea Hirata, an Indonesian writer.",
          },
        },
        {
          kind: "books#volume",
          id: "p1sEyhlOsBkC",
          etag: "Vw766wUhIus",
          selfLink: "https://www.googleapis.com/books/v1/volumes/p1sEyhlOsBkC",
          volumeInfo: {
            title: "Sastra di Sekolah Sapardi Djoko Damono",
            publisher: "Yayasan Obor Indonesia",
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 168,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "1.3.4.0.preview.1",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=p1sEyhlOsBkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=p1sEyhlOsBkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=p1sEyhlOsBkC&pg=PA107&dq=andrea+hirata&hl=&cd=8&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=p1sEyhlOsBkC&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Sastra_di_Sekolah_Sapardi_Djoko_Damono.html?hl=&id=p1sEyhlOsBkC",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.co.id/books/download/Sastra_di_Sekolah_Sapardi_Djoko_Damono-sample-pdf.acsm?id=p1sEyhlOsBkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=p1sEyhlOsBkC&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "<b>Andrea Hirata</b> : Sebuah Kemungkinan dalam Bersastra M. Yoesoef Universitas Indonesia *** Judul buku : Laskar Pelangi dan Sang Pemimpi Penulis : <b>Andrea Hirata</b> Penerbit : Bentang Tahun terbit : 2005 dan 2006 pemimpi pelangi Sentat ebuah&nbsp;...",
          },
        },
        {
          kind: "books#volume",
          id: "sxT-HENyUZQC",
          etag: "nWHQl1IQzjs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/sxT-HENyUZQC",
          volumeInfo: {
            title: "Cinta di Dalam Gelas",
            authors: ["Andrea Hirata"],
            publisher: "Bentang Pustaka",
            publishedDate: "2016",
            description:
              "CINTA DI DALAM GELAS bertutur tentang tugas berat di pundak Ikal. Dia harus membantu Maryamah memenangkan pertandingan catur saat 17 Agustus nanti. Maryamah, yang menyentuh bidak catur saja belum pernah, harus mengalahkan juara catur selama dua tahun berturut-turut yang sekaligus juga mantan suaminya. Namun, lebih dari itu, jenis kelamin Maryamah menjadi tantangan berat untuk bisa mencebur ke dalam pertandingan penuh harkat bagi kaum lelaki ini. Bagi penonton yang pro maupun kontra, usaha Maryamah jelas sebuah suguhan yang sangat menarik. Begitu pulakah dengan Maryamah? [Mizan, Bentang, Novel, Inspirasi, Indonesia]",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "6028811319",
              },
              {
                type: "ISBN_13",
                identifier: "9786028811316",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 340,
            printType: "BOOK",
            categories: ["Indonesian fiction"],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.1.3.0.preview.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=sxT-HENyUZQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=sxT-HENyUZQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "id",
            previewLink:
              "http://books.google.co.id/books?id=sxT-HENyUZQC&printsec=frontcover&dq=andrea+hirata&hl=&cd=9&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=sxT-HENyUZQC&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Cinta_di_Dalam_Gelas.html?hl=&id=sxT-HENyUZQC",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=sxT-HENyUZQC&hl=&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "CINTA DI DALAM GELAS bertutur tentang tugas berat di pundak Ikal.",
          },
        },
        {
          kind: "books#volume",
          id: "NMcXmwEACAAJ",
          etag: "1JSW24G5v3c",
          selfLink: "https://www.googleapis.com/books/v1/volumes/NMcXmwEACAAJ",
          volumeInfo: {
            title: "Laskar pelangi",
            authors: ["Andrea Hirata"],
            publisher: "goobookstore",
            publishedDate: "2011",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "602881136X",
              },
              {
                type: "ISBN_13",
                identifier: "9786028811361",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 534,
            printType: "BOOK",
            categories: ["Indonesian fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "en",
            previewLink:
              "http://books.google.co.id/books?id=NMcXmwEACAAJ&dq=andrea+hirata&hl=&cd=10&source=gbs_api",
            infoLink:
              "http://books.google.co.id/books?id=NMcXmwEACAAJ&dq=andrea+hirata&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Laskar_pelangi.html?hl=&id=NMcXmwEACAAJ",
          },
          saleInfo: {
            country: "ID",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "ID",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=NMcXmwEACAAJ&hl=&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
      ],
    };
  },
  actions: {
    async searchG(query){
      try {
        console.log(query);
        const { data } = await axios({
          method: "post",
          url: urlServer + "gsearch",
          data: { query },
        });
        this.books = data.items;
        router.push("/search")
      } catch (error) {
        console.log(error)
      }
    }
  }
});
