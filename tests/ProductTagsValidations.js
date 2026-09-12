import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it } from 'node:test';
import { throws } from 'node:assert/strict';

describe('Testing tags validations', () => {
    const { tags } = productEntity;

    describe(`Applying invalid types - Expected failure (The valid type is a ${ tags.type })`, () => {
        it('Number', () => {
            throws(() => ProductValidations.validateTags(1), { name: 'TypeError' });
            throws(() => ProductValidations.validateTags(1, undefined, 5));
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateTags(true, false) , { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateTags(() => new Object()), { name: 'TypeError' });
        });

        it('Undefined',  () => {
            throws(() => ProductValidations.validateTags(undefined), { name: 'NotNullError' });
        });

        it('Null', () => {
            throws(() => ProductValidations.validateTags(null), { name: 'TypeError' });
        });

        it('Symbol', () => {
            throws(() => ProductValidations.validateTags(Symbol()), { name: 'TypeError' });
        });

        it('BigInt', () => {
            throws(() => ProductValidations.validateTags(BigInt(1), BigInt(50)), { name: 'TypeError' });
        });
    });

    describe('Argument content', () => {
        it(`Exceed character length (The max length is ${ tags.maxCharactLength }) - Expected failure`, () => {
            throws(() => ProductValidations.validateTags('minha nova tag que exceder'), { name: 'RangeError' });
        });
       
        it('With valid arguments', () => {
            ProductValidations.validateTags('limpeza', 'verduras', 'cosméticos');
        });

        it('With valid and invalid arguments - Expected failure', () => {
            throws(() => ProductValidations.validateTags('limpeza', 70, 'cosméticos'), { name: 'TypeError' });
            throws(() => ProductValidations.validateTags('cosméticos', null, undefined, 'limpeza'), { name: 'TypeError' });
            throws(() => ProductValidations.validateTags('limpeza', undefined, undefined), { name: 'NotNullError' });
            throws(() => ProductValidations.validateTags(undefined, undefined, 'verduras'), { name: 'NotNullError' });
        });
    });
});
