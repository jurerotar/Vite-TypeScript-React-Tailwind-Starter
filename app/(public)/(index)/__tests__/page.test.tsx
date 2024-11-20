import { render, screen } from '@testing-library/react';
import { HomePage } from 'app/(public)/(index)/page';
import { describe, expect, test } from 'vitest';

describe('Home page', () => {
  test('Should render', () => {
    render(<HomePage />);
    expect(screen.getByTestId('test-tag')).toBeInTheDocument();
  });
});
