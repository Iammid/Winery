document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('earningsChart').getContext('2d');
    var earningsChart = new Chart(ctx, {
        type: 'line', // Change to 'bar', 'pie', etc. based on preference.
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: 'Earnings',
                data: [120, 190, 300, 500, 200, 300, 450], // Fake data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for submitting the form
    document.getElementById('saveCardButton').addEventListener('click', function () {
        saveCard();
    });
});

// Function to save the new card
function saveCard() {
    var vineyardName = document.getElementById('vineyardName').value;
    var vineyardLocation = document.getElementById('vineyardLocation').value;

    if (vineyardName && vineyardLocation) {
        // Create a new anchor tag
        var newAnchor = document.createElement('a');
        newAnchor.href = 'table.html'; // Set the href attribute

        // Create a new card div
        var newCard = document.createElement('div');
        newCard.classList.add('vineyard-card');
        newCard.innerHTML = `
            <h4>${vineyardName}</h4>
            <p>Location: ${vineyardLocation}</p>
            <i class="fas fa-wine-glass white-icon"></i>
        `;

        // Append the card content to the anchor tag
        newAnchor.appendChild(newCard);

        // Append the anchor tag to the container
        document.querySelector('.vineyard-cards').appendChild(newAnchor);
    }
}


document.getElementById('searchButton').addEventListener('click', function () {
    var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    var vineyardCards = document.querySelectorAll('.vineyard-card');

    if (searchInput === '') {
        // If search input is empty, show all cards and remove the `.filtered` class
        vineyardCards.forEach(function(card) {
            card.style.display = 'inline-block'; // Restore original display style
        });
        document.querySelector('.vineyard-cards').classList.remove('filtered');
    } else {
        // Filter cards as per search input
        vineyardCards.forEach(function(card) {
            var vineyardName = card.querySelector('h4').innerText.toLowerCase();
            if (vineyardName.includes(searchInput)) {
                card.style.display = 'block'; // Keep this as block for filtered view
            } else {
                card.style.display = 'none';
            }
        });
        document.querySelector('.vineyard-cards').classList.add('filtered');
    }
});




$(document).ready(function(){
$('.dropdown-toggle').dropdown();
});
// Add this JavaScript code to handle opacity changes
$('#addCardModal').on('show.bs.modal', function () {
    $('.modal-backdrop').css('opacity', '0.5'); // Reduce opacity when modal is shown
});

$('#addCardModal').on('hidden.bs.modal', function () {
    $('.modal-backdrop').css('opacity', '0'); // Restore normal opacity when modal is closed
});

$('#saveCardButton').on('click', function () {
    $('.modal-backdrop').css('opacity', ''); // Restore normal opacity when user saves
});