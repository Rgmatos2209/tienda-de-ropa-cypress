describe('search elements', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('search elements with multiple results',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type("dress");
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.titleResult).should('contain','dress');
        })
    })
    it('search elements with multiple results',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type("qwerty");
            cy.get(index.searchButton).click();
        })
    })
})