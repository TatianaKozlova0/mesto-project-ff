// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = name;

    const cardImage = card.querySelector('.card__image');
    cardImage.src = link;

    const cardDeleteButton = card.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', deleteCard);
	
    return card;
};

// @todo: Функция удаления карточки
function deleteCard(event) {
    event.target.closest('.card').remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
    placesList.append(createCard(item.name, item.link, deleteCard));
});

