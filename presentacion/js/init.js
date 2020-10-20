$(document).ready(function(){
    setInterval('cambiarImagenes()', 4000);
  });

function mostrarContenido(opcion){
    let texto;
    if(opcion === 'nosotros'){
        texto = obtenerNosotros(); 
        $("#content").html(texto); 
    }else if(opcion === 'mision'){
        texto = obtenerMision(); 
        $("#content").html(texto); 

    }else if(opcion === 'vision'){
        texto = obtenerVision(); 
        $("#content").html(texto); 
    }else if(opcion === 'noticias'){
        texto = obtenerNoticias(); 
        $("#content").html(texto); 
    }
}

function obtenerNosotros(){
    let texto = '<h2>Nosotros</h2>'  
    texto += '<p><strong>SIERRA ALTA</strong> es una compañía comercializadora y distribuidora de productos de consumo masivo a nivel nacional';
    texto += ', fundada en Quito en el año 2010 poseemos alta experiencia en el sector logístico y de distribución,';
    texto += 'contamos con marcas propias en diferentes categorías reconocidas en el mercado, representamos de manera exclusiva marcas ';
    texto += 'líderes a nivel nacional, hemos mejorado nuestros procesos para satisfacer';
    texto += 'las necesidades de nuestros clientes y garantizar la calidad del servicio.</p>'
    return texto;

}

function obtenerMision(){
    let texto = '<h2>Misión</h2>'  
    texto += '<p>Nos especializamos en lograr la satisfacción del cliente a través de la calidad de nuestros productos, ';
    texto += 'servicios, eficiencia y calidad ';
    texto += 'liderando con innovación y tecnología el mercado de consumo masivo y la industria.</p';
    return texto;
}


function obtenerVision(){
    let texto = '<h2>Visión</h2>'  
    texto += '<p>Ser una compañía que expande sus operaciones a nivel nacional brindando un desempeño financiero ';
    texto += 'a largo plazo, integrando la sustentabilidad como estrategia de negocio, ';
    texto += 'comprometidos con el desarrollo de nuestra gente y del país.</p';
    return texto;
}

function obtenerNoticias(){
    let texto = '<h2>Noticias</h2>'  
    texto += '<p>Nos especializamos en lograr la satisfacción del cliente a través de la calidad de nuestros productos,';
    texto += 'servicios, eficiencia y calidad liderando con innovación y tecnología el mercado de consumo masivo y la industria.';
    texto += '</p';
    return texto;
}


function cambiarImagenes(){
    var $active = $('#galeria .active');
    var $next = ($('#galeria .active').next().length > 0) ? $('#galeria .active').next() : $('#galeria img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}