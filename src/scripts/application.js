jQuery( document ).ready(function() {

    var element = jQuery('.js-anim');

    var tl = new TimelineLite();

    var time = '-= 0.2';

    tl.from( element , 0.5 ,
        {
            marginTop : -15,
            autoAlpha : 0
        }
    );

    tl.from( element.find(".green") , 0.3 ,
        {
            marginTop : -20,
            autoAlpha : 0
        },
        time
    );
    tl.from( element.find(".red") , 0.3 ,
        {
            scale : 0.5,
            autoAlpha : 0
        },
        time
    );
    tl.from( element.find(".blue") , 0.3 ,
        {
            scale : 0.5,
            autoAlpha : 0
        },
        '-= 0.2'
    );

    tl.from( element.find(".cercle-1") , 0.3 ,
        {
            padding : 10,
            autoAlpha : 0
        },
        '-= 0.2'
    );

    tl.from( element.find(".cercle-2") , 0.3 ,
        {
            padding : 10,
            autoAlpha : 0
        },
        '-= 0.2'
    );

    tl.from( element.find(".cercle-3") , 0.3 ,
        {
            padding : 10,
            autoAlpha : 0
        },
        '-= 0.2'
    );

    tl.from( element.find(".cercle-3 span") , 0.3 ,
        {
            scale : 0,
            autoAlpha : 0
        }
    );

    tl.pause();

    jQuery('.js-btn-play').on( 'click' , function (e) {
        tl.paused() ? tl.play() : ( tl.reversed() ? tl.play() :tl.reverse() );
    });

    jQuery('.js-btn-reverse').on( 'click' , function (e) {
        tl.reverse();
    });

    var tl2 = new TimelineLite({onComplete:function() {
        this.restart()}
    });

    var element2 = jQuery('.anim2');

    tl2.staggerTo(element2.find('.item') , 0.5 , {
        marginTop : 50
    } , 0.1 );

    tl2.staggerTo(element2.find('.item') , 0.5 , {
        marginTop : 0
    } , 0.1 );


    var ui = {
        lampe : jQuery('#lampe'),
        roda : jQuery('#roda')
    };


    var dzair = new TimelineLite();



    dzair.fromTo( ui.lampe , 0.3, {
        scale:"0",
        opacity: 0,
        transformOrigin:"50% 50%"
    },
        {
            scale:"1.1",
            opacity: 1
        }
    ).to( ui.lampe , 0.3,
        {
            scale:"1"
        }
    );

    dzair.from( ui.roda , 0.5 , {
        opacity : 0,
        scale : 0.5
    } , 0.2 )  ;
    dzair.to( ui.roda , 3, {rotation:360, transformOrigin:"50% 50%" , ease:Linear.easeNone, repeat:-1}, 0);

    var headAnim = new TimelineLite();
    var profil = jQuery('.profil');


    headAnim.fromTo( profil , 0.3, {
            scale:"0",
            opacity: 0,
            transformOrigin:"50% 50%"
        },
        {
            scale:"1.3",
            opacity: 1
        }
    ).to( profil , 0.2,
        {
            scale:"1"
        }
    );


    headAnim.fromTo( profil.find('img') , 0.3, {
            scale:"0",
            opacity: 0,
            transformOrigin:"50% 50%"
        },
        {
            scale:"1",
            opacity: 1
        }, 0.1
    );

    headAnim.to( profil , 0.3, {  x:-100 ,  ease:Back.easeInOut });
    headAnim.pause();
    
});