import React from 'react'
import './button.css'

function button() {
    return (
        <div>
            <label>
                <input class="toggle-checkbox" type="checkbox">
                    <div class="toggle-slot">
                        <div class="sun-icon-wrapper">
                            <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                        </div>
                        <div class="toggle-button"></div>
                        <div class="moon-icon-wrapper">
                            <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                        </div>
                    </div>
                </input>
            </label>
        </div>
    )
}

export default button