(function($){ 
	closureInlineScript = function(){
		$('<span></span>').appendTo('.block-menu > h2');
		$('#block-uc-cart-cart > *').wrapAll($('.cart-block-view-cart a').clone().html(''));
		$('.block-views.contextual-links-region, .block-nodeblock.contextual-links-region').each(function(){
			if(!$('>h2', this).length){
				$(this).addClass('t-contextualborder');
			}
		});
		$('.view-display-id-productsuggestions').parents('.block-views').addClass('t-color-1');
		$('.view-display-id-commingevents').parents('.block-views').addClass('t-color-2');
		$('.block-webform label').overlapped();

	}
	$(function(){
		$('.t-carrousel').each(function(){
			var prev = $('<span class="t-prev"></span>').appendTo(this);
			var next = $('<span class="t-next"></span>').appendTo(this);
			carousel($('.view-content',this), prev, next, 2);
		});
	}); 

	$(function(){    
		$("#edit-submitted-email").focus(function(){
			$('label[for="'+$(this).attr('id')+'"]').hide()
		})
		$(".li_editorial + .menu").mouseover(function() {
			$( this ).prev().addClass("back-azul");
		}).mouseout(function() {
			$( this ).prev().removeClass("back-azul");
		})
		$(".li_libreria + .menu").mouseover(function() {
			$( this ).prev().addClass("back-rojo");
		}).mouseout(function() {
			$( this ).prev().removeClass("back-rojo");
		})
		$(".li_revista + .menu").mouseover(function() {
			$( this ).prev().addClass("back-verde");
		}).mouseout(function() {
			$( this ).prev().removeClass("back-verde");
		})
		$(".li_formacion + .menu").mouseover(function() {
			$( this ).prev().addClass("back-naranja");
		}).mouseout(function() {
			$( this ).prev().removeClass("back-naranja");
		})

		if($('#block-system-main-menu').find('.active').length !== 9){  
			menu_active = $('#block-system-main-menu').find('.active').parent();
			menu_active.find(".menu").css('display','block');
			$('#block-system-main-menu').css("height","60");
		}
		$( ".li_editorial" ).parent().find( "ul" ).css( "background-color", "#0070ba" );        
		var libreria= $( ".li_libreria" ).parent().find( "ul" );
		var revista= $( ".li_revista" ).parent().find( "ul" ); 
		var formacion= $( ".li_formacion" ).parent().find( "ul" ); 
		libreria.css( "background-color", "#ed1941");
		libreria.css("left", "0px");
		revista.css("background-color", "#6f9a34")
		revista.css("left", "0px");
		formacion.css("background-color", "#f68b1f")
		formacion.css("left", "0px");

	
		$('.google_books .google_books_field_name').html('');
		$('.google_books .google_books_field_data a ').html('leer algunas páginas');
		
		$('.page-user #edit-mailchimp-lists-mailchimp-quiero-recibir-el-bolet-n-subscribe').attr('tabindex','12');
		
		/*Recarga la pagina despues de hacer la peticion AJAX de agregar un elemento al CART*/

		$(document).ajaxComplete(function(event, jqXHR, settings){
			var mydata =  jQuery.parseJSON(jqXHR.responseText);
			console.log('mydata');
			console.log(mydata);
			if(mydata[1].command === 'ucAjaxCartAltAddItemSuccess'){
				if ( $('body').hasClass('logged-in') ){
					location.reload();
				}
				else
					window.location.href = "/cart";
			}
			if(mydata[1].command === 'insert'){
				$('.page-user-register select[id^="edit-field-user-ubicaci-n-und-0-province"] option:first-child').text('Selecciona');
				$('.page-user-register [id^="edit-field-nombre-s-und-0-value"]').attr('tabindex','1');
				$('.page-user-register [id^="edit-field-apellidos-und-0-value"]').attr('tabindex','2');
				$('.page-user-register [id^="edit-name"]').attr('tabindex','3');
				$('.page-user-register [id^="edit-mail"]').attr('tabindex','4');
				$('.page-user-register [id^="edit-pass-pass1"]').attr('tabindex','5');
				$('.page-user-register [id^="edit-pass-pass2"]').attr('tabindex','6');
				$('.page-user-register [id^="edit-field-user-ubicaci-n-und-0-country"]').attr('tabindex','7');
				$('.page-user-register [id^="edit-field-user-ubicaci-n-und-0-province"]').attr('tabindex','8');
				$('.page-user-register [id^="edit-field-user-ubicaci-n-und-0-city"]').attr('tabindex','9');
				$('.page-user-register input[id^="edit-mailchimp-lists-mailchimp-quiero-recibir-el-bolet-n-subscribe"]').attr('tabindex','10');
				$('.page-user-register fieldset[id^="edit-mailchimp-lists"]').removeAttr('tabindex');

			}

			if(mydata[1].command === 'viewsScrollTop'){
				$.fn.revistaActual();
			}
			if(mydata[1].selector === '#payment-pane'){
				jQuery('.page-cart-checkout .form-radios div:nth-of-type(2)').append('<ul class="pago-colombia"><li>Tarjeta de crédito<img src="/sites/all/imagenesfancybox/visa.gif"/><img src="/sites/all/imagenesfancybox/master.gif"/><img src="/sites/all/imagenesfancybox/american.png"/><img src="/sites/all/imagenesfancybox/diners.gif"/></li><li>Pago con tarjeta débito de ahorros o corriente<img src="/sites/all/imagenesfancybox/pse.png"/></li><li>Pago en efectivo en bancos Bancolombia, Occidente Banco de Bogotá<img src="/sites/all/imagenesfancybox/codigo.png"/></li><li>Pago en efectivo en Puntos Vía Baloto<img src="/sites/all/imagenesfancybox/baloto.gif"/></li></ul>');
				jQuery('.page-cart-checkout .form-radios div:nth-of-type(2) label').html('Pago en Colombia');	
				jQuery('.page-cart-checkout .form-radios div:nth-of-type(1) label').html('Fuera de Colombia');
				jQuery('.page-cart-checkout .form-radios div:nth-of-type(1)').append('<ul class="fuera-colombia pago-colombia"><li>Tarjeta de crédito y pagos Paypal<img src="/sites/all/imagenesfancybox/paypal.gif"/></li></ul>');
				$('.page-cart-checkout #edit-panes-payment-payment-method .form-item').append('<a class="medios-de-pago" href="/node/29">¿Cómo funciona?</a>');
			}

	});

		/*busqueda topicos*/

		$.fn.extend({

			coloresTopicos: function (){
				var numResult = $('.resultados-topicos .panel-col-last .view').find('div.views-row').length;
				for(var i =1;i <= numResult;i++ ){
					var tempTipo = $('.resultados-topicos .panel-col-last .view .views-row-'+i+' .views-field-type span').text();
					switch (tempTipo) {
						case 'Evento':
						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-magenta');
						break;

						case 'Publicación':
						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-verde');
						break;  

						case 'revista':

						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-verde');

						break; 

						case 'Curso':

						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-naranja');

						break;  

						case 'Libro':

						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-azul');

						break;

						default:

						$('.resultados-topicos .panel-col-last .view .views-row-'+i+'').addClass('color-magenta');
					}
				}
			},
			nombreStock: function(stock, btnRecibe, url){
				var num = $(stock).text();
				if ( num <= 0){
					$(btnRecibe).html('<a class="boton-mas-info" href="'+url+'">Más información</a>');                 
				}
				else{
					$(btnRecibe).find('input').val('Inscríbete');    
				}
			},
			revistaActual: function(){

				var revista = $('.page-revista-js .home-revista .views-field-title span a').text();
				var numdiv = $('.page-revista-js .view-home-articulos.view-display-id-block_3').find('div.views-row').length;
				var cont = 0;

				for(var i=0; i <= numdiv; i++){
					var revistart = $('.page-revista-js .view-home-articulos .views-row-'+i+' .views-field-field-revista .field-content').text();
					if (revistart == revista){
						$('.page-revista-js .view-home-articulos.view-display-id-block_3 .views-row-'+i+'').css('display','inline-block');
						cont ++;
					} 
					if(cont <= 6){
						$('.page-revista-js .view-home-articulos.view-display-id-block_3 .item-list').hide();
					}
					if(cont == 6){
						return false;
					}
				} 
			}
		});

//$.fn.coloresTopicos();
$.fn.revistaActual();
if($('.page-user.logged-in td.cart-block-summary-items').text() != 'Tienes (0) productos')
	$('.page-user.logged-in .profile').append('<a class="ircheckout" href="/cart">Ir al carrito de compras</a>');



/*fin busqueda topicos*/

var num2 = $('.curso-detalle .total_cursos > span').text();

var nombre_curso = $.trim($('.curso-detalle .panel-2col .pane-node-title .pane-content').text());

if(num2 <= 0){
	$('.curso-detalle .btn_next_curso').html('Avísenme cuando haya');
	$('.curso-detalle .btn_next_curso').addClass('con-form');
	$('.curso-detalle .node-add-to-cart').addClass('no-show');
	$('.curso-detalle input#edit-submitted-nombre-del-curso').attr('value',nombre_curso);
	$('.curso-detalle .pane-webform-client-block-364574').addClass('muestra-form');
}

else{
	$('.curso-detalle .btn_next_curso').html('Inscríbete'); 
	$('.curso-detalle .form-actions input.node-add-to-cart').val('Inscríbete por '+$(".curso-detalle .pane-node-sell-price .sell-price .uc-price").text() +'');
}

		$('.detalle-revista .node-add-to-cart.form-submit').val('Inscríbete');
		/*placeholder para recibe nuestras novedades*/
		$('#webform-client-form-31 #edit-submitted-email').attr('placeholder', 'Digita tu correo');
		$('.page-user #user-login #edit-name').attr('placeholder', 'Correo electrónico');  
		$('.page-user #user-login #edit-pass').attr('placeholder', 'Contraseña');
		
		var myurl = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');    
		if (myurl == 'destination=cart/checkout'){
			$('ul.primary li:first-child a').attr('href','/user/register?destination=cart/checkout');
			$('.page-user.not-logged-in .t-middle').prepend('<div><ul class="pasos"><li><span>1</span><p>CARRITO DE COMPRAS</p></li><li><span>2</span><p>IDENTIFICACIÓN</p></li><li><span>3</span><p>REALIZAR COMPRA</p></li><li><span>4</span><p>PAGO</p></li></ul></div>');
		}
		

		/*entrada libre eventos*/
		var entrada = $('.curso-detalle .pane-node-field-entrada-libre .field-item.even').text();
		var cursoentrada = jQuery.trim(jQuery('.curso-detalle .panel-2col .pane-node-title .pane-content').text());
		if (entrada == 'entrada libre' || entrada == 'Entrada libre' || entrada == 'entrada-libre'){
			$('.curso-detalle .muestra-form').html('');
			jQuery('.curso-detalle .panel-pane.pane-custom.pane-1').html(' ');
			//$('.curso-detalle .panel-pane.pane-custom.pane-1').html('<a class="entrada-libre" href="/content/entrada-libre?curso='+cursoentrada+'">Incribirse</a>');
			//oculta modulos de la derecha
			$('.curso-detalle .panel-pane.pane-custom.pane-2 > .pane-content').hide();
			$('.curso-detalle .panel-pane.pane-custom.pane-3').hide();
			$('.curso-detalle .panel-pane.pane-entity-field-extra.pane-node-add-to-cart').hide();

			$('.curso-detalle .field.field-name-uc-product-image').addClass('entrada-libre-titulo')
			$('.curso-detalle .pane-node-field-field-fecha-inicio').css('border-top','1px solid #CCC');
		}
		var nombrecursoent = unescape(location.search.replace('?', '').split('=')[1]);
		$('.page-node-581726 .webform-client-form div #edit-submitted-nombre-del-curso').val(nombrecursoent);
	});



$( document ).ready(function() {

	jQuery('.page-node-82 .webform-confirmation > p').html(' Hemos recibido tu solicitud. Te enviaremos un respuesta lo más pronto posible. !Gracias!<br></br>');
	jQuery('.form-item-comment-body-und-0-value label').html('Haz tu comentario<span class="form-required" title="Este campo es obligatorio.">*</span>');

	setTimeout(function () {
		jQuery('.custom-filter ul li:nth-of-type(2)').trigger('click');	
	}, 10);
	var numdiv = $('.formacion-general.view-cursos').find('div.views-row').length;
	var numdivhome = $('.formacion-general .view-formacion').find('div.views-row').length;
	for (var i = 1; i <= numdiv; i++){
		var fecha = jQuery('.formacion-general.view-cursos .views-row-'+i+' .views-field-field-field-fecha-inicio .field-content').text();
		var precio = jQuery('.formacion-general.view-cursos .views-row-'+i+' .views-field-sell-price span span').text();
		var link = jQuery('.formacion-general.view-cursos .views-row-'+i+' .views-field-title span a').attr('href');  
		jQuery('.formacion-general.view-cursos .views-row-'+i+'').append('<a class="btn-ver-mas-cursos" href="'+link+'">Ver más</a>');
		if (precio == '$0')
			jQuery('.formacion-general.view-cursos .views-row-'+i+' .views-field-sell-price span span').text('Entrada libre');
		if (fecha == '')
			jQuery('.formacion-general.view-cursos .views-row-'+i+' .views-field-field-field-fecha-inicio .field-content').text('Abierto');
	}

	//home de formacion
	for (var i = 1; i <= numdivhome; i++){
		var link = jQuery('.formacion-general .view-formacion .views-row-'+i+' .views-field-title span a').attr('href');  
		var preciohome = jQuery('.formacion-general .view-formacion .views-row-'+i+' .views-field-sell-price span span').text();
		jQuery('.formacion-general .view-formacion .views-row-'+i+'').append('<a class="btn-ver-mas-cursos" href="'+link+'">Ver más</a>');
		if (preciohome == '$0')
			jQuery('.formacion-general .view-formacion .views-row-'+i+' .views-field-sell-price span span').text('Entrada libre');

	}

	function reinicia (){
		$('#delivery-pane .ajax-processed, #delivery-pane .form-text').val(''); 
		$('#delivery-pane .form-select option:first-child').attr('selected', 'selected'); 
	}  

	$('.not-logged-in .form-item-field-terminos-und.form-type-radios > label').html('Acepto los <a href="/terminos" target="_blank">términos y condiciones de Magisterio.com.co</a><span class="form-required" title="Este campo es obligatorio.">*</span>');
	$('.page-user .primary li:nth-of-type(2) a').text('Editar datos');
  //jQuery('.page-cart-checkout #edit-panes-billing-copy-address').trigger('click');
  $('.page-cart .t-middle').prepend('<div><ul class="pasos"><li><span>1</span><p>CARRITO DE COMPRAS</p></li><li><span>2</span><p>IDENTIFICACIÓN</p></li><li><span>3</span><p>REALIZAR COMPRA</p></li><li><span>4</span><p>PAGO</p></li></ul></div>');
  $('#delivery-pane').append('<div id="reiniciar-boton">Limpiar datos del formulario</div>')
  $('.page-user.not-logged-in .form-item.form-type-textfield.form-item-name input').removeAttr('placeholder');
  $('.page-user.not-logged-in .form-item.form-type-password.form-item-pass input').removeAttr('placeholder');
  $('.suscripciones #edit-attributes-4-9').attr('checked', true);
  /*metodos de pago*/
  jQuery('.page-cart-checkout .form-radios div:nth-of-type(2)').append('<ul class="pago-colombia"><li>Tarjeta de crédito<img src="/sites/all/imagenesfancybox/visa.gif"/><img src="/sites/all/imagenesfancybox/master.gif"/><img src="/sites/all/imagenesfancybox/american.png"/><img src="/sites/all/imagenesfancybox/diners.gif"/></li><li>Pago con tarjeta débito de ahorros o corriente<img src="/sites/all/imagenesfancybox/pse.png"/></li><li>Pago en efectivo en bancos Bancolombia, Occidente Banco de Bogotá<img src="/sites/all/imagenesfancybox/codigo.png"/></li><li>Pago en efectivo en Puntos Vía Baloto<img src="/sites/all/imagenesfancybox/baloto.gif"/></li></ul>');
  jQuery('.page-cart-checkout .form-radios div:nth-of-type(2) label').html('Pago en Colombia');	
  jQuery('.page-cart-checkout .form-radios div:nth-of-type(1) label').html('Fuera de Colombia');
  jQuery('.page-cart-checkout .form-radios div:nth-of-type(1)').append('<ul class="fuera-colombia pago-colombia"><li>Tarjeta de crédito y pagos Paypal<img src="/sites/all/imagenesfancybox/paypal.gif"/></li></ul>');
  $('.page-cart-checkout #edit-panes-payment-payment-method .form-item').append('<a class="medios-de-pago" href="/node/29">¿Cómo funciona?</a>');
  $('.ajax-register-links-wrapper .ajax-register-links li.last a').text('Olvidé mi contraseña');
  $('.page-cart-checkout #customer-pane span').text('DATOS DE ENVÍO');

  var fechaActual = $('#block-block-29 h2').text().replace('</span>','').replace('<span>','');

  $('#block-block-29 h2').text(fechaActual);



  if( $('.curso-detalle .panel-col-first .pane-entity-field .field-name-field-tipo-de-curso .field-item').text() === 'Evento' ){

  	$('.page-node-69').addClass('color-magenta');

  }



  /*cambniar copy en home eventos de ver mapa*/  

  $('#block-views-proximos-eventos-page .views-field-field-g-lugar .location.map-link a').text('Ver mapa');

  $('#block-views-proximos-eventos-page .views-field-field-g-lugar .location.map-link a').attr('target','_blank');


  /*categorias menu*/

  //.categorias-menu #menu-categorias

  $('#edit-field-categor-a-tid option').each(function (index) {
  	$('ul#menu-categorias').append(' <li data-val="'+ $(this).val() +'">'+ $(this).text() +'</li>')
  	$('ul#menu-categorias li:first-child').text('Todas');
  });
  /**/

  $('ul#menu-categorias li').click(function (event){
  	var opcionCate = $(event.target).attr('data-val');
  	$('ul#menu-categorias li').removeClass('active');
  	$(event.target).addClass('active');
  	$('#edit-field-categor-a-tid option[value='+ opcionCate +']').attr('selected','selected' );
  	$('#edit-field-categor-a-tid').trigger('change');
  });

  /*create my own timeline*/

  var anioActual = (new Date);

  var anioStr = anioActual.getFullYear().toString();

  for (var i=0; i<=10;i++){
  	$('.page-revista-numeros-anteriores .myTimeline .timelineList').append('<li class="timelineDate">'+ anioStr-- +'</li>');
  }
  $('.page-revista-numeros-anteriores .timelineDate').click(function (event){
  	var timelineTar = $(event.target);
  	$('.timelineDate').removeClass('active');
  	$(timelineTar).addClass('active'); 
  	$('.page-revista-numeros-anteriores #edit-field-a-o-de-edici-n-value-value-date').val( timelineTar.text() );
  	$('.page-revista-numeros-anteriores #edit-field-a-o-de-edici-n-value-value-date').trigger('change');
  });

	/*
  $('.resultados-topicos .custom-filter ul li').click(function (event){
  	var opcionLista = $(event.target);
  	var opcionFiltro = "";
  	switch(opcionLista.text()){
  		case 'Libros':
  		opcionFiltro = 'product';
  		break;

  		case 'Revistas':
  		opcionFiltro = 'revista';
  		break;

  		case 'Cursos':
  		opcionFiltro = 'curso';
  		break;

  		case 'Artículos':
  		opcionFiltro = 'article';
  		break;

  		case 'Videos':
  		opcionFiltro = 'video';
  		break;

  		default:
  		opcionFiltro = 'product';
  	}

  	$('.resultados-topicos .custom-filter ul li').removeClass('active');
  	opcionLista.addClass('active');
  	$('.resultados-topicos #edit-type option[value='+ opcionFiltro +']').attr('selected','selected' );
  	$('.resultados-topicos #edit-type').trigger('change');

  });
  */

  $('#reiniciar-boton').on('click', function(){
  	reinicia();
  });

});

})(jQuery);

