import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import React from 'react';
import './Popovers.css';

function Popovers () {

    return (
        <div className="mt-2 d-flex w-400 justify-content-space-evenly">

        <OverlayTrigger 
            placement={'left'}
            overlay={
              <Tooltip className='popover-overlay'>
                Calories are the energy in food. Your body has a constant demand for energy and uses the calories from food to keep functioning. Energy from calories fuels your every action, from fidgeting to marathon running.
              </Tooltip>
          }>
          <Button variant="primary" className='popover-button'>What is a Calorie?</Button>
        </OverlayTrigger>

        <OverlayTrigger
            placement={'bottom'}
            overlay={
              <Tooltip className='popover-overlay'>
                Your weight is a balancing act, but the equation is simple: If you eat more calories than you burn, you gain weight. And if you eat fewer calories and burn more calories through physical activity, you lose weight.
                
                To lose about 1 pound per week, aim to eat 500 fewer calories per day, or burn those calories from exercise. Do not go below 1,200 calories per day without a doctors recommendation. 
              </Tooltip>
          }>
          <Button variant="secondary" className='popover-button'>How Can I Lose Weight?</Button>
        </OverlayTrigger>

        <OverlayTrigger
            placement={'bottom'}
            overlay={
              <Tooltip className='popover-overlay'>
                  Cutting calories requires change but doesn't have to be difficult. These changes can have a big impact on the number of calories you consume:

                <li>Skipping high-calorie, low-nutrition items</li>
                <li>Swapping high-calorie foods for lower calorie options</li>    
                <li>Reducing portion sizes</li>
              </Tooltip>
            }>
          <Button variant="primary" className='popover-button'>Cutting Calories</Button>
        </OverlayTrigger>

        <OverlayTrigger
            placement={'right'}
            overlay={
              <Tooltip className='popover-overlay'>
                <li>Add more activity into the day</li>
                <li>Set goals</li>
                <li>Use smaller plates</li>
                <li>Eat more slowly</li>
                <li>Add more vegetables, fruits, whole grains, and nuts to the diet</li>
                <li>Reduce stress </li>
              </Tooltip>
          }>
          <Button variant="secondary" className='popover-button'>Tips for Weight Loss</Button>
        </OverlayTrigger>

    </div >
    )
}

export default Popovers;