import { shallowMount } from '@vue/test-utils'
import ContrastRatingCard from '@/components/ContrastRatingCard.vue'

describe('ContrastCalculator.vue', () => {
  it('renders contrast when passed', () => {
    const contrast = 21;
    const wrapper = shallowMount(ContrastRatingCard, {
      propsData: { contrast }
    })

    expect(wrapper.text()).toContain(contrast)
  })

  describe('WCAG PASS checks', () => {
    it('should pass "WCAG AA Large Text"', () => {
      const contrast = 3.5;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(0);
      const expectedClasses = ['column', 'rating', 'rating--pass'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AA Large Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should pass "WCAG AA Normal Text"', () => {
      const contrast = 4.5;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(1);
      const expectedClasses = ['column', 'rating', 'rating--pass'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AA Normal Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should pass "WCAG AAA Large Text"', () => {
      const contrast = 4.5;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(2);
      const expectedClasses = ['column', 'rating', 'rating--pass'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AAA Large Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should pass "WCAG AAA Normal Text"', () => {
      const contrast = 7;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(3);
      const expectedClasses = ['column', 'rating', 'rating--pass'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AAA Normal Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should pass ALL WCAG ratings', () => {
      const contrast = 21;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const passed = wrapper.findAll('.rating--pass').length;

      expect(passed).toEqual(4);
    })
  })

  describe('WCAG FAIL checks', () => {
    it('should fail "WCAG AA Large Text"', () => {
      const contrast = 2.9;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(0);
      const expectedClasses = ['column', 'rating', 'rating--fail'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AA Large Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should fail "WCAG AA Normal Text"', () => {
      const contrast = 4.4;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(1);
      const expectedClasses = ['column', 'rating', 'rating--fail'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AA Normal Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should fail "WCAG AAA Large Text"', () => {
      const contrast = 4.4;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(2);
      const expectedClasses = ['column', 'rating', 'rating--fail'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AAA Large Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should fail "WCAG AAA Normal Text"', () => {
      const contrast = 6.9;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const ratings = wrapper.findAll('.column');
      const WCAG_AA_LargeText = ratings.at(3);
      const expectedClasses = ['column', 'rating', 'rating--fail'];

      expect(WCAG_AA_LargeText.text()).toEqual('WCAG AAA Normal Text');
      expect(WCAG_AA_LargeText.classes()).toEqual(expectedClasses);
    })

    it('should fail ALL WCAG ratings', () => {
      const contrast = 1;
      const wrapper = shallowMount(ContrastRatingCard, {
        propsData: { contrast }
      })

      const passed = wrapper.findAll('.rating--pass').length;
      const failed = wrapper.findAll('.rating--fail').length;

      expect(passed).toEqual(0);
      expect(failed).toEqual(4);
    })
  })

})
