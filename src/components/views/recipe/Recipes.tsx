'use client';

import React, { useState } from 'react';

import { Modal } from '@components';
import { useTranslate } from '@app/hooks';
import recipe1 from '@assets/images/home/recipe.png';
import Recipe2 from '@assets/images/recipes/recipe2.png';
import Recipe3 from '@assets/images/recipes/recipe3.png';
import modalRecipe from '@assets/images/recipes/modalRecipe.svg';

import RecipeItem from './RecipeItem'
import RecipeModal from './RecipeModal';

const Recipes = () => {
  const t = useTranslate('Comp_Recipe_Menu');
  const [toggleSauseModal, SetToggleSauseModal] = useState(false);
  const [toggleBreadeModal, SetToggleBreadeModal] = useState(false);
  const [toggleStuffingModal, SetToggleStuffingModal] = useState(false);
  const ingredientsContents1 = [t('LOREM_IPSUM'), t('LOREM_IPSUM'), t('LOREM_IPSUM')];
  const ingredientsContents2 = [t('LOREM_IPSUM'), t('LOREM_IPSUM'), t('LOREM_IPSUM')];

  const ingredientsContents3 = [t('LOREM_IPSUM'), t('LOREM_IPSUM'), t('LOREM_IPSUM')];

  return (
    <div className="recipe_menu">
      <h3 className="text-24 recipe-title rounded">{t('RECIPE')}</h3>
      <div className="recipe-items">
        <div className="recipe-item">
          <RecipeItem
            imgUrl={recipe1}
            title={t('SAUSE_TITLE')}
            description={t('SAUSE_DESCRIPTION')}
            calories={t('CALORIES')}
            time={t('TIME')}
            btnText={t('DETAILS')}
            slug=""
            onClick={() => SetToggleSauseModal(true)}
          />
        </div>
        <div className="recipe-item">
          <RecipeItem
            imgUrl={Recipe2}
            title={t('BREAD_TITLE')}
            description={t('BREAD_DESCRIPTION')}
            calories={t('CALORIES')}
            time={t('TIME')}
            btnText={t('DETAILS')}
            slug=""
            onClick={() => SetToggleBreadeModal(true)}
          />
        </div>
        <div className="recipe-item">
          <RecipeItem
            imgUrl={Recipe3}
            title={t('STUFFING_TITLE')}
            description={t('STUFFING_DESCRIPTION')}
            calories={t('CALORIES')}
            time={t('TIME')}
            btnText={t('DETAILS')}
            slug=""
            onClick={() => SetToggleStuffingModal(true)}
          />
        </div>
      </div>
      <Modal toggleShow={toggleSauseModal} size="lg">
        <RecipeModal
          imgUrl={modalRecipe.src}
          title={t('SAUSE_TITLE')}
          description={t('SAUSE_DESCRIPTION')}
          calories={t('CALORIES')}
          time={t('TIME')}
          onClick={() => SetToggleSauseModal(false)}
          wayDescririon={t('WAY_DESCRIPTION')}
          ingredientsContents={ingredientsContents1}
        />
      </Modal>
      <Modal toggleShow={toggleBreadeModal} size="lg">
        <RecipeModal
          imgUrl={Recipe2.src}
          title={t('BREAD_TITLE')}
          description={t('BREAD_DESCRIPTION')}
          calories={t('CALORIES')}
          onClick={() => SetToggleBreadeModal(false)}
          time={t('TIME')}
          wayDescririon={t('WAY_DESCRIPTION')}
          ingredientsContents={ingredientsContents2}
        />
      </Modal>
      <Modal toggleShow={toggleStuffingModal} size="lg">
        <RecipeModal
          imgUrl={Recipe3.src}
          title={t('STUFFING_TITLE')}
          description={t('STUFFING_DESCRIPTION')}
          calories={t('CALORIES')}
          onClick={() => SetToggleStuffingModal(false)}
          time={t('TIME')}
          wayDescririon={t('WAY_DESCRIPTION')}
          ingredientsContents={ingredientsContents3}
        />
      </Modal>
    </div>
  );
};

export default Recipes;
