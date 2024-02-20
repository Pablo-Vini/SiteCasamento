package com.example.Casamento.item;

public record ItemResponseDTO(Integer id, String nome, String preco, String loja, String imagem) {
	public ItemResponseDTO(Item item) {
		this(item.getId(), item.getNome(), item.getLoja(), item.getPreco(), item.getImagem());
	}
}
