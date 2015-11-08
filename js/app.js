require( [ 'jquery', 'howler', 'bootstrap', 'select2' ], function remainingTimeApp( $, Howl ) {
    var avaibleMinutes = [ 5, 10, 30, 60 ];
    var $timerSelect = $( '#timer-select' );
    var $startButton = $( '#start-btn' );
    var $customize = $( '.customize' );
    var $timerContainer = $( '.timer-container' );
    var $timerModal = $( '.timer-modal' );
    var $window = $( window );
    var $title = $( 'title' );
    var titleText = 'Simple Timer';

    var audio = new Howl.Howl({
        urls: [ 'audio/ship-bell.mp3' ],
        loop: true
    });

    var timerInterval, alarm, onblur;

    // Generating options to select
    avaibleMinutes.forEach( function( minutes, index ) {
        var $option = $( '<option/>' ).val( minutes ).text( minutes + ' Minutes' );

        $timerSelect.append( $option );

        if ( ++index === avaibleMinutes.length ) {
            $timerSelect.append( $option.clone().val( 'customize' ).text( 'Customize' ) );

            // Apply select2.
            $timerSelect.select2({
                minimumResultsForSearch: Infinity
            });
        }
    });

    /**
     * Play alarm if user has set.
     */
    function playAlarm() {
        if ( alarm ) {
            audio.play()
        }
     }

    /**
     * Stop alarm.
     */
    function stopAlarm() {
        if ( alarm ) {
            audio.stop();
        }
     }

    /**
     * Handle window.onblur and window.focus event
     */
    function handleOnblurFocus() {
        if ( onblur ) {
            $title.text( 'HandsUp, Timeout!' );
            $window.one( 'focus', function() {
                $title.text( titleText );
            });
        }
    }

    /**
     * Start timer
     */
    function startTimer(){
        var selectedVal = $timerSelect.val();
        var customizedHour = +$( '#customized-hour' ).val();
        var customizedMinutes = +$( '#customized-minutes' ).val();
        var $remainingTime = $( '#remaining-time' );
        var duration;

        alarm = $( '#play-alarm' ).prop( 'checked' );

        if ( selectedVal === 'customize' ) {
            duration = customizedHour * 3600 + customizedMinutes * 60;
        } else {
            duration = selectedVal * 60;
        }

        $timerContainer.addClass( 'hidden' );
        $timerModal.removeClass( 'hidden' );

        /**
         * Show remaining time.
         */
        function remainingTime(){
            var hour = parseInt( duration / 3600, 10 );
            var minute = parseInt( duration % 3600 / 60, 10 );
            var seconds = duration % 60;

            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            $remainingTime.text( hour + ':' + minute + ':' + seconds );

            if ( duration-- > 0 ) {
                timerInterval = setTimeout( remainingTime, 1000 );
            } else {

                // HandsUp! timeout.
                playAlarm();

                handleOnblurFocus();

                clearTimeout( timerInterval );
            }
        }

        remainingTime();
    }

    // DOM Event Handlers

    $startButton.on( 'click', startTimer );

    $( '.closing' ).on( 'click', function stopTimer( event ) {
        event.preventDefault();

        clearTimeout( timerInterval );

        $timerContainer.removeClass( 'hidden' );
        $timerModal.addClass( 'hidden' );

        stopAlarm();
    });

    $timerSelect.on( 'change', function() {
        if ( $timerSelect.val() === 'customize' ) {
            $customize.removeClass( 'hidden' );
        } else {
            $customize.addClass( 'hidden' );
        }
    })

    $window.on( 'blur', function() {
        onblur = true;
    });
    // /DOM Event Handlers
});
