package com.example.Casamento.item;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;



@Table(name="presente")
@Entity(name="presente")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Item {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String nome;
	private String preco;
	private String loja;
	private String imagem;
	
	public Item(ItemRequestDTO data) {
		this.preco = data.preco();
		this.loja = data.loja();
		this.imagem = data.imagem();
		this.nome = data.nome();
	}
}
